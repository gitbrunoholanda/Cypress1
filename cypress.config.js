const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'aodrwi',
  e2e: {
    baseUrl : 'http://automationpratice.com.br/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
