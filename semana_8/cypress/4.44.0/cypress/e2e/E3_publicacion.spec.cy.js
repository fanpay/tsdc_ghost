/**
 * Como un usuario inicio sesión, creo una publicación, 
 * selecciono una fecha diferente al día de la creación para su 
 * publicación y la programo, al seleccionar esta opción se observa 
 * un mensaje indicando que fue programada la publicación.
 *  */

describe('Crear un nuevo post con agendamiento de publicacion.', () => {
  let folderPathSS = 'E3_publicacion/E3';
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

  it("Create a Post", () => {

    // When
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.screenshot(folderPathSS);
    cy.get('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row').click()
    cy.screenshot(folderPathSS);
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type("Post programado");
    cy.screenshot(folderPathSS);
    
    cy.wait(2000)
    cy.get('.koenig-editor__editor').click();
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor').type("Seré programado");
    cy.screenshot(folderPathSS);
    cy.wait(1000)
    cy.get('.gh-publishmenu.ember-view').click();
    cy.screenshot(folderPathSS);
    cy.contains('Schedule it for later').click();
    cy.screenshot(folderPathSS);
    cy.wait(1000)
    cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.screenshot(folderPathSS);
    cy.wait(3000)
    cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
    cy.screenshot(folderPathSS);
    


    
    
  });
})
