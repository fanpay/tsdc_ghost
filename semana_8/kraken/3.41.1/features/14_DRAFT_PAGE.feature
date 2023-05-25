Feature: Crear borrador de una página en módulo Pages

@user64 @web
Scenario: Como un usuario inicio sesión, voy a la sección de "Pages", crearé una página que incluya un título y una descripción, la guardo como borrador, cerrar sesión, volver a iniciar sesión, ir a la sección de "Pages", verificar que la publicación creada tenga el estado de borrador o "draft"

    Given For scenario "E14", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/pages"
    And I wait for 2 seconds
    Then I should see the text "<HEADER_TITLE_TEXT_PAGE_SECTION>" on plain element with xpath "<HEADER_TITLE_PAGE_SECTION>"
    
    Given I navigate to page "http://localhost:2368/ghost/#/editor/page"
    Then I set text "<MOCK_TITLE_PAGE_1>" on element with xpath "<POST_TITLE_ECLASS>"
    And I set text "<MOCK_CONTENT_POST_1>" on element with xpath "<CONTENT_ECLASS>"
    Then  I click element with xpath "<LNK_BACK_POSTS>"
    
    Then Sign out from ghost session
    And I wait for 2 seconds

    Given For scenario "E1", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/pages"
    And I wait for 2 seconds
    Then I should see the text "<MOCK_TITLE_PAGE_1>" on plain element with xpath "<TITLE_FIRST_PAGE_PUBLISHED>"
    And I should see the text "<STATUS_TEXT_FIRST_PAGE_DRAFT>" on plain element with xpath "<STATUS_FIRST_PAGE_PUBLISHED>"
