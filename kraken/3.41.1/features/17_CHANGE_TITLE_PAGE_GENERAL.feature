Feature: Cambiar título y descripción general de todo el sitio

@user65 @web
Scenario: Como un usuario inicio sesión, voy a la sección de "Settings"  y seleccionar la opción "General", expandir la opción de “Title & description”, cambiar el título y la descripción, guardar cambios, ir a la sección "View site" y verificar que el título fue actualizado. Luego ir al sitio principal y verificar que la descripción se actualizó. Por último, revertir los cambios y cerrar sesión

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/settings/general"
    And I wait for 1 seconds
    Then I should see the text "<HEADER_TEXT_GENERAL_SECTION>" on plain element with xpath "<HEADER_TITLE_PAGE_SECTION>"

    Given I click element with xpath "<FIRST_PUBLICATION_INFO_OPTION_GENERAL_SECTION>"
    Then I set text "<NEW_TITLE_TEXT_PUBLICATION_INFO_GENERAL_SECTION>" on element with xpath "<TITLE_FIELD_PUBLICATION_INFO_GENERAL_SECTION>"
    And I set text "<NEW_DESCRIPTION_TEXT_PUBLICATION_INFO_GENERAL_SECTION>" on element with xpath "<DESCRIPTION_FIELD_PUBLICATION_INFO_GENERAL_SECTION>"
    And I wait for 2 seconds
    Then I click element with xpath "<BTN_SAVE_SETTINGS>"

    Given I navigate to page "http://localhost:2368/ghost/#/site"
    Then I wait for 2 seconds
    And I should see the text "<NEW_TITLE_TEXT_PUBLICATION_INFO_GENERAL_SECTION>" on plain element with xpath "<GENERAL_HEADER_TEXT_SITE>"
    Then I wait for 2 seconds
    And I navigate to page "http://localhost:2368/"
    And I should see the text "<NEW_DESCRIPTION_TEXT_PUBLICATION_INFO_GENERAL_SECTION>" on plain element with xpath "<GENERAL_DESCRIPTION_TEXT_SITE>"
    
    #RESET CHANGES
    Given I navigate to page "http://localhost:2368/ghost/#/settings/general"
    And I wait for 2 seconds
    Then I click element with xpath "<FIRST_PUBLICATION_INFO_OPTION_GENERAL_SECTION>"
    And I set text "<OLD_TITLE_TEXT_PUBLICATION_INFO_GENERAL_SECTION>" on element with xpath "<TITLE_FIELD_PUBLICATION_INFO_GENERAL_SECTION>"
    And I set text "<OLD_DESCRIPTION_TEXT_PUBLICATION_INFO_GENERAL_SECTION>" on element with xpath "<DESCRIPTION_FIELD_PUBLICATION_INFO_GENERAL_SECTION>"
    And I wait for 2 seconds
    Then I click element with xpath "<BTN_SAVE_SETTINGS>"

    Then Sign out from ghost session
    And I wait for 2 seconds
