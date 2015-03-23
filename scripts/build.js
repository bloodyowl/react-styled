import webpack from "webpack"
import config from "../webpack.config"

webpack(config, (err, stats) => {
  if(err) {
    throw err
  }
  console.log(stats.toString())
})
