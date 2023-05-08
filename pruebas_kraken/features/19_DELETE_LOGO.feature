Feature: Eliminar el logo de la identidad de publicación

@user87 @web
Scenario: Como un usuario inicio sesión, elimino el logo de la identidad de publicación y verifico los cambios en la sección principal
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/settings/general"
    And I wait for 2 seconds
    And I click element "<LOGO_USER>"
    And I wait for 2 seconds