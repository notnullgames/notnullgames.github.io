import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

export default {
  logo: <span>null0</span>,
  project: {
    link: 'https://github.com/notnullgames/null0'
  },
  docsRepositoryBase: 'https://github.com/notnullgames/notnullgames.github.io',
  footer: {
    text: `${new Date().getFullYear()} © notnullgames`
  },
  banner: {
    key: 'release-0.0.0',
    text: <a href='https://github.com/notnullgames/null0/releases/tag/0.0.0' target='_blank' rel='noreferrer'>
      🎉 Our first version was just released! It's just enough to make a cool 2D game. Read more →
    </a>
  },
  useNextSeoProps () {
    return {
      titleTemplate: '%s – null0'
    }
  }
}
