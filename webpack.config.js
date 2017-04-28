var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: "./app/components/Main.js",
    output: {
        filename: "public/boundle.js"
    },
    plugins: [
        //new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
        ]
    }
};