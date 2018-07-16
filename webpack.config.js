/*
 * Created by Sun Wen on 2018/6/4.
 */
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_DEV === 'development'
const config = {
    target: "web",
    devtool: "#cheap-module-eval-source-map",
    entry: [
        path.join(__dirname, 'src/index.js'),
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }, {
                test: /\.jsx$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    "css-loader", {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    "stylus-loader"
                ]
            }, {
                test: /\.(gif|jpg|jqep|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
}
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
if (isDev) {
    config.devServer = {
        // toolbar: 'cheap-module-eval-source-map',
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: 'localhost',
        port: 8080,
        overlay: {
            errors: true
        },
    }
    config.plugins.push(
        new webpack.HotModuleRepalcementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config
