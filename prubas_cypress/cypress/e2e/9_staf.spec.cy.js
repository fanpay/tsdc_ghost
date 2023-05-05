/**
 * Hacer inicio de sesión, ir al apartado de staff, cambiar el nombre del usuario autenticado, cerrar sesión, 
 * iniciar sesión nuevamente y verificar en la pantalla principal que el nombre cambie satisfactoriamente. 
 *  */
const email = Cypress.config("ghostUrl");
describe('Cambiar nombre del usuario autenticado.', () => {
  
  const newName = ' Aron';

  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.wait(1000)

    // Given
    cy.get('form').within(() => {
      let email = Cypress.config("email");
      let password = Cypress.config("password");
      cy.get('input[name="identification"]').type(email)
      cy.get('input[name="password"]').type(password)
      cy.get('#ember12').click()
    })
    cy.wait(1000)
  });

  it("Cambiar nombre del usuario", () => {

    // When
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.get('.gh-badge.owner').click();
    cy.get('#user-name').type(newName);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    cy.get(".gh-nav-top").contains("Staff").click();
    
    // // Then
    cy.wait(1000);
    cy.contains(newName);

  });
})

