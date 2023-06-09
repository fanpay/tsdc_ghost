/**
 Como un usuario inicio sesión, creó una etiqueta posteriormente
  creó un post con la etiqueta creada y publicó inmediatamente 
  el post. Finalmente el post es publicado con la etiqueta creada.

*  */

describe('Crear un tag con clasificación interna', () => {
  let folderPathSS = 'E15_tags/E15';
  const tag = "Tag_Externo";

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
  it("Crear tag", () => {

    // When
    cy.get(".gh-nav-top").contains("Tags").click();
    cy.screenshot(folderPathSS);
    cy.get('.ember-view.gh-btn.gh-btn-primary').click();
    cy.screenshot(folderPathSS);

    cy.get('#tag-name').type(tag);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
    cy.wait(500);
    
    cy.go('back');
    cy.screenshot(folderPathSS);
    cy.go('back');
 
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.wait(1000);
    cy.screenshot(folderPathSS);
    cy.get(".gh-content-status-scheduled.gh-badge.nowrap").click();
    cy.screenshot(folderPathSS);
    //cy.get('.gh-canvas').contains(" ").click();

    cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    cy.wait(1000)
    cy.screenshot(folderPathSS);
    cy.get('#tag-input').type(tag)
    cy.screenshot(folderPathSS);
    cy.get('[aria-current="true"]').click();
    cy.screenshot(folderPathSS);
    
    cy.wait(4000)
    cy.go('back');
    cy.screenshot(folderPathSS);

    // Then
    cy.wait(2000);
    cy.get('.gh-btn-red > span').click()
    cy.wait(2000);
    cy.screenshot(folderPathSS);
    cy.get(".gh-content-status-scheduled.gh-badge.nowrap").click();
    cy.screenshot(folderPathSS);
    cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    cy.wait(1000)
    cy.screenshot(folderPathSS);
  });

})

