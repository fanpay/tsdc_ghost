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
  const tag = "Tag_Externo";

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
  it("Crear tag", () => {

    // When
    cy.get(".gh-nav-top").contains("Tags").click();
 
    cy.get('.ember-view.gh-btn.gh-btn-primary').click();
    

    cy.get('#tag-name').type(tag);
   
    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
    cy.wait(500);
    
    cy.go('back');
   
    cy.go('back');
 
    cy.get(".gh-nav-top").contains("Posts").click();
    cy.wait(1000);
    cy.get(".gh-content-status-scheduled.gh-badge.nowrap").click();
    
    //cy.get('.gh-canvas').contains(" ").click();

    cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    cy.wait(1000)
    
    cy.get('#tag-input').type(tag)
 
    cy.get('[aria-current="true"]').click();
 
    
    cy.wait(4000)
    cy.go('back');
    

    // Then
    cy.wait(2000);
    cy.get('.gh-btn-red > span').click()
    cy.wait(2000);
    
    cy.get(".gh-content-status-scheduled.gh-badge.nowrap").click();
    
    cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    cy.wait(1000)
   
  });

})

