const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'm4dzbb',
    viewportHeight:1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    retries:{
      runMode: 1
    },

  e2e: {
    baseUrl: 'https://bs.tartanhq.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    screenshotsFolder: 'cypress/failures/screenshots',
  },
});
