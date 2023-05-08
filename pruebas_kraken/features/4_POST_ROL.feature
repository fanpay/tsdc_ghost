Feature: Crear post y asignar rol de editor

@user81 @web
Scenario: Como usuario quiero crear un post y asignar un rol de editor a alguna persona asociada a Ghost
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/staff"
    And I wait for 2 seconds
    And I click element with xpath "<ADD_NEW_STAFF_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I set text "<EDITOR_USERNAME>" on element with xpath "<STAFF_USERNAME_INPUT_XPATH>"
    And I wait for 2 seconds
    And I set text "<EDITOR_EMAIL>" on element with xpath "<STAFF_EMAIL_INPUT_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<SAVE_STAFF_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368/ghost/#/posts"
    And I wait for 2 seconds
    And I click element with xpath "<NEW_POST_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I set text "<POST_TITLE>" on element with xpath "<POST_TITLE_INPUT_XPATH>"
    And I wait for 2 seconds
    And I set text "<POST_CONTENT>" on element with xpath "<POST_CONTENT_INPUT_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<ASSIGN_EDITOR_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I set text "<EDITOR_USERNAME>" on element with xpath "<EDITOR_SEARCH_INPUT_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<SELECT_EDITOR_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<PUBLISH_POST_BUTTON_XPATH>"
    And I wait for 2 seconds
    Then I should see the text "<POST_TITLE>" on plain element with xpath "<POST_TITLE_XPATH>"
    And I wait for 2 seconds
    And I should see the text "<EDITOR_USERNAME>" on plain element with xpath "<POST_EDITOR_XPATH>"
    And I wait for 2 seconds