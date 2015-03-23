# react-styled

> higher-order-component for dynamic stylesheet usage w/ webpack

[![Build Status](https://travis-ci.org/bloodyowl/react-styled.svg?branch=master)](https://travis-ci.org/bloodyowl/react-styled)

## install

```console
$ npm install bloody-react-styled --save-dev
```

## require

```javascript
import Styled from "bloody-react-styled"
```

## API

### Styled(Component) > StyledComponent

creates a new component that `uses` a given stylesheet just before mount,
and stops using it when the component unmounts.

with multiple components, the stylesheet is only removed when the last
component using it is unmounted.

the `Component` must contain a `styles` static property containing the
`style-loader/useable` instance.

first, install `style-loader`, `css-loader` and possibility the loader
of your choice for a pre/post-processor.

```console
$ npm install --save-dev style-loader css-loader
```

to configure webpack for that, use in your webpack.config.js :

```javascript
const config = {
  // ...
  module : {
    loaders : [
      // ...
      {
        test : /\.css$/,
        loaders [
          // use the useable to only use the stylesheet when necessary
          "style/useable",
          "css",
          // example post-processor you might want to use
          "cssnext",
        ],
      },
    ],
  },
  // ...
}
```

then you can do

```javascript
import React, {Component} from "react"
import Styled from "bloody-react-styled"

import styles from "./styles.css"

class MyComponent extends Component {

  static styles = styles

  render() {
    return (
      <div className="MyComponent">
        will be styled!
      </div>
    )
  }
}

export default Styled(MyComponent)
```

## accessing your styled component

the component returned by `Styled` will contain a `component` static
property which contains the wrapped component.

this can be useful in case it also contains a static for data-fetching.

## [license](LICENSE)
