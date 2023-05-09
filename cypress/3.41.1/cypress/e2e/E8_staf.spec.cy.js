/**
 * Como un usuario inicio sesión, voy a la sección de "Staff", selecciono mi usuario, busco el campo de contraseña, 
 * lleno los campos solicitados, cierro sesión, inicio nuevamente sesión con la nueva contraseña y puedo consultar la 
 * lista de publicaciones. 
 *  */
const email = Cypress.config("ghostUrl");
describe('Cambiar contraseña del usuario autenticado.', () => {
  let folderPathSS = 'E8_staf/E8';
  const newPass = 'Asdfghjklz';

  beforeEach(() => {
    cy.visit(Cypress.config("ghostUrl"))
    cy.screenshot(folderPathSS);
    cy.wait(1000)
  });

  it("Cambiar contraseña del usuario", () => {
    //Given
    login(Cypress.config("email"), Cypress.config("password"));

    // When
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-badge.owner').click();
    cy.screenshot(folderPathSS);
    cy.get('#user-password-old').type(Cypress.config("password"));
    cy.wait(1000);
    cy.screenshot(folderPathSS);
    cy.get('#user-password-new').type(newPass);
    cy.wait(1000);
    cy.screenshot(folderPathSS);
    cy.get('#user-new-password-verification').type(newPass);
    cy.wait(1000);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view').click();
    cy.wait(2000);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
    cy.wait(1000);
    cy.screenshot(folderPathSS);

  });

  it("Ingresar con nuevo usuario y actualizar a contraseña anterior", () => {

    // Then
    login(Cypress.config("email"), newPass);

    // Restaurar password anterior
    cy.get(".gh-nav-top").contains("Staff").click();
    cy.screenshot(folderPathSS);
    cy.get('.gh-badge.owner').click();
    cy.screenshot(folderPathSS);
    cy.get('#user-password-old').type(newPass);
    cy.wait(1000);
    cy.screenshot(folderPathSS);
    cy.get('#user-password-new').type(Cypress.config("password"));
    cy.wait(1000);
    cy.screenshot(folderPathSS);
    cy.get('#user-new-password-verification').type(Cypress.config("password"));
    cy.wait(1000);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view').click();
    cy.wait(2000);
    cy.screenshot(folderPathSS);
    cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
    cy.wait(1000);
    cy.screenshot(folderPathSS);

  });

  function login(email, password) {
    cy.get('form').within(() => {
      cy.get('input[name="identification"]').type(email)
      cy.screenshot(folderPathSS);
      cy.get('input[name="password"]').type(password)
      cy.screenshot(folderPathSS);
      cy.get('#ember12').click()
      cy.screenshot(folderPathSS);
    })
    cy.wait(1000)
  }

})

