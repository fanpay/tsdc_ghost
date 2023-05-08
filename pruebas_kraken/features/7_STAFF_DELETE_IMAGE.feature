Feature: Eliminar foto de perfil del usuario

@user82 @web
Scenario: Como usuario quiero hacer inicio de sesión, ir al apartado de "staff", ver la información del usuario, eliminar la foto de perfil y guardar los cambios
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/staff"
    And I wait for 2 seconds
    And I click element with xpath "<USER_PROFILE_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<EDIT_PROFILE_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<REMOVE_PHOTO_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<SAVE_PROFILE_BUTTON_XPATH>"
    And I wait for 2 seconds
