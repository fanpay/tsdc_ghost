Feature: Eliminar foto de perfil del usuario

@user82 @web
Scenario: Como usuario quiero hacer inicio de sesión, ir al apartado de "staff", ver la información del usuario, eliminar la foto de perfil y guardar los cambios
    
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
        And I navigate to page "http://localhost:2368/ghost/#/staff"
        And I wait for 2 seconds


    Given I should see the text "<OWNER_STATUS_TEXT_STAFF>" on plain element with xpath "<OWNER_STATUS_LABEL_STAFF>"
        And I click element with xpath "<OWNER_STATUS_LABEL_STAFF>"
    Then I wait for 2 seconds
        And I click element with xpath "<BUTTON_EDIT_USER_IMAGE_STAFF>"
        And I wait for 2 seconds
        And I click element with xpath "<BUTTON_DELETE_IMAGE_STAFF>"
        And I wait for 2 seconds
        And I click element with xpath "<BUTTON_SAVE_CHANGES_IMAGE_STAFF>"
        And I wait for 2 seconds
    
    Then I click element with xpath "<BUTTON_EDIT_USER_IMAGE_STAFF>"
        And I wait for 2 seconds
        And I should see the text "<TEXT_BUTTON_UPLOAD_IMAGE_STAFF>" on plain element with xpath "<BUTTON_UPLOAD_IMAGE_STAFF>"

