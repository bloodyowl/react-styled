import "es5-shim"
import "es5-shim/es5-sham"

const context = require.context("./src", true, /__tests__\/\S+\.js$/)
context.keys().forEach(context)
