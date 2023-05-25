/**
 *  Ir a la sección “Staff” invitar a un usuario, asignar un rol y posteriormente remover la invitación.
 *  */
describe('Invitar a un nuevo Staff y remover la invitacion', () => {
  let folderPathSS = 'E6_staf/E6';
  const emailStaff = 'aron@fakenews.com';
  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.wait(1000)

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

  it("Invitar y revocar a un staff", () => {

    // When
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.screenshot(folderPathSS);
    cy.get(".gh-btn.gh-btn-green").click();
    cy.screenshot(folderPathSS);
    cy.get('#new-user-email').type(emailStaff);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Tags").click();
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.wait(3000);
    cy.screenshot(folderPathSS);
    cy.contains(emailStaff);
    cy.screenshot(folderPathSS);
    cy.get('.red-hover').click();
    cy.screenshot(folderPathSS);
    
    // Then
    cy.wait(1000);
    cy.contains('Invitation revoked');
    cy.screenshot(folderPathSS);

  });
})

