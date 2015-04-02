const Styled = (StyledComponent) => {

  if(StyledComponent.styles == null) {
    throw new TypeError(
      `StyledComponent: missing \`styles\` static property. ` +
      `check ${ StyledComponent.name }'s statics`
    )
  }

  class Styled extends StyledComponent {

    componentWillMount() {
      this.constructor.styles.use()
      if(super.componentWillMount) {
        super.componentWillMount()
      }
    }

    componentWillUnmount() {
      if(super.componentWillUnmount) {
        super.componentWillUnmount()
      }
      this.constructor.styles.unuse()
    }

  }

  return Styled
}

Styled.version = __VERSION__

export default Styled
