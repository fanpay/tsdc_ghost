Feature: Editar publicación

@user80 @web
Scenario: Como un usuario inicio sesión, accedo a una publicación previamente creada, la edito y se guardan los cambios correctamente

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/editor/post"
    And I wait for 2 seconds
    And I select a post with title "<PLACES>" on plain element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    And I wait for 2 seconds
    Then I set text "<MOCK_TITLE_PAGE_1>" on element with xpath "<POST_TITLE_ECLASS_FILLED>"
    Then I click element with xpath "<BTN_PUBLISH>"
    And I click element with xpath "<PUBLISH_DATE_FIELD_POST_PUBLICATION>"
    And I wait for 2 seconds