/**
 Como un usuario inicio sesión, voy a ir a la sección de tags,
  crear un nuevo tag, agregar el símbolo “#” al inicio del nombre 
  del tag para clasificarlo como etiqueta interna. Ir a la sección de 
  “publicaciones”, elegir la primera publicación, editarla y asociar 
  la etiqueta interna, devolverse a la sección de tags y seleccionar
   “etiquetas internas”, verificar que el número de post ya no sea 0 sino 1.

*  */

describe('Crear un tag con clasificación interna', () => {
  let folderPathSS = 'E16_tags/E16';
  const tag = "Tag_Interno";

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
  it("Crear tag", () => {

    // When
    cy.get(".gh-nav-top").contains("Tags").click();
    cy.screenshot(folderPathSS);
    cy.get('.ember-view.gh-btn.gh-btn-primary').click();
    cy.screenshot(folderPathSS);

    cy.get('#tag-name').type("#"+tag);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
    cy.wait(500);
    cy.screenshot(folderPathSS);
    cy.go('back');
    cy.screenshot(folderPathSS);
    cy.go('back');
    cy.screenshot(folderPathSS);
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.wait(1000);
    cy.screenshot(folderPathSS);
    cy.get(".gh-content-status-scheduled.gh-badge.nowrap").click();
    cy.screenshot(folderPathSS);
    //cy.get('.gh-canvas').contains(" ").click();

    cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    cy.wait(1000)
    cy.screenshot(folderPathSS);
    cy.get('#tag-input').type("#"+tag)
    cy.screenshot(folderPathSS);
    cy.get('[aria-current="true"]').click();
    cy.screenshot(folderPathSS);
    
    cy.wait(4000)
    cy.go('back');
    cy.screenshot(folderPathSS);

    // Then
    cy.wait(2000);
    cy.get('.gh-btn-red > span').click()
    cy.wait(2000);
    cy.screenshot(folderPathSS);
    cy.get(".gh-content-status-scheduled.gh-badge.nowrap").click();
    cy.screenshot(folderPathSS);
    cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    cy.wait(1000)
    cy.screenshot(folderPathSS);
  });

})

