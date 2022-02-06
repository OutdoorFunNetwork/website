export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Outdoor Fun Network',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Outdoor Fun Network is a collective of outdoor enthusiasts who would like to pass our love of outdoor adventures on to others. Here you will find bike rides, bikepacking, backpacking, hikes, runs, snowboarding, skiing and generally anything else outdoors.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: 'https://res.cloudinary.com/outdoorfunnetwork/image/upload/v1636081670/favicon_zbgkuh.svg'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Roboto+Slab:wght@700;900&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [{
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faStrava', 'faGithub', 'faInstagram']
      }]
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  server: {
    port: 8080
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.VUE_APP_API_URL || 'http://localhost:3000/api'
  }
}
