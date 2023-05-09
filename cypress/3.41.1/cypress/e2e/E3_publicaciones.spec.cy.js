/**
 *  Crear una publicación, determinar una fecha diferente al día de la creación y validar que fue programado la publicacion. 
 *  */
describe('Crear un nuevo post con agendamiento de publicacion.', () => {
  let folderPathSS = 'E3_publicaciones/E3';
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

  it("Create a Post", () => {

    // When
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.screenshot(folderPathSS);
    cy.get(".ember-view.gh-btn.gh-btn-green").click();
    cy.screenshot(folderPathSS);
    cy.get('textarea[placeholder="Post Title"]').type("Post programado");
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor').click();
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor').type("Seré programado");
    cy.screenshot(folderPathSS);
    cy.get('.gh-publishmenu.ember-view').click();
    cy.screenshot(folderPathSS);
    cy.contains('Schedule it for later').click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.screenshot(folderPathSS);
    
    // Then
    cy.wait(3000);
    cy.contains('Will be published on');
    cy.screenshot(folderPathSS);

  });
})

