Feature: Remover imagen de una página

@user84 @web
Scenario: Como usuario inicio sesión, voy a la sección de "Pages", selecciono la primera página, voy a la sección de "post settings" y remuevo la imagen asociada a la página. Guardo los cambios, vuelvo a la sección de "Páginas"  y reviso que la foto se haya eliminado.

    Given For scenario "E10", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"

    Then I navigate to page "http://localhost:2368/ghost/#/editor/page"
        And I set text "<MOCK_TITLE_PAGE_1>" on element with xpath "<POST_TITLE_ECLASS>"
        And I set text "<MOCK_CONTENT_POST_1>" on element with xpath "<CONTENT_ECLASS>"
        And I click element with xpath "<SETTINGS_BUTTON>"
    Then I click element with xpath ".gh-image-uploader-unsplash"
    Then I click element with xpath "<UNPLASH_FIRST_IMAGE>"
    Then I click element with xpath "<CLOSE_SETTINGS_BUTTON>"
    Then I click element with xpath "<BTN_PUBLISH>"
    Then I click element with xpath "<BTN_BLUE_PUBLISH>"

    Given I navigate to page "http://localhost:2368/ghost/#/pages"
        And I wait for 2 seconds
    Then I click element with xpath "<TITLE_FIRST_PUBLISHED_POST>"
    Then I click element with xpath "<SETTINGS_BUTTON>"
        And I wait for 2 seconds
        And I click element with xpath "<BUTTON_DELETE_IMAGE_STAFF>"
        And I wait for 3 seconds
    Then I click element with xpath "<CLOSE_SETTINGS_BUTTON>"
    Then I click element with xpath "<BTN_PUBLISH>"
        And I click element with xpath "<BTN_BLUE_PUBLISH>"

    
    Given I click element with xpath "<SETTINGS_BUTTON>"
    Then I should see the text "<TEXT_BUTTON_UPLOAD_IMAGE_PAGE>" on plain element with xpath "(//div[@class='gh-btn gh-btn-outline']/span)[1]"


    #DELETE PAGE THAT WAS CREATED
    Given I wait for 3 seconds
    Then I click element with xpath "<LNK_DELETE_POST>" 
    And I click element with xpath "<BTN_CONFIRM_DELETE>"

        