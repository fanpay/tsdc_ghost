/**
 Como usuario inicio sesión, accedo a una publicación previamente creada, la edito de tal forma que los cambios se guarden correctamente y se pueda visualizar en la sección de posts.
 *  */
describe('Editar post peviamente creado y visualizarlo.', () => {

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
  
    it("Select a post", () => {
  
      // When
      cy.get(".gh-nav-top").contains("Posts").click();
      cy.wait(1000)
      cy.get('.gh-canvas').contains("Escenario 1").click();
      
      cy.get('textarea[placeholder="Post Title"]').type(" Editado");
      cy.get('.gh-publishmenu.ember-view').click();
      cy.wait(2000);
      
      cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
      cy.wait(2000);
      cy.go('back');
      cy.go('back');
      
      //Then
      cy.get(".gh-nav-top").contains("Posts").click();
      
  
    });
  })
  
  