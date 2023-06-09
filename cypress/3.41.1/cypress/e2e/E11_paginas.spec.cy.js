/**
 * Como un usuario inicio sesión, voy a la sección de "Pages", selecciono la primera página, cambio el título de la página, 
 * guardo los cambios, cierro sesión, inicio nuevamente sesión, consulto sección de páginas y la primera página debería tener
 * el título que fue modificado. 
 *  */

describe('Editar una pagina con un nuevo titulo.', () => {
  let folderPathSS = 'E11_paginas/E11';
  const titulo = "Moda";
  
  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.wait(1000)
    cy.screenshot(folderPathSS);
  });

  it("Crear una pagina la pagina", () => {
    // Given
    login(Cypress.config("email"), Cypress.config("password"));
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.screenshot(folderPathSS);
    cy.get('.ember-view.gh-btn.gh-btn-green').click();
    cy.screenshot(folderPathSS);
    cy.get('textarea[placeholder="Page Title"]').type('Titulo por definir');
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor-wrapper').click();
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor-wrapper').type("La jornada de moda sera ...");
    cy.screenshot(folderPathSS);
    cy.get('.gh-publishmenu.ember-view').click();
    cy.screenshot(folderPathSS);
    cy.contains('Set it live now').click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.wait(2000);
    cy.screenshot(folderPathSS);
  });

  it("Actualizar la pagina", () => {
    // When
    login(Cypress.config("email"), Cypress.config("password"));
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.screenshot(folderPathSS);
    cy.get(".gh-list").contains('Titulo por definir').click();
    cy.screenshot(folderPathSS);
    cy.get('textarea[placeholder="Page Title"]').clear();  
    cy.screenshot(folderPathSS);
    cy.get('textarea[placeholder="Page Title"]').type(titulo);  
    cy.screenshot(folderPathSS);
    cy.get('.gh-publishmenu.ember-view').click();
    cy.screenshot(folderPathSS);
    cy.contains('Published').click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.wait(2000);
    cy.screenshot(folderPathSS);
  });

  it("Verificar la actualizacion", () => {
    // Then
    login(Cypress.config("email"), Cypress.config("password"));
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.screenshot(folderPathSS);
    cy.get(".gh-list").contains(titulo);
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

