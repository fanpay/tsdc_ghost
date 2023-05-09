/**
 * En la sección “Labs” ubicada en General, cambiar la opción Night shift y verificar que en las secciones: 
 * Posts, Pages, Tags, Staf, General, Design, Code injection, Integrations y Labs el fondo corresponde 
 * al tema oscuro de GHost (rgb(38, 50, 56)).
 *  */

describe('Cambiar a tema oscuro.', () => {
  let folderPathSS = 'E21_ajustes/E21';

  afterEach(() => {
    // Dejar de nuevo el tema claro
    cy.get(".gh-nav-list.gh-nav-settings").contains("Labs").click();
    cy.screenshot(folderPathSS);
    cy.get(".input-toggle-component").click();
    cy.screenshot(folderPathSS);
  })
  
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

  it("Cambiar a tema oscuro", () => {

    // When
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-list.gh-nav-settings").contains("Labs").click();
    cy.screenshot(folderPathSS);
    cy.get(".input-toggle-component").click();
    cy.wait(1000);
    cy.screenshot(folderPathSS);

    // Then
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Tags").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Staf").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("General").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Design").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Code injection").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Integrations").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Labs").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.screenshot(folderPathSS);
  });

})

