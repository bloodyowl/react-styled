import React, {Component} from "react"

const Styled = (StyledComponent) => {

  if(StyledComponent.styles == null) {
    throw new TypeError(
      `StyledComponent: missing \`styles\` static property. ` +
      `check ${ StyledComponent.name }'s statics`
    )
  }

  const styles = StyledComponent.styles

  return class Styled extends Component {

    static component = StyledComponent

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
}

Styled.version = __VERSION__

export default Styled
