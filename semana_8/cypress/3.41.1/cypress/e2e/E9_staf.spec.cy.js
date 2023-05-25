/**
 * Hacer inicio de sesión, ir al apartado de staff, cambiar el nombre del usuario autenticado, cerrar sesión, 
 * iniciar sesión nuevamente y verificar en la pantalla principal que el nombre cambie satisfactoriamente. 
 *  */
const email = Cypress.config("ghostUrl");
describe('Cambiar nombre del usuario autenticado.', () => {
  let folderPathSS = 'E9_staf/E9';
  const newName = ' Aron';

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

  it("Cambiar nombre del usuario", () => {

    // When
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-badge.owner').click();
    cy.screenshot(folderPathSS);
    cy.get('#user-name').type(newName);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.screenshot(folderPathSS);
    
    // // Then
    cy.wait(1000);
    cy.contains(newName);
    cy.screenshot(folderPathSS);

  });
})

