const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",

  target: "node",

  entry: {
    app: path.resolve(__dirname, "src", "index.js")
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
