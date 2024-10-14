const { defineConfig } = require("cypress");

module.exports = defineConfig({


  defaultCommandTimeout: 6000,
  pageLoadTimeout:20000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,
    
    },
  projectId: "j3vj6e",
  e2e: {
    baseUrl: 'https://www.google.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/exapmples/*.js',
  
    
  },
});
