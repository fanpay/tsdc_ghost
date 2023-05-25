const properties = require('../../../properties.json');

class GhostPage {
    constructor(driver) {
      this.driver = driver;
    }
  
    async load(url) {
      await this.driver.url(url);
    }
  
    async wait(seconds) {
      await this.driver.pause(seconds * 1000);
    }
  
    async set_text(selector, text) {
      const element = await this.driver.$(selector);
      await element.setValue(text);
    }
  
    async click(selector) {
      const element = await this.driver.$(selector);
      await element.click();
    }
  
    async get_text(selector) {
      const element = await this.driver.$(selector);
      return await element.getText();
    }

    async login(username, password){
      await this.load('http://localhost:2368/ghost/#/signin');
      await this.set_text(properties.USERNAME_EID, username);
      await this.set_text(properties.PASSWORD_EID, password);
      await this.click(properties.BTN_SIGNIN_EID);
      await this.wait(2);
    }

    async logout(){
      await this.load('http://localhost:2368/ghost/#/posts');
      await this.wait(2);
      await this.click(properties.NAV_BOTTOM);
      await this.wait(2);
      await this.click(properties.MENU_SIGNOUT);
      await this.wait(2);
    }

    async create_post(title, content) {
      await this.load('http://localhost:2368/ghost/#/editor/post');
      await this.wait(3);
      await this.set_text(properties.POST_TITLE_ECLASS, title);
      await this.wait(2);
      await this.set_text(properties.CONTENT_ECLASS, content);
      await this.wait(2);
      await this.click(properties.BTN_PUBLISH);
      await this.wait(1);
      await this.click(properties.BTN_BLUE_PUBLISH);
      await this.wait(3);
    }

    async delete_first_post(title) {
      await this.load('http://localhost:2368/ghost/#/posts');
      await this.click(properties.FIRST_POST_PUBLISHED);
      await this.wait(2);
      await this.click(properties.SETTINGS_BUTTON_PUBLICATION_ECLASS);
      await this.wait(2);
      await this.click(properties.LNK_DELETE_POST);
      await this.wait(1);
      await this.click(properties.BTN_CONFIRM_DELETE);
    }

    async create_draft(title, content) {
      await this.load('http://localhost:2368/ghost/#/editor/post');
      await this.wait(3);
      await this.set_text(properties.POST_TITLE_ECLASS, title);
      await this.wait(1);
      await this.set_text(properties.CONTENT_ECLASS, content);
      await this.wait(1);
      await this.click(properties.LNK_BACK_POSTS);
      await this.wait(1);
    }

    async delete_first_draft(title) {
      await this.load('http://localhost:2368/ghost/#/posts');
      await this.click(properties.STATUS_FIRST_DRAFT_POST);
      await this.wait(2);
      await this.click(properties.SETTINGS_BUTTON_PUBLICATION_ECLASS);
      await this.wait(2);
      await this.click(properties.LNK_DELETE_POST);
      await this.wait(1);
      await this.click(properties.BTN_CONFIRM_DELETE);
    }

  }
  
  module.exports = GhostPage;