const withNextra = require('nextra')

const config = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    unoptimized: true
  }
})

console.log(config)

module.exports = config
