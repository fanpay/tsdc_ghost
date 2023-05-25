Feature: Programar una publicación en el módulo Pages

@user70 @web
Scenario: Como un usuario inicio sesión, crear una publicación, determinar una fecha diferente al día de la creación para su publicación y validar que fue programada la publicación. 

    Given For scenario "E3", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
        And I navigate to page "http://localhost:2368/ghost/#/editor/post"
        And I wait for 2 seconds
    Then I set text "<MOCK_TITLE_PAGE_1>" on element with xpath "<POST_TITLE_ECLASS>"
        And I set text "<MOCK_CONTENT_POST_1>" on element with xpath "<CONTENT_ECLASS>"
    Then I click element with xpath "<BTN_PUBLISH>"
        And I click element with xpath "<PUBLISH_DATE_FIELD_POST_PUBLICATION>"
    Then I set text "<PUBLISH_DATE_VALUE_POST_PUBLICATION>" on element with xpath "<PUBLISH_DATE_FIELD_POST_PUBLICATION>"
        And I click element with xpath "<BTN_BLUE_PUBLISH>"

    Given I navigate to page "http://localhost:2368/ghost/#/posts?type=scheduled"
    Then I should see the text "<MOCK_TITLE_PAGE_1>" on plain element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
        And I should see the text "<STATUS_TEXT_FIRST_PAGE_SCHEDULED>" on plain element with xpath "<STATUS_FIRST_PAGE_PUBLISHED>"
    Then I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
        And I should see a partial text "<PUBLISH_DATE_VALUE_HR_POST_PUBLICATION>" on plain element with xpath "<SCHEDULED_DATETIME_VALUE_HR_POST_PUBLICATION>"
    
    #DELETE SCHEDULE POST THAT WAS CREATED
    Given I navigate to page "http://localhost:2368/ghost/#/posts?type=scheduled"
    Then I should see the text "<MOCK_TITLE_PAGE_1>" on plain element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    Then I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    Then I click element with xpath "<BTN_PUBLISH>" 
    Then I click element with xpath "<LNK_DELETE_POST>" 
    Then I click element with xpath "<BTN_CONFIRM_DELETE>" 
        And I wait for 2 seconds