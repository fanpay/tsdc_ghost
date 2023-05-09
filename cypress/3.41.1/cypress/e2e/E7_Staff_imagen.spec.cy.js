/**
 Como usuario quiero hacer inicio de sesión, ir al apartado de "staff",
 * ver la información del usuario, eliminar la foto de perfil y guardar los cambios.*  */
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
      cy.get(".gh-nav-top").contains("Staff").click();
      cy.get('.gh-badge.owner').click();
      cy.get('.edit-user-image').click();
      cy.wait(1000)
      cy.get('.modal-content.ember-view').click();
      cy.wait(1000)
      cy.get('.image-cancel').click();
      //then
      cy.get('.gh-btn.gh-btn-blue.right.gh-btn-icon.ember-view').click();
      cy.wait(500)
      
      
      


      
      
      
      
      
  
    });
  })