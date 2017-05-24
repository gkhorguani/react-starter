var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //entry: "./app/components/Main.js",
    entry: {
      main_module: "./app/components/Main.js",
      names_module: "./app/components/Names/Names.js"
    },
    output: {
        //filename: "public/boundle.js"
        path: __dirname,
        filename: "public/bundles/[name].bundle.js"
    },
    plugins: [
        //new OpenBrowserPlugin({ url: 'http://localhost:8080' })
        new ExtractTextPlugin('public/css/[name].css'),
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
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader",
                }),
            }
        ]
    }
};
