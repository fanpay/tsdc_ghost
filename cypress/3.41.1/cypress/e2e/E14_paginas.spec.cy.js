/**
 * Como un usuario inicio sesión, voy a la sección de "Pages", crearé una página que incluya un título y 
 * una descripción, la guardo como borrador, cerrar sesión, volver a iniciar sesión, ir a la sección de "Pages", 
 * verificar que la publicación creada tenga el estado de borrador o "draft". 
 *  */

describe('Crear una pagina y dejarla en estado Draft', () => {
  
  const titulo = "Comida";
  
  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.wait(1000)
  });

  it("Crear una pagina en Draft", () => {
    // Given
    login(Cypress.config("email"), Cypress.config("password"));

    //When
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.get('.ember-view.gh-btn.gh-btn-green').click();
    cy.get('textarea[placeholder="Page Title"]').type(titulo);
    cy.get('.koenig-editor__editor-wrapper').click();
    cy.get('.koenig-editor__editor-wrapper').type("La jornada de comida sera ...");
    cy.wait(4000);
  });

  it("Verificar pagina en Draft", () => {
    // Then
    login(Cypress.config("email"), Cypress.config("password"));
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.get(".gh-list").contains(titulo);
    cy.get('.gh-content-status-draft');
    cy.wait(2000);
  });

  function login(email, password) {
    cy.get('form').within(() => {
      cy.get('input[name="identification"]').type(email)
      cy.get('input[name="password"]').type(password)
      cy.get('#ember12').click()
    })
    cy.wait(1000)
  }
})

