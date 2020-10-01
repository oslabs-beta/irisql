const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    // allows you to specify the base path for all the assets within our application
    publicPath: "/",
  },
  devServer: {
    publicPath: "/build/",
    // watchContentBase: true,
    // contentBase: path.resolve(__dirname, './client'),
    // redirect 404s to /index.html.
    // historyApiFallback: true,
    hot: true,
    proxy: {
      "/": "http://localhost:3000/",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/,
        loader: "url-loader?limit=1024000",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
