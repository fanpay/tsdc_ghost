Feature: Crear una etiqueta y taggear un post

@user74 @web
Scenario: Iniciar sesión, Crear una etiqueta, crear un post con la etiqueta creada y publicar el post. El post es publicado con la etiqueta creada. 
#Como un usuario inicio sesión, Ir a la sección Tags, crear una etiqueta y guardar cambios, ir a la sección de Posts, crear un nuevo Post y asociar la etiqueta creada, publicar el post.  Verificar en los post publicados que exista la publicación y que tenga la etiqueta asociada

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/tags"
    Then I click element with xpath "<GREEN_BUTTON_TAGS>"
    And I wait for 2 seconds
    Then I set text "<TEXT_NAME_TAG>" on element with xpath "<INPUT_NAME_TAG>"
    Then I click element with xpath "<BTN_SAVE_SETTINGS>"


    Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
    Then I set text "<MOCK_TITLE_PAGE_1>" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    And I set text "<MOCK_CONTENT_POST_1>" on element with xpath "<CONTENT_ECLASS>"
    And I wait for 2 seconds
    Then I click element with xpath "<SETTINGS_BUTTON>"
    And I set text "<TEXT_NAME_TAG>" on element with xpath "<MULTIPLE_OPTION_TAG_FIELD_POST>"
    And Enter on element with xpath "<MULTIPLE_OPTION_TAG_FIELD_POST>"
    And I wait for 2 seconds
    Then I click element with xpath "<CLOSE_SETTINGS_BUTTON>"
    And I wait for 2 seconds
    Then I click element with xpath "<BTN_PUBLISH>"
    And I wait for 2 seconds
    And I click element with xpath "<BTN_BLUE_PUBLISH>"


    Given I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
    Then I should see the text "<MOCK_TITLE_PAGE_1>" on plain element with xpath "<TITLE_FIRST_PAGE_PUBLISHED>"
    And I click element with xpath "<TITLE_FIRST_PAGE_PUBLISHED>"
    And I wait for 2 seconds
    Then I click element with xpath "<CLOSE_SETTINGS_BUTTON>"
    Then I should see a partial text "<TEXT_NAME_TAG>" on plain element with xpath "<MULTIPLE_OPTION_TAG_FIELD_POST>"
    And I wait for 2 seconds

    #DELETE POST
    Given I click element with xpath "<LNK_DELETE_POST>" 
    And I wait for 2 seconds
    And I click element with xpath "<BTN_CONFIRM_DELETE>" 
    Then I should not see the text "<MOCK_TITLE_PAGE_1>" on plain element with xpath "<TITLE_FIRST_PAGE_PUBLISHED>"

    #DELETE TAG
    Given I navigate to page "http://localhost:2368/ghost/#/tags/test-tag"
    Then I click element with xpath "<BTN_DELETE_TAG>" 
    And I wait for 2 seconds
    Then I click element with xpath "<BTN_LEAVE_MODAL>" 
    And I wait for 2 seconds

    