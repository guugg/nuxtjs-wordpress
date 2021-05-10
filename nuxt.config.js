export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cloopro',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // 全局CSS
  css: ['~/assets/main.scss'],
  styleResources: {
    scss: ['~/assets/variables.scss']
  },

  // 模组
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  // Axios 模块配置
  axios: {
    baseURL: 'http://localhost'
  },
  // 插件引入
  plugins: [
    { src: '@/plugins/data.server', ssr: true },
    { src: '@/plugins/ElementUI', ssr: true } // Nuxt 默认为开启 SSR，采用服务端渲染，也可以手动配置关闭false
  ],
  // 防止内存泄漏
  hooks: {
    'build:done' () {
      const modulesToClear = ['vue', 'vue/dist/vue.runtime.common.prod']
      modulesToClear.forEach((entry) => {
        delete require.cache[require.resolve(entry)]
      })
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    }
  }
}