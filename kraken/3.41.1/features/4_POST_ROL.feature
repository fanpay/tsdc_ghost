Feature: Crear post y asignar rol de editor

@user81 @web
Scenario: Como usuario quiero crear un post y asignar un rol de editor a alguna persona asociada a Ghost
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I wait for 2 seconds
    And I create a new post with title "<TITLE_POST_FIRST_SCENARIO>" and content "<CONTENT_POST_FIRST_SCENARIO>"

    Given I navigate to page "http://localhost:2368/ghost/#/posts"
        And I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
        And I wait for 2 seconds
    Then I click element with xpath "<SETTINGS_BUTTON>"
        And I set text "<DEFAULT_AUTHOR_GHOST>" on element with xpath "<MULTIPLE_INPUT_AUTHOR_POST>"
        And I wait for 2 seconds
        And Enter on element with xpath "<MULTIPLE_INPUT_AUTHOR_POST>"
        And I wait for 4 seconds
    Then I click element with xpath "<CLOSE_SETTINGS_BUTTON>"
        And I wait for 2 seconds
    Then I click element with xpath "<BTN_PUBLISH>"
        And I wait for 2 seconds
        And I click element with xpath "<BTN_BLUE_PUBLISH>"

    Given I navigate to page "http://localhost:2368/ghost/#/posts"
        And I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
        And I wait for 2 seconds
    Then I click element with xpath "<SETTINGS_BUTTON>"
        And I should see a partial text "<DEFAULT_AUTHOR_GHOST>" on plain element with xpath "<DROPDOWN_AUTHOR_POST>"

    #Rollback for first publication created
    Then Delete first publication created with title "<TITLE_POST_FIRST_SCENARIO>"
