const path = require('path')
const webpack = require('webpack')

module.exports = function (env) {
  return {
    entry: {
      app: [
        path.join(__dirname, 'index.js')
      ]
    },
    output: {
      path: __dirname,
      filename: 'app.js'
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin()
    ].filter((p) => !!p),
    resolve: {
      extensions: ['.js', '.jsx', '.css'],
      modules: [
        'node_modules',
        path.join(__dirname, 'node_modules')
      ]
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: [
                  [
                    'env', {
                      modules: false,
                      loose: true
                    }
                  ],
                  'react',
                  'stage-0'
                ],
                plugins: [
                  'transform-decorators-legacy',
                  'transform-class-properties'
                ]
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /(\.css)$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
  }
}
