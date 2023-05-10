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
       
        cy.get('input[name="password"]').type(password)
       
        cy.get('.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view').click()
       
    })
    cy.wait(1000)

  })
  it("Borrar logo", () => {

    // When
    cy.get(".nightshift-toggle ").click();
    

    
    
  });

})
