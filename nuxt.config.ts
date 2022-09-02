import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    apiUrl: '' // setting `API_BASE` in your `.env` will override this
  },
  ssr: false,
  components: false,
  css: [
    '@/assets/fonts/montserrat/stylesheet.css',
    '@/assets/styles/global.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
  }
})
