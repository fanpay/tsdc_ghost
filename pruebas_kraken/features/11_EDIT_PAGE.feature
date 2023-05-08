Feature: Editar página en módulo Pages

@user63 @web
Scenario: Como un usuario inicio sesión, voy a la sección de "Pages", selecciono la primera página, cambio el título de la página, guardo los cambios, cierro sesión, inicio nuevamente sesión, consulto sección de páginas y la primera página debería tener el título que fue modificado.

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"

    Then I navigate to page "http://localhost:2368/ghost/#/editor/page"
    And I set text "<MOCK_TITLE_PAGE_1>" on element with xpath "<POST_TITLE_ECLASS>"
    And I set text "<MOCK_CONTENT_POST_1>" on element with xpath "<CONTENT_ECLASS>"
    Then I click element with xpath "<BTN_PUBLISH>"
    And I wait for 2 seconds
    And I click element with xpath "<BTN_BLUE_PUBLISH>"
    And I wait for 2 seconds


    And I navigate to page "http://localhost:2368/ghost/#/pages"
    And I wait for 2 seconds
    Then I should see the text "<HEADER_TITLE_TEXT_PAGE_SECTION>" on plain element with xpath "<HEADER_TITLE_PAGE_SECTION>"
    Then I should see the text "<STATUS_TEXT_FIRST_PAGE_PUBLISHED>" on plain element with xpath "<STATUS_FIRST_PAGE_PUBLISHED>"

    Given I click element with xpath "<FIRST_PAGE_PUBLISHED>"
    And I set text "<MOCK_TITLE_PAGE_1>" on element with xpath "<POST_TITLE_ECLASS>"
    Then I click element with xpath "<BTN_PUBLISH>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_BLUE_PUBLISH>"
    And I wait for 3 seconds
    
    Then Sign out from ghost session
    And I wait for 2 seconds

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/pages"
    And I wait for 2 seconds
    Then I should see the text "<MOCK_TITLE_PAGE_1>" on plain element with xpath "<TITLE_FIRST_PAGE_PUBLISHED>"


    #DELETE PAGE THAT WAS CREATED
    Given I click element with xpath "<TITLE_FIRST_PAGE_PUBLISHED>"
    And I wait for 2 seconds
    Then I click element with xpath "<BTN_PUBLISH>" 
    And I wait for 4 seconds
    Then I click element with xpath "<LNK_DELETE_POST>" 
    And I wait for 2 seconds
    Then I click element with xpath "<BTN_CONFIRM_DELETE>" 

