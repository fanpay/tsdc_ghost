/**
 Como un usuario inicio sesión, selecciono la sección “Staff”, 
 invito a un usuario staff, le asigo un rol Author y posteriormente remuevo la invitación. */
 describe('Editar post peviamente creado y visualizarlo.', () => {
  let folderPathSS = 'E13_pages_date/E13';
    let titulo = 'Post para eliminar';
    // Given
    beforeEach(() => {
      cy.visit(Cypress.config("ghostUrl"))
      cy.wait(1000)
      //cy.screenshot(folderPathSS);
  
      // Given
      cy.get('form').within(() => {
        let email = Cypress.config("email");
        let password = Cypress.config("password");
        cy.get('input[name="identification"]').type(email)
        cy.screenshot(folderPathSS);
        cy.get('input[name="password"]').type(password)
        cy.screenshot(folderPathSS);
        cy.get('.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view').click()
        cy.screenshot(folderPathSS);
      })
      cy.wait(1000)
  
    })
  
    it("Select a post", () => {
  
      // When
      cy.get(".ember-view.gh-nav-bottom-tabicon").click();
      cy.screenshot(folderPathSS);
      cy.get(".view-container").contains("Staff").click();
      cy.screenshot(folderPathSS);
      cy.get(".gh-btn.gh-btn-primary").click();
      cy.screenshot(folderPathSS);
      cy.get('#new-user-email').type("fulano123@gmail.com")
      cy.screenshot(folderPathSS);
      cy.wait(1000)
      cy.get('.gh-roles-container').contains('Author').click();
      cy.screenshot(folderPathSS);
      cy.wait(2000)
      cy.get(".gh-btn.gh-btn-black.gh-btn-icon.ember-view").click();
      cy.screenshot(folderPathSS);
      cy.get(".gh-nav-top").contains("Tags").click();
      cy.screenshot(folderPathSS);
       //then
      cy.get(".ember-view.gh-nav-bottom-tabicon").click();
      cy.screenshot(folderPathSS);
      cy.get(".view-container").contains("Staff").click();
      cy.screenshot(folderPathSS);
      cy.get(".apps-configured-action.red-hover").click();
      cy.screenshot(folderPathSS);
      
    });
  })