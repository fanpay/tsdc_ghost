/**
 Como un usuario inicio sesión, creo una página, determinaré 
 una fecha diferente al día de la creación y la visualizaré 
 en el apartado de páginas agendadas.*  */
 describe('Editar post peviamente creado y visualizarlo.', () => {
  let folderPathSS = 'E13_pages_date/E13';
    let titulo = 'Post para eliminar';
    // Given
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
        cy.get('#ember12').click()
        cy.screenshot(folderPathSS);
      })
      cy.wait(1000)
  
    })
  
    it("Select a post", () => {
  
      // When
      cy.screenshot(folderPathSS);
      cy.get(".gh-nav-top").contains("Pages").click();
      cy.screenshot(folderPathSS);
      cy.get('.ember-view.gh-btn.gh-btn-green').click();
      cy.screenshot(folderPathSS);
      cy.get('textarea[placeholder="Page Title"]').type("Escenario 13");
      cy.screenshot(folderPathSS);
      cy.get('.post-settings').click();
      cy.wait(1000)
      cy.screenshot(folderPathSS);
      cy.get('.gh-date-time-picker-date').clear()
      cy.screenshot(folderPathSS);
      cy.get('.gh-date-time-picker-date').type("2023-05-03");
      cy.screenshot(folderPathSS);
      cy.get('.close').click()
      cy.screenshot(folderPathSS);
      cy.go('back');
      cy.screenshot(folderPathSS);
      
       //then
      cy.get(".gh-nav-top").contains("Pages").click();
      cy.wait(1000)
      cy.screenshot(folderPathSS);
      cy.get('.gh-contentfilter-type > .ember-view').click();
      cy.wait(1000)
      cy.screenshot(folderPathSS);
      cy.get('[data-option-index="1"]').click()
      cy.screenshot(folderPathSS);
    });
  })