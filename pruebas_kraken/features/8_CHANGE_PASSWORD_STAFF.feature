Feature: Cambiar contraseña en módulo Staff

@user69 @web
Scenario: Como un usuario inicio sesión, voy a la sección de "Staff", selecciono mi usuario, busco el campo de contraseña, lleno los campos solicitados, cierro sesión, inicio nuevamente sesión con la nueva contraseña y puedo consultar la lista de publicaciones.

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/staff"
    And I wait for 2 seconds
    Then I should see the text "<ACTIVE_USERS_TEXT_STAFF>" on plain element with xpath "<ACTIVE_USERS_TITLE_STAFF>"
    Then I should see the text "<ACTIVE_USER_OWNER_TITLE_STAFF>" on plain element with xpath "<ACTIVE_USER_OWNER_STAFF>"

    Given I change my old password "<PASSWORD>" in staff section with my new password "<NEW_PASSWORD>"
    Then Sign out from ghost session
    And I wait for 2 seconds

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<NEW_PASSWORD>"
    Then I should see the text "<HEADER_TITLE_TEXT_POST_SECTION>" on plain element with xpath "<HEADER_TITLE_POST_SECTION>"
    And I wait for 2 seconds
    And Sign out from ghost session

    #RESET PASSWORD
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<NEW_PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/staff"
    And I wait for 2 seconds
    Then I change my old password "<NEW_PASSWORD>" in staff section with my new password "<PASSWORD>"
    Then Sign out from ghost session
    And I wait for 2 seconds
    Then I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I wait for 1 seconds
    And I should see the text "<HEADER_TITLE_TEXT_POST_SECTION>" on plain element with xpath "<HEADER_TITLE_POST_SECTION>"
