Feature: Eliminar el logo de la identidad de publicación

@user87 @web
Scenario: Como un usuario inicio sesión, elimino el logo de la identidad de publicación y verifico los cambios en la sección principal
    Given For scenario "E19", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
        And I navigate to page "http://localhost:2368/ghost/#/settings/general"
        And I wait for 2 seconds
        And I click element with xpath "<BUTTON_DELETE_PUBLICATION_LOGO_GENERAL>"
    Then I click element with xpath "<BTN_SAVE_SETTINGS>"

    Given I navigate to page "http://localhost:2368"
        And I wait for 2 seconds
    Then The field with selector "<IMAGE_MAIN_LOGO>" should not exist
        And I wait for 2 seconds