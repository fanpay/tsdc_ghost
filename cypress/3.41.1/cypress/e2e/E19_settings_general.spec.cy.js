/**
Como un usuario inicio sesión, voy a ir a la sección “PUBLICATION IDENTITY” 
en “General”, y eliminaré el logo. Posterior a esto, voy a ir a la sección 
principal y verificar que los cambios se hicieron con éxito.
*  */
describe('Eliminar Logo', () => {
  let folderPathSS = 'E19_settings_general/E19';

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
  it("Borrar logo", () => {

    // When
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("View site").click();
    cy.wait(2000)
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("General").click();
    cy.wait(2000)
    cy.screenshot(folderPathSS);
    cy.get('.gh-setting-action-smallimg-delete > span').click()
    cy.wait(2000)
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
    cy.screenshot(folderPathSS);

    // Then
    cy.get(".gh-nav-top").contains("View site").click();
    cy.wait(2000)
    cy.screenshot(folderPathSS);
    
  });

})
