/**
 * Como un usuario inicio sesión, voy a la sección de Design, ubicarse en la parte de "Navigation", dejar vacío el 
 * primer label y guardar cambios. Debe aparecer un mensaje de error en rojo diciendo "You must specify a label" y 
 * el botón de guardado debe estar de color rojo y tener un texto que diga "Retry". Luego ir a la página principal, 
 * verificar el menú principal y no debe existir la opción que se intentó crear. Por último, se cierra la sesión. 
 * (escenario negativo). 
 *  */

describe('Guardar un label de navegacion vacio', () => {
  
  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.wait(1000)
  });

  it("Intento de eliminar un label de navegacion", () => {
    // Given
    login(Cypress.config("email"), Cypress.config("password"));

    //When
    cy.get(".gh-nav-top").contains("Design").click();
    cy.get('#settings-navigation > .sortable-objects.ember-view > :nth-child(1) > :nth-child(1) > :nth-child(2) > .gh-blognav-label.ember-view').clear();
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    cy.wait(2000);

    //Then
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view');

  });

  it("Verificar Home", () => {
    // Then
    login(Cypress.config("email"), Cypress.config("password"));
    cy.get(".gh-nav-top").contains("View site").click();
    cy.get('#site-frame');
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

