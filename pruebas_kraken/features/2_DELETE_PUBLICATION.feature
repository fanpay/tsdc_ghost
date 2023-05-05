Feature: Eliminar POST

@user60 @web
Scenario: Como un usuario inicio sesión, creo una publicación, luego visualizo la lista de publicaciones, busco la que creé y elimino el registro. Vuelvo a comprobar la lista de publicaciones y la publicación creada ya no debe estar

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/editor/post"
    And I wait for 2 seconds
    And I create a new post with title "<MOCK_TITLE_POST_1>" and content "<MOCK_CONTENT_POST_1>"

    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I should see the text "<MOCK_TITLE_POST_1>" on plain element with xpath "<TITLE_FIRST_PUBLISHED_POST>"

    Then Delete first publication created with title "<MOCK_TITLE_POST_1>"

    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    And I wait for 2 seconds

    Then The plain field "<TITLE_FIRST_PUBLISHED_POST>" should not the value "<MOCK_TITLE_POST_1>"
    And I wait for 2 seconds
