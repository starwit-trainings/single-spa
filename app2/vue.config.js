const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
}