Feature: Editar publicación

@user80 @web
Scenario: Como un usuario inicio sesión, accedo a una publicación previamente creada, la edito y se guardan los cambios correctamente

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I wait for 2 seconds
    And I create a new post with title "<TITLE_POST_FIRST_SCENARIO>" and content "<CONTENT_POST_FIRST_SCENARIO>"


    Given I navigate to page "http://localhost:2368/ghost/#/posts"
        And I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
        And I wait for 2 seconds
    Then I set text "<MOCK_TITLE_PAGE_1>" on element with xpath "<POST_TITLE_ECLASS>"
        And I wait for 2 seconds
        And I set text "<MOCK_CONTENT_POST_1>" on element with xpath "<CONTENT_ECLASS>"
    Then I click element with xpath "<BTN_PUBLISH>"
        And I wait for 2 seconds
        And I click element with xpath "<BTN_BLUE_PUBLISH>"
     

    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I should see the text "<MOCK_TITLE_PAGE_1>" on plain element with xpath "<TITLE_FIRST_PUBLISHED_POST>"


    #Rollback for first publication created
    Then Delete first publication created with title "<MOCK_TITLE_PAGE_1>"