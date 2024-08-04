const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "c3zqfn",
    video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
