/**
 * Como un usuario inicio sesión, creo una publicación, 
 * selecciono una fecha diferente al día de la creación para su 
 * publicación y la programo, al seleccionar esta opción se observa 
 * un mensaje indicando que fue programada la publicación.
 *  */

describe('Crear un nuevo post con agendamiento de publicacion.', () => {
  let folderPathSS = 'E1_publicacion2';
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

  it("Create a Post", () => {

    // When
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.get('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row').click()
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type("Post programado");
    
    cy.wait(2000)
    cy.get('.koenig-editor__editor').click();
    cy.get('.koenig-editor__editor').type("Seré programado");
    cy.wait(1000)
    cy.get('.gh-publishmenu.ember-view').click();
    cy.contains('Schedule it for later').click();
    cy.wait(1000)
    cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.wait(3000)
    cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
    


    
    
  });
})
