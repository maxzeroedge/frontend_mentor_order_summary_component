const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const sveltePreprocess = require('svelte-preprocess')
const {sass} = require('svelte-preprocess-sass')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(path.dirname(__filename), 'docs'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Order Summary"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public/images', to: 'images'
                }
            ]
        })
    ],
    resolve: {
        // see below for an explanation
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    module: {
        rules: [
            {
                test: /\.(svelte)$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        preprocess: sveltePreprocess({
                            /* TODO: options */
                            style: sass()
                        })
                    }
                }
            },
            {
                // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public', 'images'),
        },
        compress: true,
        port: 9000,
    },
}