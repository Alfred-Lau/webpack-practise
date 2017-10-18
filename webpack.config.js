var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].bundle.js'
    },
    plugins: [
        // 页面和模板可以自由搭配
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                // exclude: __dirname + '/node_modules/',
                // include: __dirname + './src/',
                // 三种方式： package.json, .babelre
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            /*webpack requires an identifier (ident) in options when {Function}/require is used (Complex Options). The ident can be freely named as long as it is unique. It's recommended to name it (ident: 'postcss')*/
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 versions']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            /*webpack requires an identifier (ident) in options when {Function}/require is used (Complex Options). The ident can be freely named as long as it is unique. It's recommended to name it (ident: 'postcss')*/
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 versions']
                                })
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.(png|jpg|ico|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash:5].[ext]'
                    }
                }]
            },
            {
                test: /\.(png|jpg|ico|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 81920
                    }
                }]
            }
        ]
    },
    // postcss: function () {
    //     return [
    //         require('postcss-smart-import')({}),
    //         require('precss')({}),
    //         require('autoprefixer')({
    //             browsers: ['last 5 versions']
    //         }),
    //     ]
    // }
}