/**
 Como un usuario inicio sesión, creo una página, determinaré 
 una fecha diferente al día de la creación y la visualizaré 
 en el apartado de páginas agendadas.*  */
 describe('Creación de página con día diferente', () => {
  let folderPathSS = 'E13_pages';
    let titulo = 'Post para eliminar';
    // Given
    beforeEach(() => {
      cy.visit(Cypress.config("ghostUrl"))
      cy.wait(1000)
      cy.screenshot(folderPathSS);
  
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
      
      cy.get(".gh-nav-top").contains("Pages").click();
      cy.screenshot(folderPathSS);
      cy.get('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row').click();
      cy.screenshot(folderPathSS);
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type("Página escenario 4");
      cy.screenshot(folderPathSS);
      cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
      cy.wait(1000)
      cy.screenshot(folderPathSS);
      cy.get('.gh-date-time-picker-date').clear()
      cy.screenshot(folderPathSS);
      cy.get('.gh-date-time-picker-date').type("2023-05-03");
      cy.screenshot(folderPathSS);
      cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
      cy.screenshot(folderPathSS);
      
      cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger").click();
      cy.screenshot(folderPathSS);
      cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
       //then
      cy.get('.gh-notification-actions > a').click();
      cy.screenshot(folderPathSS);
      
     
    });
  })