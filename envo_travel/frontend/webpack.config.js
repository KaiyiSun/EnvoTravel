const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src/index.js"), // "./src/index.js",
  watch: true,
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "static/frontend"), // path.resolve(__dirname, "./static/frontend"), // string (default)
    filename: "[name].js", // string (default)
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        // Conditions:
        test: /\.js$/,
        exclude: /node_modules/,
        // options for the loader
        use: {
          loader: "babel-loader",
        },
      },
    ],
    /* Advanced module configuration (click to show) */
  },
  plugins: [
    new webpack.DefinePlugin({
      // "process.env": {
      //   NODE_ENV: JSON.stringify("development"),
      // },
    }),
  ],
  optimization: {
    minimize: true,
  },
};
