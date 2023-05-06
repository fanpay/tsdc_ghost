/**
 * Ir a la sección “General”, seleccionar la opción de “Make this site private” para hacer privado el sitio
 * y luego nuevamente dejarlo publico.
 *  */

describe('Hacer privao el contenido y luego publico', () => {
  const tag = "Animals";
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

  })

  it("Hacer privado el contenido", () => {

    // When
    cy.get(".gh-nav-list.gh-nav-settings").contains("General").click();
    cy.get(".input-toggle-component").click();
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    cy.wait(2000);

    cy.get(".gh-nav-list.gh-nav-settings").contains("Design").click();
    cy.get(".gh-nav-list.gh-nav-settings").contains("General").click();

    // Then
    cy.get('.avoid-break-out > a')
    cy.contains('Set the password for this site')

    // Dejar publico el sitio
    cy.get(".input-toggle-component").click();
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
  });

})

