import postgraphile from './config/postgraphile'

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CMTY with Graphile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CMTY is a Collaboration Platform for Open Source Projects.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
    '~/modules/nuxt-postgraphile'
  ],

  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/postgraphile/graphql'
      }
    }
  },

  postgraphile,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    }
  }
}
