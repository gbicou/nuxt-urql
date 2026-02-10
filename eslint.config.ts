import playground from './playground/eslint.config'

export default playground.override('nuxt/disables/routes', {
  files: ['**/pages/**/*.vue'],
})
