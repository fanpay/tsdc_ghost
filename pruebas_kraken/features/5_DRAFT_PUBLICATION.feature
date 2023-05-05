Feature: Crear DRAFT en Publicaciones

@user68 @web
Scenario: Como un usuario inicio sesión, creo una publicación básica pero no la publico, la dejo en estado "Draft" o "Borrador". Luego visualizo la lista de publicaciones, busco la publicación que estaba editando y verifico que su estado sea "Draft" o "Borrador"

    Given I navigate to the post editor page
    And I create a new post in draft status with title "<MOCK_TITLE_POST_1>" and content "<MOCK_CONTENT_POST_1>"


    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I should see the text "<MOCK_TITLE_POST_1>" on H3 element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    Then I should see the text "<DRAFT_TEXT>" on H3 element with xpath "<STATUS_FIRST_DRAFT_POST>"
    And I wait for 2 seconds

    Then Delete first draft publication created with title "<MOCK_TITLE_POST_1>"
    And I wait for 2 seconds