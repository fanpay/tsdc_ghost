/**
 *  Crear una página y publicarla en el mismo momento, visualizarla en la lista, eliminarla y comprobar que no 
 *  aparece en la lista de páginas 
 *  */

describe('Crear una pagina con publicacion inmediata y eliminarla.', () => {
  
  const titulo = "Jornada de vacunacion canina";
  
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

  it("Crear y eliminar una pagina", () => {

    // When
    cy.get(".gh-nav-top").contains("Pages").click();
    cy.get('.ember-view.gh-btn.gh-btn-green').click();
    cy.get('textarea[placeholder="Page Title"]').type(titulo);
    cy.get('.koenig-editor__editor-wrapper').click();
    cy.get('.koenig-editor__editor-wrapper').type("La jornada de vacunacion sera ...");
    cy.get('.gh-publishmenu.ember-view').click();
    cy.contains('Set it live now').click();
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.wait(4000);
    cy.get('.blue.link.fw4.flex.items-center.ember-view').click()
    cy.get(".gh-list").contains(titulo).click();
    cy.wait(500)
    cy.get('.post-settings').click();
    cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
    cy.wait(500);
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()

    // // Then
    cy.wait(1000);
    cy.contains(titulo).should('not.exist');

  });
})

