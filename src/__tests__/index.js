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
  class TestComponent extends Component {

    static styles = mockStyles

    componentDidMount() {
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
  test.equal(
    TestStyledComponent.component,
    TestComponent,
    "StyledComponent keeps a reference to Component in its statics"
  )
  const testNode = document.createElement("div")
  React.render(<TestStyledComponent />, testNode)
})
