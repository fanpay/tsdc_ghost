const { Given, When, Then } = require('@cucumber/cucumber');
const { until, Actions } = require('selenium-webdriver');
const assert = require('assert');
const GhostPage = require('./GhostPage');

const properties = require('../../../properties.json');


let page;

When('Enter on element with xpath {kraken-string}', async function(xpath) {
    let element = await this.driver.$(xpath);
    return await element.setValue("\n");
});


When('I click element with xpath {kraken-string}', async function(xpath) {
    let element = await this.driver.$(xpath);
    return await element.click();
});


Then('I set text {kraken-string} on element with xpath {kraken-string}', async function (input, xpath) {
    let view = await this.driver.$(xpath);
    return await view.setValue(input);
});


Then('I should see the text {kraken-string} on H3 element with xpath {kraken-string}', async function(text, xpath) {
    let element = await this.driver.$(xpath);
    let element_text = await element.getText();
    assert.strictEqual(element_text, text);
});


Then('The field with id {kraken-string} should not exist', async function (id) {
    let elements = await this.driver.$(selector);
    if (elements.length > 0) {
      throw new Error(`The field with id "${id}" should not exist`);
    }
});

Then("The H3 field {kraken-string} should not the value {kraken-string}", async function (selector, value) {
    let element = await this.driver.$(selector);
    let elementValue = await element.getText();
    assert.notEqual(elementValue,value)
  });




Given('I navigate to the post editor page', async function() {
    page = new GhostPage(this.driver);
    await page.load('http://localhost:2368/ghost/#/signin');
    await page.set_text('input[name="identification"]', properties.USERNAME);
    await page.set_text('input[name="password"]', properties.PASSWORD);
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    await page.wait(2);
    await page.load('http://localhost:2368/ghost/#/editor/post');
    await page.wait(2);
});

When('Delete first publication created with title {kraken-string}', async function(title) {
    await page.delete_first_post(title);
  });

When('I create a new post with title {kraken-string} and content {kraken-string}', async function(title, content) {
  await page.create_post(title, content);
});

When('I create a new post in draft status with title {kraken-string} and content {kraken-string}', async function(title, content) {
  await page.create_draft(title, content);
});

When('Delete first draft publication created with title {kraken-string}', async function(title) {
  await page.delete_first_draft(title);
});

