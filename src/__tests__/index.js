import tape from "tape"
import React, {Component, addons} from "react/addons"

const TestUtils = addons.TestUtils

import Styled, {version} from ".."

tape("Styled", (test) => {

  test.plan(6)


  test.equal(
    /\d+\.\d+\.\d+/.test(version),
    true,
    "version is defined"
  )
  let used = 0
  const mockStyles = {
    use() {
      test.equal(++used, 1)
    },
    unuse() {
      test.equal(--used, 0)
    }
  }
  let componentWillMountCalled = false
  class TestComponent extends Component {

    static styles = mockStyles
    static foo = "bar"

    componentWillMount() {
      componentWillMountCalled = true
    }

    componentWillUnmount() {
      test.pass(
        "componentWillUnmount is called"
      )
    }

    componentDidMount() {
      test.equal(
        componentWillMountCalled,
        true,
        "componentWillMount is called"
      )
      setTimeout(() => {
        React.unmountComponentAtNode(testNode)
      }, 50)
    }

    render() {
      return (
        <div />
      )
    }
  }
  const TestStyledComponent = Styled(TestComponent)
  test.equal(TestStyledComponent.foo, "bar", "statics are copied")
  const testNode = document.createElement("div")
  React.render(<TestStyledComponent />, testNode)
})
