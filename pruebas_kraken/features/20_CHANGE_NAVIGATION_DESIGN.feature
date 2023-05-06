Feature: Cambiar título de la navegación principal por un valor vacío y ver un error

@user67 @web
Scenario: Como un usuario inicio sesión, voy a la sección de Design, ubicarse en la parte de "Navigation", dejar vacío el primer label y guardar cambios. Debe aparecer un mensaje de error en rojo diciendo "You must specify a label" y el botón de guardado debe estar de color rojo y tener un texto que diga "Retry". Luego ir a la página principal, verificar el menú principal y no debe existir la opción que se intentó crear. Por último, se cierra la sesión. (escenario negativo). 


    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/settings/design"
    And I wait for 1 seconds
    Then I should see the text "<DESIGN_TEXT_GENERAL_SECTION>" on plain element with xpath "<HEADER_TITLE_PAGE_SECTION>"

    Given I click element with xpath "<LABEL_FIRST_OPTION_NAVIGATION_DESIGN>"
    Then I set text "<BLANK_SPACE>" on element with xpath "<LABEL_FIRST_OPTION_NAVIGATION_DESIGN>"
    And I click element with xpath "<BTN_SAVE_SETTINGS>"
    Then I should see the text "<LABEL_ERROR_TEXT_NAVIGATION_DESIGN>" on plain element with xpath "<LABEL_ERROR_NAVIGATION_DESIGN>"
    And I should see the text "<BTN_SAVE_ERROR_TEXT_SETTINGS>" on plain element with xpath "<BTN_SAVE_ERROR_SETTINGS>"


    Given I navigate to page "http://localhost:2368/ghost/#/site"
    Then I wait for 2 seconds
    And I should see the text "<BTN_LEAVE_TEXT_MODAL>" on plain element with xpath "<BTN_LEAVE_MODAL>"
    And I click element with xpath "<BTN_LEAVE_MODAL>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/"
    And I should not see the text "<BLANK_SPACE>" on plain element with xpath "<FIRST_NAV_OPTION_SITE>"


    Then Sign out from ghost session
    And I wait for 2 seconds
