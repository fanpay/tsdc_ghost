Feature: Remover imagen de una página

@user84 @web
Scenario: Como usuario inicio sesión, voy a la sección de "Pages", selecciono la primera página, voy a la sección de "post settings" y remuevo la imagen asociada a la página. Guardo los cambios, vuelvo a la sección de "Páginas" y reviso que la foto se haya eliminado
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/pages"
    And I wait for 2 seconds
    And I click element with xpath "<FIRST_PAGE_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<POST_SETTINGS_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<REMOVE_IMAGE_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<SAVE_CHANGES_XPATH>"
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368/ghost/#/pages"
    And I wait for 2 seconds
    Then I should not see the image at xpath "<FIRST_PAGE_IMAGE_XPATH>"