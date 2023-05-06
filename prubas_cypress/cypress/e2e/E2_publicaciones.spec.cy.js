/**
 * Como un usuario inicio sesión, creo una publicación, luego visualizo la lista de publicaciones, 
 * busco la que creé y elimino el registro. Vuelvo a comprobar la lista de publicaciones y la publicación creada 
 * ya no debe estar. 
 *  */
describe('Crear un nuevo post, publicarlo y eliminarlo.', () => {

  let titulo = 'Post para eliminar';

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

  it("Create a Post", () => {

    // When
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.get(".ember-view.gh-btn.gh-btn-green").click();
    cy.get('textarea[placeholder="Post Title"]').type(titulo);
    cy.get('.koenig-editor__editor').click();
    cy.get('.koenig-editor__editor').type("Seré eliminado");
    cy.get('.gh-publishmenu.ember-view').click();
    cy.contains('Set it live now').click();
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.wait(2000);

    cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
    cy.get(".gh-nav-top").contains("Published").click();
    cy.wait(2000)
    cy.get('.posts-list.gh-list').contains('Post para eliminar').click();
    
    cy.get('.post-settings');
    cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click();
    cy.wait(2000);
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
    cy.wait(2000);

    // Then
    cy.contains(titulo).should('not.exist');

  });
})

