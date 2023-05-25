module.exports = {
  projectId: "Ghost test cases",
  ghostUrl: "http://localhost:3002/ghost/",
  ghostAuthUrl: "http://localhost:3002/ghost/api/v3/admin/session",
  email: "test@test.com",
  password: "Testing1234567890.",
  postEditNegativeText: "http://www.uniandes.edu.co",
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
