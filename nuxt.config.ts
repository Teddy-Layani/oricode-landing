// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'Oricode AI - SAP Development, Supercharged',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AI-powered coding assistant for SAP ABAP developers. Write better code faster with Claude AI integration for Eclipse ADT.' },
        { name: 'keywords', content: 'SAP, ABAP, AI, Eclipse, ADT, coding assistant, Claude, Anthropic' },
        { property: 'og:title', content: 'Oricode AI - SAP Development, Supercharged' },
        { property: 'og:description', content: 'AI-powered coding assistant for SAP ABAP developers.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://oricode.ai' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [],

  compatibilityDate: '2025-01-04'
})
