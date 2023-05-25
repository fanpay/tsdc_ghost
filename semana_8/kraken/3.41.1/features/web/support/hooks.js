const { After, Before, AfterStep } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const fs = require("fs");


//STRUCTURE SCREENSHOT DIRECTORY
/** 
 * - screenshots
 *    - E12_paginas
 *      - E12 (1).png
 * */
Before(async function() {
  this.deviceClient = new WebClient('chrome', {'scenario':'E0', 'step': 1}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);

  // Crea el directorio 'screenshots' si no existe
  if (!fs.existsSync("screenshots")) {
    fs.mkdirSync("screenshots");
  }
})


AfterStep(async function (context) {
  // console.log("Feature:"+context.gherkinDocument.feature.name.toString());
  // console.log("Scenario:"+context.pickle.name.toString());
  // console.log("Steps:"+context.pickle.steps[0].text.toString());
  // console.log(JSON.stringify(context));

  if (!fs.existsSync("screenshots/"+this.deviceClient.otherParams.scenario)) {
    fs.mkdirSync("screenshots/"+this.deviceClient.otherParams.scenario);
  }

  this.driver.pause(1000);

  let step_file = this.deviceClient.otherParams.scenario+ " ("+ this.deviceClient.otherParams.step + ").png"
  const screenshotPath = "./screenshots/" + this.deviceClient.otherParams.scenario + "/" + step_file;
  const screenshotData = await this.driver.takeScreenshot();
  fs.writeFileSync(screenshotPath, screenshotData, "base64");

  //this.driver.saveScreenshot("./screenshots/" + this.deviceClient.otherParams.scenario + "/" + step_file);

  this.deviceClient.otherParams.step++ 
});


After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
