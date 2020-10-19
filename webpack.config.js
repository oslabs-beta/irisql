const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    // allows you to specify the base path for all the assets within our application
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Prevents us from having to serve favicon in the server file
      favicon: path.resolve(__dirname, './public/images/favicon.png'),
      template: './client/index.html',
    }),
  ],
  devServer: {
    // match the output 'publicPath'
    publicPath: '/',
    // watchContentBase: true,
    // contentBase: path.resolve(__dirname, 'build'),
    // enable HMR on the devServer
    hot: true,
    // proxy is required in order to make api calls to express server while using
    // hot-reload webpack server
    proxy: {
      '/': 'http://localhost:3000/',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(png|jpg|woff|woff2|eot|ttf|svg|gif|ico)$/,
        loader: 'url-loader?limit=1024000',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
