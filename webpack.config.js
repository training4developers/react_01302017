const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// configure source and distribution folder paths
const srcFolder = 'src';
const distFolder = 'dist';

// merge the common configuration with the environment specific configuration
module.exports = {

    // entry points for the three bundles, order does not matter
    entry: {
        'app': './src/js/app.js'
    },

    // allows us to require modules using
    // import { someExport } from './my-module';
    // instead of
    // import { someExport } from './my-module.ts';
    // with the extensions in the list, it can be omitted from the import
    // root is an absolute path to the folder containing our application modules
    resolve: {
        extensions: ['', '.js', '.json'], // order matters, resolves left to right
        root: path.join(__dirname, srcFolder, 'js')
    },

    module: {
        loaders: [
            // process all JavaScript files through the Babel preprocessor
            // this enables support for ES2017 and earlier including modules
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest'],
                    plugins: ['transform-class-properties', 'transform-flow-strip-types']
                }
            },
            // processes JSON files, useful for config files and mock data
            {
                test: /\.json$/,
                loader: 'json'
            },
            // transpiles global SASS stylesheets
            // loader order is executed right to left
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            }
        ]
    },

    // configuration for the postcss loader which modifies CSS after
    // processing
    // autoprefixer plugin for postcss adds vendor specific prefixing for
    // non-standard or experimental css properties
    postcss: [require('autoprefixer')],

    // copy image files, and the index.html file directly when they are changed
    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(__dirname, srcFolder, 'images'),
            to: path.join(__dirname, distFolder, 'images')
        }]),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, srcFolder, 'index.html'),
            to: path.join(__dirname, distFolder, 'index.html')
        }])
    ],

    // output file settings
    // path points to web server content folder where the web server will serve the files from
    // file name is the name of the files, where [name] is the name of each entry point	
    output: {
        path: path.join(__dirname, distFolder, 'js'),
        filename: '[name].js'
    },

    // use full source maps
    // this specific setting value is required to set breakpoints in the TypeScript
    // in the web browser for development
    // other source map settings do not allow debugging in browser and vscode
    devtool: 'source-map',

    // use the webpack dev server to serve up the web application
    devServer: {
        // files are served from this folder
        contentBase: 'dist',
        outputPath: path.join(__dirname, 'dist'),
        // support HTML5 History API for react router
        historyApiFallback: true,
        // listen to port 5000, change this to another port if another server 
        // is already listening on this port
        port: 5000,
        // proxy requests to the JSON server REST service
        proxy: {
            // server to proxy
            '/widgets': {
                target: 'http://localhost:3010'
            },
            '/cars': {
                target: 'http://localhost:3010'
            },
            '/owners': {
                target: 'http://localhost:3010'
            },
            '/people': {
                target: 'http://localhost:3010'
            },
            '/authors': {
                target: 'http://localhost:3010'
            },
            '/books': {
                target: 'http://localhost:3010'
            }
        }
    }
};