const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');



module.exports = {
    mode    : "development",
    entry   : path.resolve(__dirname, 'src/index.js'),
    output  : {
        path        : path.resolve(__dirname, 'bundle'),
        filename    : 'bundle.js',
        assetModuleFilename : '[name][ext]',
        clean       : true
    },
    devServer   : {
        static  : {
            directory   : path.resolve(__dirname, 'bundle')
        },
        port    : 3000,
        open    : true,
        hot     : true,
        compress : true
    },
    module      : {
        rules   : [
            {
                test        : /\.js$/,
                exclude     : /node_modules/,
                use         : {
                    loader  : 'babel-loader',
                    options : {
                        presets  : ['@babel/preset-env']
                        }
                    }
            },
            {
                test        : /\.(css|scss)$/,
                use         : ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test        : /\.(jpg|jpeg|gif|png|webp|svg)$/,
                type         : 'asset/resource'
            }
        ]
    },
    plugins     : [
        new HtmlWebPlugin({
            title   : 'React Er Fufato Vai',
            filename    : 'index.html',
            template    : 'public/index.html'
        })
    ]
}