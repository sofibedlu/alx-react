const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
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
    mode: 'production',
    performance: {
        hints: false
    }
};
