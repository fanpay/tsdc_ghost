/**
 * Como un usuario inicio sesión, voy a la sección de "Pages", crearé una página que incluya un título y 
 * una descripción, la guardo como borrador, cerrar sesión, volver a iniciar sesión, ir a la sección de "Pages", 
 * verificar que la publicación creada tenga el estado de borrador o "draft". 
 *  */

describe('Crear una pagina y dejarla en estado Draft', () => {
  let folderPathSS = 'E14_paginas/E14';
  const titulo = "Comida";
  
  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.wait(1000)
    cy.screenshot(folderPathSS);
  });

  it("Crear una pagina en Draft", () => {
    // Given
    login(Cypress.config("email"), Cypress.config("password"));

    //When
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.screenshot(folderPathSS);
    cy.get('.ember-view.gh-btn.gh-btn-green').click();
    cy.screenshot(folderPathSS);
    cy.get('textarea[placeholder="Page Title"]').type(titulo);
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor-wrapper').click();
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor-wrapper').type("La jornada de comida sera ...");
    cy.wait(4000);
    cy.screenshot(folderPathSS);
  });

  it("Verificar pagina en Draft", () => {
    // Then
    login(Cypress.config("email"), Cypress.config("password"));
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.screenshot(folderPathSS);
    cy.get(".gh-list").contains(titulo);
    cy.screenshot(folderPathSS);
    cy.get('.gh-content-status-draft');
    cy.wait(2000);
    cy.screenshot(folderPathSS);
  });

  function login(email, password) {
    cy.get('form').within(() => {
      cy.get('input[name="identification"]').type(email)
      cy.screenshot(folderPathSS);
      cy.get('input[name="password"]').type(password)
      cy.screenshot(folderPathSS);
      cy.get('#ember12').click()
      cy.screenshot(folderPathSS);
    })
    cy.wait(1000)
  }
})

