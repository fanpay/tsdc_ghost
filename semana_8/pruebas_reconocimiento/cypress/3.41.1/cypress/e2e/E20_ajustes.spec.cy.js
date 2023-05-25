/**
 * Como un usuario inicio sesión, voy a la sección de Design, ubicarse en la parte de "Navigation", dejar vacío el 
 * primer label y guardar cambios. Debe aparecer un mensaje de error en rojo diciendo "You must specify a label" y 
 * el botón de guardado debe estar de color rojo y tener un texto que diga "Retry". Luego ir a la página principal, 
 * verificar el menú principal y no debe existir la opción que se intentó crear. Por último, se cierra la sesión. 
 * (escenario negativo). 
 *  */

describe('Guardar un label de navegacion vacio', () => {
  let folderPathSS = 'E20_ajustes/E20';

  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.wait(1000)
    cy.screenshot(folderPathSS);
  });

  it("Intento de eliminar un label de navegacion", () => {
    // Given
    login(Cypress.config("email"), Cypress.config("password"));

    //When
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Design").click();
    cy.screenshot(folderPathSS);
    cy.get('#settings-navigation > .sortable-objects.ember-view > :nth-child(1) > :nth-child(1) > :nth-child(2) > .gh-blognav-label.ember-view').clear();
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    cy.wait(2000);
    cy.screenshot(folderPathSS);

    //Then
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view');
    cy.screenshot(folderPathSS);

  });

  it("Verificar Home", () => {
    // Then
    login(Cypress.config("email"), Cypress.config("password"));
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("View site").click();
    cy.screenshot(folderPathSS);
    cy.get('#site-frame');
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

