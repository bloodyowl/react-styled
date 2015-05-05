export default (styles) => {

  if(styles == null) {
    throw new TypeError(
      `bloody-react-styled: missing \`styles\` static property. ` +
      `check ${ StyledComponent.name }`
    )
  }

  return (StyledComponent) => {

    const componentWillMount =
      StyledComponent.prototype.componentWillMount
    const componentWillUnmount =
      StyledComponent.prototype.componentWillUnmount

    Object.assign(
      StyledComponent.prototype,
      {
        componentWillMount() {
          styles.use()
          if(componentWillMount) {
            componentWillMount.call(this)
          }
        },

        componentWillUnmount() {
          if(componentWillUnmount) {
            componentWillUnmount.call(this)
          }
          styles.unuse()
        },
      }
    )

    return StyledComponent
  }

}

export const version = __VERSION__
