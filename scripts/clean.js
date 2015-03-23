import rimraf from "rimraf"
import path from "path"

rimraf.sync(path.resolve(__dirname, "../dist"))

console.log("[clean] done!")
