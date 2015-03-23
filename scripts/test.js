import webpack from "webpack"
import config from "../webpack.test.config"

webpack(config, (err, stats) => {
  if(err) {
    throw err
  }
  console.log(stats.toString())
})
