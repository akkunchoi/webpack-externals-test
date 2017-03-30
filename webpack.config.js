'use strict';

module.exports = {
  entry: {
    'app.min.js': './index',
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name]',
    libraryTarget: 'umd',
    library: 'foo'
  },
  externals: [
    {
      moment: true,
    },
    function(context, request, callback) {
      if (request === 'lodash') {
        return callback(null, '_');
      }
      callback();
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?presets=es2015'
        ]
      },
    ]
  },
};
