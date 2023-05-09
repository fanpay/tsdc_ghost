/**
 *  Crear una etiqueta, crear un post con la etiqueta creada y publicar el post. El post es publicado con la etiqueta creada.
 *  */

describe('Crear una etiqueta y crear un post con esa etiqueta', () => {
  let folderPathSS = 'E15_tags/E15';
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
  it("Crear tag", () => {

    // When
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Tags").click();
    cy.screenshot(folderPathSS);
    cy.get('.ember-view.gh-btn.gh-btn-green').click();
    cy.screenshot(folderPathSS);
    cy.get('#tag-name').type(tag);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    cy.wait(500);
    cy.screenshot(folderPathSS);

    cy.get(".gh-nav-top").contains("Posts").click();
    cy.screenshot(folderPathSS);
    cy.get(".ember-view.gh-btn.gh-btn-green").click();
    cy.screenshot(folderPathSS);
    cy.get('textarea[placeholder="Post Title"]').type("Post con tag");
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor').click();
    cy.screenshot(folderPathSS);
    cy.get('.koenig-editor__editor').type("Este es un post con tag");
    cy.screenshot(folderPathSS);
    cy.get('.post-settings').click();
    cy.wait(500);
    cy.screenshot(folderPathSS);
    cy.get('#tag-input').click();
    cy.screenshot(folderPathSS);
    cy.get('[aria-current="true"]').click();
    cy.screenshot(folderPathSS);
    cy.get('.close').click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-publishmenu.ember-view').click();
    cy.screenshot(folderPathSS);
    cy.contains('Set it live now').click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.screenshot(folderPathSS);

    // Then
    cy.wait(2000);
    cy.contains('Published');
    cy.screenshot(folderPathSS);

  });

})

