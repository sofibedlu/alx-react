const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        header: path.resolve(__dirname, './modules/header/header.js'),
        body: path.resolve(__dirname, './modules/body/body.js'),
        footer: path.resolve(__dirname, './modules/footer/footer.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['header', 'body', 'footer']
        })
    ],
    mode: 'development',
    performance: {
		maxAssetSize: 1000000,
	},
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 8564,
        static: path.join(__dirname, 'public'),
        open: true
    }
};
