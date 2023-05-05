/**
 * En la sección “Labs” ubicada en General, cambiar la opción Night shift y verificar que en las secciones: 
 * Posts, Pages, Tags, Staf, General, Design, Code injection, Integrations y Labs el fondo corresponde 
 * al tema oscuro de GHost (rgb(38, 50, 56)).
 *  */

describe('Cambiar a tema oscuro.', () => {
  
  afterEach(() => {
    // Dejar de nuevo el tema claro
    cy.get(".gh-nav-list.gh-nav-settings").contains("Labs").click();
    cy.get(".input-toggle-component").click();
  })
  
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

  it("Cambiar a tema oscuro", () => {

    // When
    cy.get(".gh-nav-list.gh-nav-settings").contains("Labs").click();
    cy.get(".input-toggle-component").click();
    cy.wait(1000);

    // Then
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.get(".gh-nav-top").contains("Tags").click();
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.get(".gh-nav-top").contains("Staf").click();
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.get(".gh-nav-top").contains("General").click();
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.get(".gh-nav-top").contains("Design").click();
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.get(".gh-nav-top").contains("Code injection").click();
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.get(".gh-nav-top").contains("Integrations").click();
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
    cy.get(".gh-nav-top").contains("Labs").click();
    cy.get('.gh-canvas-header').should('have.css', 'background-color', 'rgb(38, 50, 56)');
  });

})

