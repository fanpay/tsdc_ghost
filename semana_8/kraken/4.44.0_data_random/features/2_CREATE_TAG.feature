Feature: Intentar crear una etiqueta y validar el campo de descripción

@user74 @web
Scenario: Iniciar sesión, ir a la sección de etiquetas e intentar crear una etiqueta. Utilizar datos pseudo-aleatorios para validar mensajes de error con una longitud no válida en la descripción.

    Given For scenario "E501", I login in ghost using credentials with username "<USERNAME>" and password "<PASSWORD>"
    And I navigate to page "<LNK_TAGS>"
    Then I click element with xpath "<BTN_NEW_TAG>"
    
    And I test pseudo data on element with xpath "<TEXTAREA_DESCRIPTION_TAG>" with error "<ERROR_P_DESCRIPTION_TAG>" expected errors