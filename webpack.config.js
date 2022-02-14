const nodeExternals = require("webpack-node-externals");
const serverlessWebpack = require("serverless-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "inline-cheap-module-source-map",
  entry: serverlessWebpack.lib.entries,
  mode: serverlessWebpack.lib.webpack.isLocal ? "development" : "production",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  node: false,
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  plugins: [new CopyWebpackPlugin({ patterns: ["ormconfig.js"] })],
};
