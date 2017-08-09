const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
         {
         test: /\.(js)$/,
         use: 'babel-loader',
         exclude: /node_modules/
        
       }

     ]
   },
    plugins:[new HtmlWebpackPlugin({
        template: 'src/index.html'
    })]
        
};