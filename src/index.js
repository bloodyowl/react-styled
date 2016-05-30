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
    
    let mountCount = 0
    
    Object.assign(
      StyledComponent.prototype,
      {
        componentWillMount() {
          mountCount++

          if ( mountCount === 1 ) {
            styles.use()
          }

          if(componentWillMount) {
            componentWillMount.call(this)
          }
        },

        componentWillUnmount() {
          mountCount--

          if(componentWillUnmount) {
            componentWillUnmount.call(this)
          }
          
          if ( mountCount === 0 ) {
            styles.unuse()
          }

        },
      }
    )

    return StyledComponent
  }

}

export const version = __VERSION__
