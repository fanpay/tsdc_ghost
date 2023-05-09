/**
 * Como un usuario inicio sesión, voy a la sección de "Settings" y seleccionar la opción "General", expandir la opción de 
 * “Title & description”, cambiar el título y la descripción, guardar cambios, ir a la sección "View site" y verificar que 
 * el título fue actualizado. Luego ir al sitio principal y verificar que la descripción se actualizó. Por último, revertir 
 * los cambios y cerrar sesión.
 *  */

describe('Cambiar el titulo y la descripcion del sitio', () => {
  
  let titulo = 'Ghost Miso 2023';

  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.wait(1000);
  });

  it("Actualizar el titulo y la descripcion", () => {
    // Given
    login(Cypress.config("email"), Cypress.config("password"));

    //When
    cy.get(".gh-nav-top").contains("General").click();
    cy.get('.mt2 > .gh-setting-first > .gh-setting-action > .gh-btn > span').click();
    cy.wait(100);
    cy.get('.gh-setting-content-extended > :nth-child(1) > .ember-text-field.gh-input.ember-view').clear();
    cy.get('.gh-setting-content-extended > :nth-child(1) > .ember-text-field.gh-input.ember-view').type(titulo, {force: true});
    cy.get('.gh-setting-content-extended > :nth-child(2) > .ember-text-field.gh-input.ember-view').clear();
    cy.get('.gh-setting-content-extended > :nth-child(2) > .ember-text-field.gh-input.ember-view').type('See more, do more.', {force: true});
    cy.wait(500);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

    //Then
    cy.wait(500);
    cy.get('.gh-nav-menu-details-blog').then($value => {
      expect($value.text()).to.equal(titulo);
    });
  });

  function login(email, password) {
    cy.get('form').within(() => {
      cy.get('input[name="identification"]').type(email)
      cy.get('input[name="password"]').type(password)
      cy.get('#ember12').click()
    })
    cy.wait(1000)
  }
})

