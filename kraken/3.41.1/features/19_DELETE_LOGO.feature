Feature: Eliminar el logo de la identidad de publicación

@user87 @web
Scenario: Como un usuario inicio sesión, elimino el logo de la identidad de publicación y verifico los cambios en la sección principal
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
        And I navigate to page "http://localhost:2368/ghost/#/settings/general"
        And I wait for 2 seconds
        And I click element with xpath "<BUTTON_DELETE_PUBLICATION_LOGO_GENERAL>"
        And I wait for 2 seconds
    Then I click element with xpath "<BTN_SAVE_SETTINGS>"
        And I wait for 2 seconds

    Given I navigate to page "http://localhost:2368"
        And I wait for 2 seconds
    Then The field with selector "<IMAGE_MAIN_LOGO>" should not exist
    