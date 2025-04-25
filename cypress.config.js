const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sandbox.watad.vip',
    devices: {
      mobile: {
        viewportWidth: 375, // iPhone X size (mobile)
        viewportHeight: 667, // iPhone X size (mobile)
      },
      tablet: {
        viewportWidth: 768, // iPad size (tablet)
        viewportHeight: 1024, // iPad size (tablet)
      },
      desktop: {
        viewportWidth: 1280, // Standard desktop size
        viewportHeight: 720, // Standard desktop height
      },
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
