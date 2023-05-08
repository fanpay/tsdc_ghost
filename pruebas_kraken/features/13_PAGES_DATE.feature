Feature: Crear página con fecha programada

@user85 @web
Scenario: Como un usuario inicio sesión, creo una página, determino una fecha diferente al día de la creación y la visualizo en el apartado de páginas agendadas
    Given I login in ghost with my credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "http://localhost:2368/ghost/#/editor/page"
    And I wait for 2 seconds
    And I set text "<PAGE_TITLE>" on element with xpath "<PAGE_TITLE_INPUT_XPATH>"
    And I set text "<PAGE_CONTENT>" on element with xpath "<PAGE_CONTENT_INPUT_XPATH>"
    And I set text "<FUTURE_DATE>" on element with xpath "<PAGE_SCHEDULE_DATE_INPUT_XPATH>"
    And I click element with xpath "<PAGE_SETTINGS_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<PAGE_PUBLISH_BUTTON_XPATH>"
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368/ghost/#/pages/scheduled"
    And I wait for 2 seconds
    Then I should see the text "<PAGE_TITLE>" on plain element with xpath "<SCHEDULED_PAGE_TITLE_XPATH>"