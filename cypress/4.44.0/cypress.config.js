module.exports = {
  projectId: "Ghost test cases",
  ghostUrl: "http://localhost:3002/ghost/#/dashboard",
  ghostAuthUrl: "http://localhost:3002/ghost/api/v3/admin/session",
  email: "j.ojedaa@uniandes.edu.co",
  password: "0123456789",
  postEditNegativeText: "http://www.uniandes.edu.co",
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
