const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

const resolve = (dir) => {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: `./`,
  outputDir: `./dist/${process.env.project}`,
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/style/_init.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': resolve('src'),
        '@': resolve('src')
      }
    },
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}']
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist', process.env.project),
        routes: ['/index.html'],
        postProcess (renderedRoute) {
          if (renderedRoute.route.endsWith('.html')) {
            renderedRoute.outputPath = path.join(
              __dirname,
              'dist',
              process.env.project,
              renderedRoute.route
            )
          }
          return renderedRoute
        }
      })
    ]
  }
}
