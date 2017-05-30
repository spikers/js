var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';


const externals = {
    'jquery': 'jQuery' //jQuery is external and available at the global variable jquery, do not include
  };

var entry = PRODUCTION 
  ?   [ './src/index.js' ]
  :   [ 
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
      ];

// Plugins defines which external plugins we'll use. 
// I think this differs from modules (below) because plugins are baked into webpack while modules are not.
// We see plugins have the power to create files and modify files
var plugins = PRODUCTION
  ? [
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('style-[contenthash:10].css'),
      new HTMLWebpackPlugin({
        template: 'index-template.html'
      })
    ]
  : [
      new webpack.HotModuleReplacementPlugin()
    ]

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION)
  })
)

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]--[local]';

const cssLoader = PRODUCTION
  ? ExtractTextPlugin.extract({
      use: 'css-loader?localIdentName=' + cssIdentifier
    })
  : ['style-loader', 'css-loader?localIdentName=' + cssIdentifier];

// Mod defines the loaders we use. So for *.js$ files, we use babel.
// For picture files, we use url-loader
// For CSS files, we use 'cssLoader', which is css-loader?localIdentName=[hash:base64:10]
const mod = {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/'
    }, {
      test: /\.(png|jpe?g|gif)$/,
      loaders: ['url-loader?limit=20000&name=images/[hash:12].[ext]'],
      exclude: '/node_modules/'
    }, {
      test: /\.css$/,
      loaders: cssLoader,
      exclude: '/node_modules/'
    }]
  };

const output = {
    path: path.join(__dirname, 'dist'),
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
  };


module.exports = {
  externals: externals,
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  module: mod,
  output: output
}