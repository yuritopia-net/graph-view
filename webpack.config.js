const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "graphview.js",
    path: path.resolve(__dirname, "dist"),
    library: "graphview",
    libraryTarget: process.env.LIBRARY_TARGET === "web" ? "var" : "commonjs2",
  },
}
