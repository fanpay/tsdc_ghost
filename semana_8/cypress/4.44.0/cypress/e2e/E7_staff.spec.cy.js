/**
 Como usuario quiero hacer inicio de sesión, ir al apartado de "staff",
 * ver la información del usuario, eliminar la foto de perfil y guardar los cambios.*  */
 describe('Eliminar foto de perfil', () => {
    let folderPathSS = 'E7_staff/E7';
    let titulo = 'Post para eliminar';
    // Given
    beforeEach(() => {
      cy.visit(Cypress.config("ghostUrl"))
      cy.wait(1000)
  
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
  
      cy.get('.gh-badge.owner').click();
      cy.screenshot(folderPathSS);
   
      cy.get('.edit-user-image').click();
      cy.wait(1000)
      cy.screenshot(folderPathSS);
      cy.get('.modal-content.ember-view').click();
      cy.wait(1000)
      cy.screenshot(folderPathSS);
      cy.get('.image-delete').click();
      cy.screenshot(folderPathSS);
      //then
      cy.get('.gh-btn.gh-btn-black.right.gh-btn-icon.ember-view').click();
      cy.wait(500)
      cy.screenshot(folderPathSS);
    
    });
  })