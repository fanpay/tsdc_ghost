/**
 Como un usuario inicio sesión, creo una página, determinaré 
 una fecha diferente al día de la creación y la visualizaré 
 en el apartado de páginas agendadas.*  */
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
      cy.get('.ember-view.gh-btn.gh-btn-green').click();
      cy.get('textarea[placeholder="Page Title"]').type("Escenario 13");
      cy.get('.post-settings').click();
      cy.wait(1000)
      cy.get('.gh-date-time-picker-date').clear()
      cy.get('.gh-date-time-picker-date').type("2023-05-03");
      cy.get('.close').click()
      cy.go('back');
      
       //then
      cy.get(".gh-nav-top").contains("Pages").click();
      cy.wait(1000)
      cy.get('.gh-contentfilter-type > .ember-view').click();
      cy.wait(1000)
      cy.get('[data-option-index="1"]').click()


     
    
  
    });
  })