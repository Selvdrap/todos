const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/index.tsx"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: "last 2 versions"
                  }
                }
              ],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ["@svgr/webpack", "url-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
