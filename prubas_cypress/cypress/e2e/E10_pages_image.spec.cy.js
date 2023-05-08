/**
 Como usuario inicio sesión, voy a la sección de "Pages", 
 selecciono la primera página, voy a la sección de "post settings" 
 y remuevo la imagen asociada a la página. Guardo los cambios, 
 vuelvo a la sección de "Páginas" y reviso que si se haya quitado la foto..*  */
 describe('Editar post peviamente creado y visualizarlo.', () => {

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
        cy.get('input[name="password"]').type(password)
        cy.get('#ember12').click()
      })
      cy.wait(1000)
  
    })
  
    it("Select a post", () => {
  
      // When
      cy.get(".gh-nav-top").contains("Pages").click();
      cy.get(".gh-list").contains('pagina cambiar foto').click();
      cy.get('.post-settings').click();
       //then
      cy.get('.image-cancel').click();
      cy.get('.close')
      cy.go('back');
      cy.go('back');
      
      
      
      
      
      
      


      
      
      
      
      
  
    });
  })