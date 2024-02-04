const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'u1fgwa',
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'https://notes-serverless-app.com',
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
})
