const path = require('path');
const CopyWebPackPlugin = require('copy-webpack-plugin');


const rules= [
  {
    test: /\.js$/,
    use: [
      {loader: 'babel-loader'}
    ],
    exclude: /node_modules/,
    include: __dirname
  },
  {
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'less-loader' }
    ]
  },
  {
    test: /\.scss/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'sass-loader' }
    ]
  },
  {
    test: /\.css/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' }
    ]
  },
  {
    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: 'url-loader?limit=10000',
  },
  {
    test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
    use: 'file-loader',
  },
  {
    test: /bootstrap-sass\/assets\/javascripts\//,
    use: 'imports-loader?jQuery=jquery'
  },
];

const plugins = [
  new CopyWebPackPlugin([
    {'from': './src/client/index.html', 'to': '../index.html'}
  ])
];

module.exports = {
  entry: {
    index: './src/client/index.js'
  },
  output: {
    path: path.join(__dirname, './dist/app/client/scripts'),
    filename: '[name].entry.js'
  },
  module: {
    rules: rules
  },
  target: 'electron-renderer',
  plugins: plugins
};