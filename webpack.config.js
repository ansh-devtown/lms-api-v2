const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },
    module: {
        rules: [
            {
                test: /\.m?ts$/,
                exclude: /\/node_modules\//,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['transform-class-properties', '@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
}