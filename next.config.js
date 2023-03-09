const withNextra = require('nextra')

module.exports = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    unoptimized: true
  }
})
