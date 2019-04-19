// webpack v4
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const dev = argv.mode === "development";
  const release = process.env.RELEASE ? true : false;

  return {
    devtool: "inline-source-map",
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "dist"),
      compress: true
    },
    entry: ["./src/index.js"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg|webp)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                emitFile: dev ? true : false,
                outputPath: "media/",
                name: "[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                emitFile: dev ? true : false,
                name: "[name].[ext]",
                outputPath: "fonts/"
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: "src/data", to: "data" },
        { from: "src/surge-assets/" + (release ? "prod" : "dev"), to: "" }
      ]),
      new ExtractTextPlugin({ filename: "style.css" }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: "./src/index.html",
        filename: "index.html"
      })
    ]
  };
};
