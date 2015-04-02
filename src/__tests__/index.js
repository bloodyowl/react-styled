import tape from "tape"
import React, {Component, addons} from "react/addons"

const TestUtils = addons.TestUtils

import Styled, {version} from ".."

tape("Styled", (test) => {

  test.plan(4)


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

    componentDidMount() {
      test.equal(componentWillMountCalled, true)
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
