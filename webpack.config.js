import webpack from 'webpack';

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/dev-server',
    './src/'
  ],
  output: {
    path: __dirname + '/public/static/',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
};

export default config;
