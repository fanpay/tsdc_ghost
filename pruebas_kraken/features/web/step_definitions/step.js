const { Given, When, Then } = require('@cucumber/cucumber');
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


Then('I should see the text {kraken-string} on plain element with xpath {kraken-string}', async function(text, xpath) {
    let element = await this.driver.$(xpath);
    let element_text = await element.getText();
    assert.strictEqual(element_text, text);
});

Then('I should not see the text {kraken-string} on plain element with xpath {kraken-string}', async function(text, xpath) {
  let element = await this.driver.$(xpath);
  let element_text = await element.getText();
  assert.notEqual(element_text, text);
});


Then('The field with id {kraken-string} should not exist', async function (id) {
    let elements = await this.driver.$(selector);
    if (elements.length > 0) {
      throw new Error(`The field with id "${id}" should not exist`);
    }
});


Then("The plain field {kraken-string} should not the value {kraken-string}", async function (selector, value) {
    let element = await this.driver.$(selector);
    let elementValue = await element.getText();
    assert.notEqual(elementValue,value)
});


Given('I login in ghost with my credentials with username {kraken-string} and password {kraken-string}', async function(username, password) {
    page = new GhostPage(this.driver);
    await page.load('http://localhost:2368/ghost/#/signin');
    await page.set_text(properties.USERNAME_EID, username);
    await page.set_text(properties.PASSWORD_EID, password);
    await page.click(properties.BTN_SIGNIN_EID);
    await page.wait(2);
    await page.load('http://localhost:2368/ghost/#/posts');
});


Given('I change my old password {kraken-string} in staff section with my new password {kraken-string}', async function(old_pwd, new_pwd) {
    await page.load('http://localhost:2368/ghost/#/staff');
    await page.click(properties.ACTIVE_USER_OWNER_STAFF);
    await page.wait(2);
    await page.set_text(properties.OLD_PASSWORD_INPUT_STAFF, old_pwd);
    console.log("old_pwd: "+old_pwd)
    await page.wait(2);
    await page.set_text(properties.NEW_PASSWORD_INPUT_STAFF, new_pwd);
    await page.set_text(properties.NEW_PASSWORD_VERIFICATION_INPUT_STAFF, new_pwd);
    console.log("new_pwd: "+new_pwd)
    await page.wait(2);
    await page.click(properties.CHANGE_PASSWORD_BUTTON);
    await page.wait(2);
    await page.click(properties.NOTIFICATION_CLOSE_POPUP);
    await page.wait(2);
});


When('Sign out from ghost session', async function() {
  page = new GhostPage(this.driver);
  await page.load('http://localhost:2368/ghost/#/posts');
  await page.wait(2);
  await page.click(properties.NAV_BOTTOM);
  await page.wait(2);
  await page.click(properties.MENU_SIGNOUT);
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
