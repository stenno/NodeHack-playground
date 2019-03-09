const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  module: {
    
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.html$/,
        use: [
          { loader: "html-loader" }
        ]
      }, {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }, {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'web/index.html',
      filename: "./index.html"
    })
  ],
  entry: "./web/js/app.js",
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets'
  }
};