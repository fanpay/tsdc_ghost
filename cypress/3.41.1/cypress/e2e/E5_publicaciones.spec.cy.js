/**
 * Como un usuario inicio sesión, creo una publicación básica pero no la publico, la dejo en estado "Draft" o "Borrador". 
 * Luego visualizo la lista de publicaciones, busco la publicación que estaba editando y verifico que su estado 
 * sea "Draft" o "Borrador".
 *  */
describe('Crear un nuevo post y dejarlo en estado Draft y se visualiza en el listado Draft.', () => {
  let folderPathSS = 'E5_publicaciones/E5';
  let titulo = 'Post para dejar en Draft';

  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.wait(1000)

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

  it("Create a Post y dejarlo en estado Draft", () => {

    // When
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.screenshot(folderPathSS);
    cy.get(".ember-view.gh-btn.gh-btn-green").click();
    cy.screenshot(folderPathSS);
    cy.get('textarea[placeholder="Post Title"]').type(titulo);
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor').click();
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor').type("Quedaré en estado Draft");
    cy.screenshot(folderPathSS);
    cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
    cy.wait(2000);
    cy.screenshot(folderPathSS);

    cy.get(".gh-nav-top").contains("Drafts").click();
    cy.screenshot(folderPathSS);
    cy.wait(1000)
    cy.screenshot(folderPathSS);
    
    // Then
    cy.get('.posts-list.gh-list').contains(titulo);
    cy.screenshot(folderPathSS);

  });
})

