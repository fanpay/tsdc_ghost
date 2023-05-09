/**
 *  Crear una página y publicarla en el mismo momento, visualizarla en la lista, eliminarla y comprobar que no 
 *  aparece en la lista de páginas 
 *  */

describe('Crear una pagina con publicacion inmediata y eliminarla.', () => {
  let folderPathSS = 'E12_paginas/E12';
  const titulo = "Jornada de vacunacion canina";
  
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
      cy.get('#ember12').click()
      cy.screenshot(folderPathSS);
    })
    cy.wait(1000)
  });

  it("Crear y eliminar una pagina", () => {

    // When
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.screenshot(folderPathSS);
    cy.get('.ember-view.gh-btn.gh-btn-green').click();
    cy.screenshot(folderPathSS);
    cy.get('textarea[placeholder="Page Title"]').type(titulo);
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor-wrapper').click();
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor-wrapper').type("La jornada de vacunacion sera ...");
    cy.screenshot(folderPathSS);
    cy.get('.gh-publishmenu.ember-view').click();
    cy.screenshot(folderPathSS);
    cy.contains('Set it live now').click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.wait(4000);
    cy.screenshot(folderPathSS);
    cy.get('.blue.link.fw4.flex.items-center.ember-view').click()
    cy.screenshot(folderPathSS);
    cy.get(".gh-list").contains(titulo).click();
    cy.wait(500)
    cy.screenshot(folderPathSS);
    cy.get('.post-settings').click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
    cy.wait(500);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
    cy.screenshot(folderPathSS);

    // // Then
    cy.wait(1000);
    cy.contains(titulo).should('not.exist');
    cy.screenshot(folderPathSS);

  });
})

