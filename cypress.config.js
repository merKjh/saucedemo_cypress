const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    retries: 2,
    video: true,
    screenshotOnRunFailure: true,

    pageLoadTimeout: 200000, // Increase timeout to 2 minutes
    defaultCommandTimeout: 200000, // Increase for element interactions
    
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-extensions");
          launchOptions.args.push("--disable-popup-blocking");
        }
        return launchOptions;
      });
    },
    specPattern: "cypress/e2e/**/*.cy.js",
  },
  chromeWebSecurity: false, // Disable security to avoid cross-origin issues
  experimentalSessionAndOrigin: true, // Needed for cy.origin()
  pageLoadTimeout: 200000, // Increase timeout to 2 minutes
  defaultCommandTimeout: 200000,
});
