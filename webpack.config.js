const path = require('path');

module.exports = {
    mode: "development", // change to production or create a production version when ready to be optimized
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 9000
    },
    module: {
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                // the loader which should be applied, it'll be resolved relative to the context
                // -loader suffix is no longer optional in webpack2 for clarity reasons
                // see webpack 1 upgrade guide
                options: {
                    presets: ["env", "react"]
                },
                // options for the loader
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    {loader: "css-loader"},
                    {loader: "style-loader"}
                ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [ 
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ] 
            },
            {
                test: /\.jpg$/,
                use: [
                    {loader: "url-loader"}
                ]
            }
        ]
    }
}