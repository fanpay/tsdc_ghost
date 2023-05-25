/**
 * Ir a la sección “General”, seleccionar la opción de “Make this site private” para hacer privado el sitio
 * y luego nuevamente dejarlo publico.
 *  */

describe('Hacer privao el contenido y luego publico', () => {
  let folderPathSS = 'E18_ajustes/E18';
  const tag = "Animals";

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

  })

  it("Hacer privado el contenido", () => {

    // When
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-list.gh-nav-settings").contains("General").click();
    cy.screenshot(folderPathSS);
    cy.get(".input-toggle-component").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    cy.wait(2000);
    cy.screenshot(folderPathSS);

    cy.get(".gh-nav-list.gh-nav-settings").contains("Design").click();
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-list.gh-nav-settings").contains("General").click();
    cy.screenshot(folderPathSS);

    // Then
    cy.get('.avoid-break-out > a')
    cy.screenshot(folderPathSS);
    cy.contains('Set the password for this site')
    cy.screenshot(folderPathSS);

    // Dejar publico el sitio
    cy.get(".input-toggle-component").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    cy.screenshot(folderPathSS);
  });

})

