/**
 *  Ir a la sección “Staff” invitar a un usuario, asignar un rol y posteriormente remover la invitación.
 *  */
describe('Invitar a un nuevo Staff y remover la invitacion', () => {
  const emailStaff = 'aron@fakenews.com';
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

  it("Invitar y revocar a un staff", () => {

    // When
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.get(".gh-btn.gh-btn-green").click();
    cy.get('#new-user-email').type(emailStaff);
    cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();
    cy.get(".gh-nav-top").contains("Tags").click();
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.wait(3000);
    cy.contains(emailStaff);
    cy.get('.red-hover').click();
    
    // Then
    cy.wait(1000);
    cy.contains('Invitation revoked');

  });
})

