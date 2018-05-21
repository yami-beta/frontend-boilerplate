const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

let mode = process.env.WEBPACK_SERVE ? "development" : "production";
let publicPath = "/";

module.exports = {
  mode,
  entry: {
    index: [path.join(__dirname, "src", "index.jsx")]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: mode === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: "[name]--[local]--[hash:base64]",
              sourceMap: mode === "development"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: mode === "development"
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: mode === "development"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: /^\**!|@preserve|@license|@cc_on/
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
