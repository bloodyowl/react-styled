import path from "path"
import webpack from "webpack"
import { version as __VERSION__ } from "./package.json"

const config = {

  colors : true,
  progress : true,

  entry : {
    index : [
      "./src/index",
    ],
  },

  output : {
    path : path.resolve(__dirname, "dist"),
    library : "Styled",
    libraryTarget : "umd",
    filename : "[name].js",
  },

  resolve : {
    extensions : [
      "",
      ".js",
    ]
  },

  plugins : [
    new webpack.DefinePlugin({
      __VERSION__ : `"${ __VERSION__ }"`
    }),
  ],

  module : {
    loaders : [
      {
        test : /\.js$/,
        loaders : [
          "babel?stage=0",
        ],
        exclude : /node_modules/,
      },
    ],
  },

  externals : [
    {
      "react" : {
        root : "React",
        commonjs2 : "react",
        commonjs : "react",
        amd : "react",
      },
    },
  ],

  node : {
    // tape …
    fs : "empty",
  },

}

export default config
