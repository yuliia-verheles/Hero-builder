const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        filename: path.resolve(__dirname, 'src')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        port: 3001,
        open: true,
        compress: true,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: __dirname
        }
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|csss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
}
