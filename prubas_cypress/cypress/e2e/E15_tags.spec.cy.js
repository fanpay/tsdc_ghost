/**
 *  Crear una etiqueta, crear un post con la etiqueta creada y publicar el post. El post es publicado con la etiqueta creada.
 *  */

describe('Crear una etiqueta y crear un post con esa etiqueta', () => {
  const tag = "Animals";
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

  })
  it("Crear tag", () => {

    // When
    cy.get(".gh-nav-top").contains("Tags").click();
    cy.get('.ember-view.gh-btn.gh-btn-green').click();
    cy.get('#tag-name').type(tag);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
    cy.wait(500);

    cy.get(".gh-nav-top").contains("Posts").click();
    cy.get(".ember-view.gh-btn.gh-btn-green").click();
    cy.get('textarea[placeholder="Post Title"]').type("Post con tag");
    cy.get('.koenig-editor__editor').click();
    cy.get('.koenig-editor__editor').type("Este es un post con tag");
    cy.get('.post-settings').click();
    cy.wait(500);
    cy.get('#tag-input').click();
    cy.get('[aria-current="true"]').click();
    cy.get('.close').click();
    cy.get('.gh-publishmenu.ember-view').click();
    cy.contains('Set it live now').click();
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();

    // Then
    cy.wait(2000);
    cy.contains('Published');

  });

})

