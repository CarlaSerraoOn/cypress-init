const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: true, // Captura screenshots em caso de falha
    video: true, // Registra vídeos dos testes
  },
});
