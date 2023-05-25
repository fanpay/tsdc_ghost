/**
 Como usuario quiero crear un post y asignar un rol de editor a alguna persona asociada a Ghost.
 *  */
 describe('Editar post peviamente creado y visualizarlo.', () => {
    let folderPathSS = 'E4_publicacion/E4';
    let titulo = 'Post para eliminar';
    // Given
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
  
    it("Select a post", () => {
  
      // When
      cy.get(".gh-nav-top").contains("Posts").click();
      cy.screenshot(folderPathSS);
      cy.get(".ember-view.gh-btn.gh-btn-green").click();
      cy.screenshot(folderPathSS);
      cy.get('textarea[placeholder="Post Title"]').type("Escenario de prueba #4");
      cy.screenshot(folderPathSS);
      cy.get('.koenig-editor__editor').click();
      cy.screenshot(folderPathSS);
      cy.get('.koenig-editor__editor').type("Creando contenido para el escenario de prueba 4");
      cy.wait(2000)
      cy.screenshot(folderPathSS);

      cy.get('.post-settings').click();
      cy.screenshot(folderPathSS);
      cy.get('#author-list').click();
      cy.screenshot(folderPathSS);
      cy.wait(2000)
      cy.screenshot(folderPathSS);

      cy.get('.ember-power-select-option').click();
      cy.screenshot(folderPathSS);
      cy.get('.close').click()
      cy.screenshot(folderPathSS);

      cy.get('.gh-publishmenu.ember-view').click();
      cy.screenshot(folderPathSS);
      cy.wait(2000);
      cy.screenshot(folderPathSS);
      cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
      cy.screenshot(folderPathSS);
      
      //Then
      cy.wait(2000);
      cy.go('back');
      cy.screenshot(folderPathSS);
    });
  })
  
  