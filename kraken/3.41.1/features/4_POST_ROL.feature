Feature: Crear post y asignar rol de editor

@user81 @web
Scenario: Como usuario quiero crear un post y asignar un rol de editor a alguna persona asociada a Ghost
    Given For scenario "E4", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
    Then I create a new post with title "<TITLE_POST_FIRST_SCENARIO>" and content "<CONTENT_POST_FIRST_SCENARIO>"

    Given I navigate to page "http://localhost:2368/ghost/#/posts"
        And I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    Then I click element with xpath "<SETTINGS_BUTTON>"
        And I set text "<DEFAULT_AUTHOR_GHOST>" on element with xpath "<MULTIPLE_INPUT_AUTHOR_POST>"
        And Enter on element with xpath "<MULTIPLE_INPUT_AUTHOR_POST>"
        And I wait for 4 seconds
    Then I click element with xpath "<CLOSE_SETTINGS_BUTTON>"
        And I click element with xpath "<BTN_PUBLISH>"
        And I click element with xpath "<BTN_BLUE_PUBLISH>"

    Given I navigate to page "http://localhost:2368/ghost/#/posts"
        And I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    Then I click element with xpath "<SETTINGS_BUTTON>"
        And I should see a partial text "<DEFAULT_AUTHOR_GHOST>" on plain element with xpath "<DROPDOWN_AUTHOR_POST>"

    #Rollback for first publication created
    Given Delete first publication created with title "<TITLE_POST_FIRST_SCENARIO>"
    Then I wait for 2 seconds
