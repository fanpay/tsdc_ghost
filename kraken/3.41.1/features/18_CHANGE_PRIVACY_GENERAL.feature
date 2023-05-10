Feature: Poner como privado el sitio principal

@user75 @web
Scenario: Como un usuario inicio sesión, voy a la sección de "Settings"  y seleccionar la opción "Make this site private", ir al sitio principal y verificar que efectivamente sea un sitio privado y luego nuevamente dejarlo publico

    Given For scenario "E18", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
    Then I navigate to page "http://localhost:2368/ghost/#/settings/general"
        And I wait for 1 seconds
        And I should see the text "<HEADER_TEXT_GENERAL_SECTION>" on plain element with xpath "<HEADER_TITLE_PAGE_SECTION>"

    Given I click element with xpath "<BTN_PRIVATE_SITE_SETTINGS>"
    Then I click element with xpath "<BTN_SAVE_SETTINGS>"


    Given I navigate to page "http://localhost:2368/"
    Then I wait for 2 seconds
        And I should see the text "<PRIVATE_SITE_TITLE_TEXT>" on plain element with xpath "<PRIVATE_SITE_TITLE_HEADER>"

    #Reverse changes on privacy
    Then I navigate to page "http://localhost:2368/ghost/#/settings/general"
        And I wait for 1 seconds
        And I should see the text "<HEADER_TEXT_GENERAL_SECTION>" on plain element with xpath "<HEADER_TITLE_PAGE_SECTION>"

    Given I click element with xpath "<BTN_PRIVATE_SITE_SETTINGS>"
    Then I click element with xpath "<BTN_SAVE_SETTINGS>"
        And I wait for 2 seconds