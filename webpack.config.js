
module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    sub: './src/js/sub.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                '@babel/preset-env',
            ]
          }
        },
      },
    ],
  },
}
