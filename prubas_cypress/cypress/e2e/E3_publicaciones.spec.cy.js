/**
 *  Crear una publicación, determinar una fecha diferente al día de la creación y validar que fue programado la publicacion. 
 *  */
describe('Crear un nuevo post con agendamiento de publicacion.', () => {

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
    cy.get('textarea[placeholder="Post Title"]').type("Post programado");
    cy.get('.koenig-editor__editor').click();
    cy.get('.koenig-editor__editor').type("Seré programado");
    cy.get('.gh-publishmenu.ember-view').click();
    cy.contains('Schedule it for later').click();
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    
    // Then
    cy.wait(3000);
    cy.contains('Will be published on');

  });
})

