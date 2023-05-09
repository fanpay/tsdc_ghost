Feature: Cambiar todo el sitio principal a la opción Night Shift y verificar cada uno de los apartados de Ghost su actual color

@user75 @web
Scenario: Como un usuario inicio sesión, voy a la sección de "Labs" ubicada en General, cambiar la opción Night shift y verificar que en las secciones: Posts, Pages, Tags, Staf, General, Design, Code injection, Integrations y Labs el fondo corresponde al tema oscuro de GHost (rgb(38, 50, 56)) 

    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    Then I navigate to page "http://localhost:2368/ghost/#/settings/labs"
    And I wait for 1 seconds
    Given I click element with xpath "<BTN_NIGHT_SHIFT_LABS>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I wait for 1 seconds
    And I should see the color "<NIGH_SHIFT_COLOR>" in element with xpath "<HEADER_SECTION>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I wait for 2 seconds
    And I should see the color "<NIGH_SHIFT_COLOR>" in element with xpath "<HEADER_SECTION>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/tags"
    Then I wait for 2 seconds
    And I should see the color "<NIGH_SHIFT_COLOR>" in element with xpath "<HEADER_SECTION>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/staff"
    Then I wait for 2 seconds
    And I should see the color "<NIGH_SHIFT_COLOR>" in element with xpath "<HEADER_SECTION>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/settings/general"
    Then I wait for 2 seconds
    And I should see the color "<NIGH_SHIFT_COLOR>" in element with xpath "<HEADER_SECTION>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/settings/design"
    Then I wait for 2 seconds
    And I should see the color "<NIGH_SHIFT_COLOR>" in element with xpath "<HEADER_SECTION>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/settings/code-injection"
    Then I wait for 2 seconds
    And I should see the color "<NIGH_SHIFT_COLOR>" in element with xpath "<HEADER_SECTION>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/settings/integrations"
    Then I wait for 2 seconds
    And I should see the color "<NIGH_SHIFT_COLOR>" in element with xpath "<HEADER_SECTION>"
    Then I wait for 2 seconds

    Given I navigate to page "http://localhost:2368/ghost/#/settings/labs"
    Then I wait for 2 seconds
    And I should see the color "<NIGH_SHIFT_COLOR>" in element with xpath "<HEADER_SECTION>"
    Then I wait for 2 seconds


    #Reverse night shift
    Given I navigate to page "http://localhost:2368/ghost/#/settings/labs"
    And I wait for 1 seconds
    And I click element with xpath "<BTN_NIGHT_SHIFT_LABS>"
    Then I wait for 2 seconds