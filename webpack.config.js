const path = require('path');
const HtmlWPPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devServer: {
    port: 3001,
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: __dirname,
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|csss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // },
      {
        test: /\.svg$/,
        use: [{
          loader: '@svgr/webpack',
          options: {
            icon: true,
            native: true,
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWPPlugin({
      title: 'Hero builder',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};
