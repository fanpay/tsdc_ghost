Feature: Editar publicación

@user80 @web
Scenario: Como un usuario inicio sesión, accedo a una publicación previamente creada, la edito y se guardan los cambios correctamente

    Given For scenario "E100", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
    Then I create a new post with title "$name_1" and content "$string_1"

    Given I navigate to page "<LNK_POSTS>"
        And I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    Then I set text "$name_2" on element with xpath "<POST_TITLE_ECLASS>"
        And I set text "$string_2" on element with xpath "<CONTENT_ECLASS>"
    Then I click element with xpath "<BTN_PUBLISH>"
        And I click element with xpath "<BTN_BLACK_PUBLISH>"
        And I click element with xpath "<BTN_BLACK_MODAL>"
     

    Given I navigate to page "<LNK_POSTS>"
    Then I should see the text "$$name_2" on plain element with xpath "<SPECIFIC_POST_BY_TITLE>"


    #Rollback for first publication created
    Then Delete first publication created with title "$$name_2"
        And I wait for 2 seconds
