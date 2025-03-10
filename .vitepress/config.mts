import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Niubiz Form",
  description: "💳 Integración de Niubiz en su proyecto, con configuración mínima y proxy integrado.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/install' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Instalación', link: '/docs/install' },
          { text: 'Configuración', link: '/docs/configuration' },
          { text: 'Vista de formulario', link: '/docs/form' },
          { text: 'Lectura de pago', link: '/docs/readpay' },
          { text: 'Proxy (Opcional)', link: '/docs/proxy' },
        ]
      },
      {
        text: 'Ejemplos',
        items: [
          { text: 'React', link: '/examples/react' },
          { text: 'Vue', link: '/examples/vue' },
          { text: 'Angular', link: '/examples/angular' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'npm', link: 'https://www.npmjs.com/package/@dankira/niubiz' },
      { icon: 'github', link: 'https://github.com/antonyayansi/niubiz' },
      { icon: 'x', link: 'https://x.com/_dankira_'}
    ],

    footer: {
      message: '© 2025 Todos los derechos reservados.',
      copyright: 'Hecho con ❤️ por <a target="_blank" href="https://x.com/_dankira_">@dankira</a>'
    },
  },
  head: [
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦄</text></svg>' }]
  ]
})
