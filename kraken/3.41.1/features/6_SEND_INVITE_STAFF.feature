Feature: Enviar una invitación a un usuario y eliminarla posteriormente

@user71 @web
Scenario: Como un usuario inicio sesión, Ir a la sección “Staff”, invitar a un usuario, asignar un rol y posteriormente remover la invitación

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/staff"
    And I wait for 2 seconds
    Then I click element with xpath "<GREEN_BUTTON_STAFF>"
    And I set text "<EMAIL_VALUE_INVITE_STAFF>" on element with xpath "<EMAIL_FIELD_INVITE_STAFF>"
    And I wait for 2 seconds
    Then I click element with xpath "<GREEN_BUTTON_MODAL_STAFF>"
    And I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/staff"
    Then I should see the text "<EMAIL_VALUE_INVITE_STAFF>" on plain element with xpath "<FIRST_EMAIL_INVITE_STAFF>"
    Then I click element with xpath "<FIRST_REVOKE_ACTION_INVITE_STAFF>"
    And I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/staff"
    Then I should not see the text "<EMAIL_VALUE_INVITE_STAFF>" on plain element with xpath "<FIRST_EMAIL_INVITE_STAFF>"

    