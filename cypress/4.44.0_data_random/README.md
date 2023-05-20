# RECOMENDACIONES IMPORTANTES

Se deben adaptar las nuevas credenciales de autenticación dependiendo del usuario creado en la instalación de GHOST de su propia máquina. Esto se hace en el archivo de [configuración](https://github.com/fanpay/tsdc_ghost/blob/main/prubas_cypress/cypress.config.js) y las variables a editar serían:

    email: "user@email.com",
    password: "Qwertyuiop",

**No olvide colocar las credenciales que usted usa en su instalación de Ghost.**    

## Estrategias de generación de datos aleatorios usados y uso en los escenarios de pruebas

### Explicación estructura de nombramiento de los escenarios.

> TEST_S03_T30_page.spec.cy.js

* **TEST:** Nombre inicial del archivo.
* **S03:** Consecutivo para indicar el número de escenario.
* **T30:** Total cantidad de pruebas dentro del archivo.
* **page:** Funcionalidad probada. Ej: page, tags, members, etc.

Total de pruebas en cypress: **91**

### Estrategias usadas:

* **Pool de datos a-priori:**

    Se han utilizado datos a-prior para validar escenarios exitosos en los siguientes módulos:
    
    - **[Páginas (pages)](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/cypress/e2e/TEST_S03_T30_page.spec.cy.js)**
    - **[Etiquetas (tags)](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/cypress/e2e/TEST_S05_T31.spec_tags.cy.js)**
    - **[Inicio de sesión (login)](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/cypress/e2e/TEST_S01_T07_login.spec.cy.js)**

    Para esto, se escribieron estos datos en la ejecución de cada prueba a-priori. En la descripción de cada prueba hecha, se indica si la prueba contiene datos a-priori con la palabra "*a-prior*" o "*a priori*".

* **Pool de datos *pseudo-aleatorio* dinámico:**

    Para estos escenarios, se han utilizado los siguientes módulos:
    
    * **[Páginas (pages)](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/cypress/e2e/TEST_S03_T30_page.spec.cy.js)**
    * **[Etiquetas (tags)](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/cypress/e2e/TEST_S05_T31.spec_tags.cy.js)**
    * **[Inicio de sesión (login)](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/cypress/e2e/TEST_S01_T07_login.spec.cy.js)**
    
    Se ha utilizado *faker* para la construcción de dos tipos de escenarios:
    - **Primer escenario:** Hacer pruebas con datos dinámicos dentro de las fronteras del campo a evaluar. Ejemplo:
        - Si el campo a evaluar es un *input* tipo texto cuya frontera superior es de 300 caracteres, se generan datos con faker en este rango de caracteres. 
    - **Segundo escenario:** Es similar al anterior cuya diferencia radica en que se generan datos aleatorios fuera de la frontera. Ejemplo:
        - Si el elemento a evaluar es un *input* tipo fecha cuya frontera inferior es la fecha actual, se generan datos aleatorios con fechas inferiores a la actual. 
        
     En la descripción de cada prueba, se menciona si la prueba contiene datos a pseudo-aleatorios dinámicos y además, si la prueba genera datos dentro o fuera de los límites (fronteras).
     Para identificar los escenarios que contienen las pruebas con datos pseudo-aleatorios, en su descripción aparece la palabra "*pseudo*".

* **Escenario con datos aleatorios:**

    Para estos escenarios, se ha utilizado faker en todos los campos, ingresando datos totalmente aleatorios según el tipo de campo sin limitar ninguna de las fronteras. 

    - Módulos involucrados:
        - **[Registrarse (sign-up)](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/cypress/e2e/TEST_S04_T05_signup.spec.cy.js)**
        - **[Miembros (members)](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/cypress/e2e/TEST_S02_T18_members.spec.cy.js)**
        - **[Inicio de sesión (login)](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/cypress/e2e/TEST_S01_T07_login.spec.cy.js)**

    En la descripción de cada prueba de los módulos mencionados, se menciona si la prueba contiene datos aleatorios. En su descripción aparece la palabra "random". Ejemplo:
    - *invalid email to sign in, **random*** 

Para los escenarios se han considerado escenarios positivos y negativos.

## Precondiciones

* Tener instalado [NodeJS 16](https://nodejs.org/en/blog/release/v16.20.0) 
* Tener instalado [Cypress](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0)
* Instalar la versión **4.44.0** de Ghost en su máquina local siguiendo este tutorial -> [Tutorial - Ghost](https://www.coursera.org/learn/pruebas-automatizadas-software/ungradedWidget/dNjnt/pruebas-de-regresion-visual)
* Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).

### Cypress

Para ejecutar los escenarios [mencionados anteriormente](https://github.com/fanpay/tsdc_ghost/blob/main/README.md) se deben seguir los siguientes pasos:

> El aplicativo GHOST bajo pruebas debe estar en ejecución. 

1. Descargar este repositorio, identifique la carpeta `cypress/4.44.0_data_random`, ingrese y abra el archivo `cypress.config.js` en su editor de texto favorito y configure las variables que tienen por nombre `email` y `password` con los datos del usuario que tiene rol `OWNER` dentro de su aplicativo GHOST y guarde los cambios.
2. Abrir una terminal y ejecutar el comando `cypress open` .
3. Seleccionar la opción `Add proyect` .
4. En el panel que se despliega dar click para buscar en el explorador de archivos la ubicación donde descargo este repositorio y seleccionar la carpeta `cypress/4.44.0_data_random`.
5. Ahora, en el nuevo panel seleccionar la opción `E2E Testing`.
6. En el panel `Choose a browser` seleccione la opción `Chrome` y continue con la opción `Start E2E Testing in Chrome`
7. Se abrirá un navegador Chrome con el aplicativo de Cypress en la opción `Specs` bajo el folder `cypress/e2e` con un listado de 91 escenarios de pruebas. Los escenarios llevan por nombre el siguiente formato: `TEST_S{IdEscenario}_T{número de pruebas en el archivo}_{nombre funcionalidad}.spec.cy.js`, para un mayor control y facilidad de reconocimiento.
8. Seleccione el escenario a probar y automáticamente la prueba empieza a ejecutarse.
9. Para seguir con la ejecución de las pruebas faltantes, en el panel izquierdo encontrará las demás pruebas y basta con dar click y la ejecución iniciará.



## Estrategias de generación de datos aleatorios usados y uso en los escenarios de pruebas

* Estrategia pool de datos a-priori
Para las pruebas del modulo de pages y tags se utilizaron datos a priori para validar los escenarios exitosos. Para esto se dejaron escritos dichos datos en la ejecución de cada prueba a priori. En el titulo de cada prueba hecha en pages y tags se menciona si la prueba contiene datos a priori.

* Estrategia pool de datos (pseudo) aleatorio dinámico
Para la generación de pruebas aleatorias dinámicas, en pages y tags se utiliza faker para la construcción de dos tipos de escenarios. El primer escenario es hacer pruebas con datos dinamicos dentro de las fronteras del campo a evaluar, por ejemplo si el campo a evaluar es un input tipo texto cuya frontera superior es de 300 caracteres, se generan datos con faker en este rango de caracteres. El segundo escenario es similar al anterior con la diferencia de que se generan datos aleatorios fuera de la frontera, por ejemplo si el elemento a evaluar es un input tipo fecha cuya frontera inferior es la fecha actual, se generan datos aleatorios con fechas inferiores a la actual. En el titulo de cada prueba hecha en pages y tags se menciona si la prueba contiene datos a Pseudo aleatorio dinámico y ademas si la prueba genera datos dentro o fuera de las fronteras.

* Estrategia escenario aleatorio
Para la generación de pruebas aleatorias se utiliza faker en todos los campos campos, ingresando datos totalmente aleatorios según el tipo de campo sin limitar ninguna de las fronteras. En el titulo de cada prueba hecha en pages y tags se menciona si la prueba contiene datos aleatorio.
