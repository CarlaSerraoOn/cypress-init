const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  e2e: {
    baseUrl:'https://automationpratice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    screenshotOnRunFailure: true, // Captura screenshots em caso de falha
    video: true, // Registra vídeos dos testes
  },
});
