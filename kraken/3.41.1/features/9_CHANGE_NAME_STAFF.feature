Feature: Cambiar nombre del usuario autenticado

@user72 @web
Scenario: Como un usuario inicio sesión, Ir a la sección “Staff”, cambiar el nombre del usuario autenticado, cerrar sesión, iniciar sesión nuevamente y verificar en la pantalla principal que el nombre cambie satisfactoriamente. 

    Given For scenario "E9", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
    Then I navigate to page "http://localhost:2368/ghost/#/staff"
        And I should see the text "<OWNER_STATUS_TEXT_STAFF>" on plain element with xpath "<OWNER_STATUS_LABEL_STAFF>"
    
    Given I click element with xpath "<OWNER_STATUS_LABEL_STAFF>"
    And I set text "<NEW_USERNAME_OWNER_TEXT_STAFF>" on element with xpath "<USERNAME_OWNER_FIELD_STAFF>"
    Then I click element with xpath "<BTN_SAVE_SETTINGS>"
    And Sign out from ghost session

    Given For scenario "E9", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
    Then I should see the text "<NEW_USERNAME_OWNER_TEXT_STAFF>" on plain element with xpath "<USERNAME_NAV_BOTTOM>"

    #REVERSE CHANGES
    Given I navigate to page "http://localhost:2368/ghost/#/staff"
    Then I should see the text "<OWNER_STATUS_TEXT_STAFF>" on plain element with xpath "<OWNER_STATUS_LABEL_STAFF>"
        And I click element with xpath "<OWNER_STATUS_LABEL_STAFF>"
        And I set text "<OLD_USERNAME_OWNER_TEXT_STAFF>" on element with xpath "<USERNAME_OWNER_FIELD_STAFF>"
    Then I click element with xpath "<BTN_SAVE_SETTINGS>"
