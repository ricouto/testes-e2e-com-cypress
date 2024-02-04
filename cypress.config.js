const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: 'u1fgwa',
    baseUrl: 'https://notes-serverless-app.com',
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
})
