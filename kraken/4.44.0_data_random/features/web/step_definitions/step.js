const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const GhostPage = require('./GhostPage');

const properties = require('../../../properties.json');
const kraken_random_data = require('../../../kraken_data.json');


let page;

When('Enter on element with xpath {kraken-string}', async function(xpath) {
    let element = await this.driver.$(xpath);
    return await element.setValue("\n");
});


When('I click element with xpath {kraken-string}', async function(xpath) {
    let element = await this.driver.$(xpath);
    await element.click();
    await page.wait(2);
});


Then('I set text {kraken-string} on element with xpath {kraken-string}', async function (input, xpath) {
    let view = await this.driver.$(xpath);
    await view.setValue(input);
    await page.wait(2);
});


Then('I should see the text {kraken-string} on plain element with xpath {kraken-string}', async function(text, xpath) {

    xpath = xpath.replace("#TEXT", text);

    let element = await this.driver.$(xpath);
    let element_text = await element.getText();

    await page.wait(2);
    assert.strictEqual(element_text, text);
});


Then('I should not see the text {kraken-string} on plain element with xpath {kraken-string}', async function(text, xpath) {
  let element = await this.driver.$(xpath);
  let element_text = await element.getText();
  assert.notEqual(element_text, text);
});


Then('I should see a partial text {kraken-string} on plain element with xpath {kraken-string}', async function(text, xpath) {
  let element = await this.driver.$(xpath);
  let element_text = await element.getText();

  assert.ok(element_text.includes(text), `Expected field value "${element_text}" to contain partial text "${text}"`);
});


Then('I should see the color {kraken-string} in element with xpath {kraken-string}', async function(color, xpath) {
  let element = await this.driver.$(xpath);

  let colorElement = await element.getCSSProperty("background")
  let colorValue = colorElement.value

  assert.ok(colorValue.includes(color), `Expected field value "${colorValue}" to contain partial text "${color}"`);
});


Then('The field with selector {kraken-string} should not exist', async function (selector) {
    let elements = await this.driver.$(selector);
    if (elements.length > 0) {
      throw new Error(`The field with selector "${selector}" should not exist`);
    }
});


Then("The plain field {kraken-string} should not the value {kraken-string}", async function (selector, value) {
    let element = await this.driver.$(selector);
    let elementValue = await element.getText();
    assert.notEqual(elementValue,value)
});

Given('For scenario {kraken-string}, I login in ghost using credentials with username {kraken-string} and password {kraken-string}', async function(scenario, username, password) {
    this.deviceClient.otherParams.scenario = scenario;    
    page = new GhostPage(this.driver);
    await page.login(username, password);
});



When('Sign out from ghost session', async function() {
  page = new GhostPage(this.driver);
  await page.logout();
});


When('Delete first publication created with title {kraken-string}', async function(title) {
    await page.delete_first_post(title);
});

When('I create a new post with title {kraken-string} and content {kraken-string}', async function(title, content) {
    await page.create_post(title, content);
});



When('I test pseudo data on element with xpath {kraken-string} with error {kraken-string} expected errors', {timeout: 10 * 10000}, async function (xpath, errorXpath) {
  var mydata = JSON.parse(JSON.stringify(kraken_random_data));  
  
  for (let item of mydata) {   
      let element = await this.driver.$(xpath);
      await element.setValue(item.OVERFLOWED_TITLE);

      await page.wait(1);
      let elementSaveTag = await this.driver.$(properties.BTN_SAVE_TAG);
      await elementSaveTag.click();

      if(!await this.driver.$(errorXpath)){
          throw "El resultado no fue lo esperado";
      }
  }
  return true;
});

When('I test pseudo data on element with xpath {kraken-string} with error {kraken-string} expected success', {timeout: 10 * 10000}, async function (xpath, errorXpath) {
  var mydata = JSON.parse(JSON.stringify(kraken_random_data));  
  
  for (let item of mydata) {   
      let element = await this.driver.$(xpath);
      await element.setValue(item.TAG_NAME);

      await page.wait(1);
      let elementSaveTag = await this.driver.$(properties.BTN_SAVE_TAG);
      await elementSaveTag.click();

      if(await this.driver.$(errorXpath)){
          throw "El resultado no fue lo esperado";
      }
  }
  return true;
});