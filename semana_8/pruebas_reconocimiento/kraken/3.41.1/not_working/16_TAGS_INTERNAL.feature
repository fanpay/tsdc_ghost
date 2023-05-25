Feature: Asociar etiqueta interna a una publicación

@user86 @web
Scenario: Como un usuario inicio sesión, creo un nuevo tag interno, lo asocio a una publicación y verifico que el número de posts asociados sea 1
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/tags"
    And I wait for 2 seconds
    And I set text "<TAG_NAME>" on element with xpath "<TAG_NAME_INPUT_XPATH>"
    And I click element with xpath "<CREATE_TAG_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I set text "#<TAG_NAME>" on element with xpath "<TAG_NAME_INPUT_XPATH>"
    And I click element with xpath "<CREATE_TAG_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368/ghost/#/posts"
    And I wait for 2 seconds
    And I click element with xpath "<FIRST_POST_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<POST_SETTINGS_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I set text "<TAG_NAME>" on element with xpath "<TAG_INPUT_XPATH>"
    And I click element with xpath "<SAVE_POST_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368/ghost/#/tags"
    And I wait for 2 seconds
    And I click element with xpath "<INTERNAL_TAGS_TAB_XPATH>"
    And I wait for 2 seconds
