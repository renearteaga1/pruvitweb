// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
// };

// const path = require("path");
// const getFilesFromDir = require("./config/files");
// const PAGE_DIR = path.join("pruvitweb/*/templates", "*", path.sep);

// const jsFiles = getFilesFromDir(PAGE_DIR, [".js"])

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: {
//         'index': './pruvitweb/frontend/src/index.js',
//         'inventario': './pruvitweb/inventario/src/inventario.js',
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             chunks: ["index", "vendor"],
//             template: ["pruvitweb/frontend/static/frontend/index.html"],
//             filename: "index.html"
//         }),
//         new HtmlWebpackPlugin({
//             chunks: ["inventario", "vendor"],
//             template: ["pruvitweb/inventario/static/frontend/index.html"],
//             filename: "index.html"
//         }),
//     ]
// }

let path = require("path");
let BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  entry: {
    inventario: "./pruvitweb/inventario/src/inventario.js",
    index: "./pruvitweb/frontend/src/index.js",
  },
  output: {
    filename: "[name]-[hash].js",
    // chunkFilename: "[name]-[hash].js",
    path: path.resolve(__dirname + "/pruvitweb/static/"),
    publicPath: "/static/",
    clean: true,
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
    ],
  },
  plugins: [new BundleTracker({ filename: "./webpack-stats.json" })],
};
