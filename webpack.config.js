const path = require('path');

module.exports = {
    // APP ENTRY POINT
    entry: path.join(__dirname,'src','index.jsx'),
    // OUTPUT DIRECTORY
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.bundle.js'
    },
    // EVIROMENT MODE
    mode: process.env.NODE_ENV || 'development',
    // PATH RESOLVE
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    // DEV SERVER ENTRY POINT
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        port: 3500,
        watchContentBase: true,
        open: true
    },
     // PATH RESOLVE
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },
};
