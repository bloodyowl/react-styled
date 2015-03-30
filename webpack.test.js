import "es5-shim"
import "es5-shim/es5-sham"
import assign from "object-assign"

if(!Object.assign) {
  Object.assign = assign
}

const context = require.context("./src", true, /__tests__\/\S+\.js$/)
context.keys().forEach(context)
