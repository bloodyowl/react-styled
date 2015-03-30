import React, {Component} from "react"

const Styled = (StyledComponent) => {

  if(StyledComponent.styles == null) {
    throw new TypeError(
      `StyledComponent: missing \`styles\` static property. ` +
      `check ${ StyledComponent.name }'s statics`
    )
  }

  const styles = StyledComponent.styles

  class Styled extends Component {

    componentWillMount() {
      styles.use()
    }

    componentWillUnmount() {
      styles.unuse()
    }

    render() {
      return <StyledComponent {...this.props} />
    }
  }

  Object.assign(Styled, StyledComponent)

  return Styled
}

Styled.version = __VERSION__

export default Styled
