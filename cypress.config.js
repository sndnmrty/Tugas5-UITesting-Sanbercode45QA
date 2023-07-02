const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
      /*setupNodeEvents(on, config) {
        // implement node event listeners here
      },*/
      baseUrl : "https://kasirdemo.belajarqa.com",
      specPattern : "cypress/support/e2e",
      chromeWebSecurity : false,
      supportFile : false
    }
  });