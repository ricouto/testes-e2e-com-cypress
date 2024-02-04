const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'u1fgwa',
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
})
