const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "/src/lib/index.js",
  output: {
    filename: "main.js",
    libraryTarget: "umd",
  },
  mode: "development",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "singletonStyleTag" },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "url-loader",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  externals: [nodeExternals()],
};
