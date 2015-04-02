const Styled = (StyledComponent) => {

  if(StyledComponent.styles == null) {
    throw new TypeError(
      `StyledComponent: missing \`styles\` static property. ` +
      `check ${ StyledComponent.name }'s statics`
    )
  }

  const componentWillMount = StyledComponent.componentWillMount
  const componentWillUnmount = StyledComponent.componentWillUnmount

  Object.assign(
    StyledComponent.prototype,
    {
      componentWillMount() {
        this.constructor.styles.use()
        if(componentWillMount) {
          componentWillMount.call(this)
        }
      },

      componentWillUnmount() {
        if(componentWillUnmount) {
          componentWillUnmount.call(this)
        }
        this.constructor.styles.unuse()
      }
    }
  )

  return StyledComponent

}

Styled.version = __VERSION__

export default Styled
