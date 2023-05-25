Feature: Eliminar una página creada en la sección "Pages"

@user73 @web
Scenario: Como un usuario inicio sesión, Ir a la sección Page, crear una página y publicarla en el mismo momento, visualizar la página creada en la lista de páginas. Luego, eliminar la página creada y comprobar que ya no existe en la lista de páginas.


    Given For scenario "E12", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/pages"
    And I wait for 2 seconds
    Then I should see the text "<HEADER_TITLE_TEXT_PAGE_SECTION>" on plain element with xpath "<HEADER_TITLE_PAGE_SECTION>"
    
    Given I navigate to page "http://localhost:2368/ghost/#/editor/page"
    Then I set text "<MOCK_TITLE_PAGE_1>" on element with xpath "<POST_TITLE_ECLASS>"
    And I set text "<MOCK_CONTENT_POST_1>" on element with xpath "<CONTENT_ECLASS>"
    Then I click element with xpath "<BTN_PUBLISH>"
    And I click element with xpath "<BTN_BLUE_PUBLISH>"

    Given I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I should see the text "<MOCK_TITLE_PAGE_1>" on plain element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    And I should see the text "<STATUS_TEXT_FIRST_PAGE_PUBLISHED>" on plain element with xpath "<STATUS_FIRST_PAGE_PUBLISHED>"

    #DELETE PAGE THAT WAS CREATED
    Given I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    Then I click element with xpath "<BTN_PUBLISH>" 
    Then I click element with xpath "<LNK_DELETE_POST>" 
    Then I click element with xpath "<BTN_CONFIRM_DELETE>" 

    #CHECKING ERASED PAGE 
    Given I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I should not see the text "<MOCK_TITLE_PAGE_1>" on plain element with xpath "<PAGE_CONTENT_LIST>"
