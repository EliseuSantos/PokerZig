const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

// eslint-disable-next-line no-undef
module.exports = () => {
    const env = dotenv.config().parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        entry: './index.tsx',
        context: sourcePath,
        mode: 'development',
        output: {
            path: outPath,
            publicPath: '/',
            filename: isProduction ? '[contenthash].js' : '[hash].js',
            chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js',
        },
        target: 'web',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    loader: 'awesome-typescript-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /.js$/,
                    loader: 'source-map-loader',
                    enforce: 'pre',
                },
                {
                    test: /\.(jpg|jpeg|png|gif|svg|ico)$/,
                    use: 'file-loader?name=[name].[ext]?[hash]',
                },
            ],
        },
        optimization: {
            splitChunks: {
                name: true,
                cacheGroups: {
                    commons: {
                        chunks: 'initial',
                        minChunks: 2,
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        filename: isProduction ? 'vendor.[contenthash].js' : 'vendor.[hash].js',
                        priority: -10,
                    },
                },
            },
            runtimeChunk: true,
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
            }),
            new webpack.DefinePlugin(envKeys),
            new CopyWebpackPlugin([{ from: 'public/imgs', to: 'public/imgs' }]),
        ],
    };
};
