const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyPlugin =require('copy-webpack-plugin');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|.styl$/i,
        use: [miniCssExtractPlugin.loader, "css-loader","stylus-loader"],
      },
      {
        test:/\.png/,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new miniCssExtractPlugin(),
    new copyPlugin({
      patterns:[{
        from: path.resolve(__dirname,"src","assets/images"),
        to: "assets/images"
      }]
    })
  ],
};
