/**
Como un usuario inicio sesión, me dirijo a la sección “Labs” 
ubicada en General y la selecciono, ubico la opción 
Night shift la selecciono para que cambie y me dirijo a
 las secciones: Posts, Pages, Tags, Staf, General, Design, 
 Code injection, Integrations y Labs y observo que el fondo
  de cada sección corresponde al tema oscuro de GHost (rgb(38, 50, 56))
*  */
describe('Dark mode', () => {
  let folderPathSS = 'E21_settings/E21';

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
        cy.get('.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view').click()
        cy.screenshot(folderPathSS);
    })
    cy.wait(1000)

  })
  it("Borrar logo", () => {

    // When
    cy.get(".nightshift-toggle ").click();
    cy.screenshot(folderPathSS);

    
    
  });

})
