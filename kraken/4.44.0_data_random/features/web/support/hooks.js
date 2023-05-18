const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const fs = require("fs");

Before(async function() {
  this.deviceClient = new WebClient('chrome', {'scenario':'E0', 'step': 1}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})


After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
