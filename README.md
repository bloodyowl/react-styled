# react-styled

> ES7 decorator for dynamic stylesheet usage w/ webpack

[![Build Status](https://travis-ci.org/bloodyowl/react-styled.svg?branch=master)](https://travis-ci.org/bloodyowl/react-styled)

## install

```console
$ npm install bloody-react-styled --save-dev
```

## require

```javascript
import styled from "bloody-react-styled"
```

## API

### @styled(styles) class

styled is a ES7 decorator that applies useable style only if at least one
instance of the component it is attached to is in mounted,
and removes it when there are no more instances.

## how to

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
          // example of css processor you might want to use
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
import styled from "bloody-react-styled"

import styles from "./styles.css"

@styled(styles)
class MyComponent extends Component {

  render() {
    return (
      <div className="MyComponent">
        will be styled!
      </div>
    )
  }
}

export default MyComponent
```

## [license](LICENSE)
