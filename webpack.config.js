const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    bundle: './src/scripts/index.js',
  },
  output: {
    path: path.join(__dirname, 'public/assets/scripts'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015'],
          },
        },
      },
    ],
  },
};
