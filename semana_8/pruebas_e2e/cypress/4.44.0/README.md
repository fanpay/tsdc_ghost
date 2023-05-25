# RECOMENDACIONES IMPORTANTES

Se deben adaptar las nuevas credenciales de autenticación dependiendo del usuario creado en la instalación de GHOST de su propia máquina. Esto se hace en el archivo de [configuración](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_e2e/cypress/4.44.0/cypress.config.js) y las variables a editar serían:

    email: "user@email.com",
    password: "Qwertyuiop",

**No olvide colocar las credenciales que usted usa en su instalación de Ghost.**    

## Precondiciones

* Tener instalado Tener instalado [NodeJS 16](https://nodejs.org/en/blog/release/v16.20.0)   
* Tener instalado [Cypress](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0)
* Instalar la versión **4.44.0** de Ghost en su máquina local siguiendo este tutorial -> [Tutorial - Ghost](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#0)
* Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).


### Cypress

Para ejecutar los escenarios [mencionados anteriormente](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/README.md#listado-de-escenarios-de-pruebas) se deben seguir los siguientes pasos:

> El aplicativo GHOST bajo pruebas debe estar en ejecución. 

1. Descargar este repositorio, identifique la carpeta `4.44.0`, ingrese y abra el archivo `cypress.config.js` en su editor de texto favorito y configure las variables que tienen por nombre `email` y `password` con los datos del usuario que tiene rol `OWNER` dentro de su aplicativo GHOST y guarde los cambios.
2. Abrir una terminal y ejecutar el comando `cypress open` .
3. Seleccionar la opción `Add proyect` .
4. En el panel que se despliega dar click para buscar en el explorador de archivos la ubicación donde descargo este repositorio y seleccionar la carpeta `cypress`.
5. Ahora, en el nuevo panel seleccionar la opción `E2E Testing`.
6. En el panel `Choose a browser` seleccione la opción `Chrome` y continue con la opción `Start E2E Testing in Chrome`
7. Se abrirá un navegador Chrome con el aplicativo de Cypress en la opción `Specs` bajo el folder `cypress/e2e` con un listado de 21 escenarios de pruebas. Los escenarios llevan por nombre el siguiente formato: `E{IdEscenario}_{nombre-funcionalidad}.spec.cy.js`, para un mayor control y facilidad de reconocimiento.
8. Seleccione el escenario a probar y automáticamente la prueba empieza a ejecutarse.
9. Para seguir con la ejecución de las pruebas faltantes, en el panel izquierdo encontrará las demás pruebas y basta con dar click y la ejecución iniciará.


### Notas

* En el siguiente [enlace](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_validacion_datos/cypress/4.44.0_data_random) se encuenta la descripción de las estrategias utilizadas (pool de datos a-priori, pool de datos (pseudo) aleatorio dinámico y escenario aleatorio), para la construcción de las pruebas.
* En el siguiente [enlace](https://github.com/fanpay/tsdc_ghost/issues) se encuentran los issues de defectos por manejo de datos inválidos encontrados en la ejecución de las pruebas.



### Listado de escenarios de pruebas

| Id | Descripcion | Funcionalidad | Responsable |
|:--:|:-----------:|:-------------:|:------------:|
|[E3](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_e2e/cypress/4.44.0/cypress/e2e/E3_publicacion.spec.cy.js)| Como un usuario inicio sesión, creo una publicación, selecciono una fecha diferente al día de la creación para su publicación y la programo, al seleccionar esta opción se observa un mensaje indicando que fue programada la publicación. | 1 |Esneider Velandia |
|[E6](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_e2e/cypress/4.44.0/cypress/e2e/E6_staff.spec.cy.js)| Como un usuario inicio sesión, selecciono la sección “Staff”, invito a un usuario staff, le asigo un rol _Author_ y posteriormente remuevo la invitación. | 2 |Fabián Payan |
|[E7](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_e2e/cypress/4.44.0/cypress/e2e/E7_staff.spec.cy.js)| Como usuario quiero hacer inicio de sesión, ir al apartado de "staff", ver la información del usuario, eliminar la foto de perfil y guardar los cambios. |2| Johana Ojeda|
|[E13](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_e2e/cypress/4.44.0/cypress/e2e/E13_pages.spec.cy.js)| Como un usuario inicio sesión, creo una página, determinaré una fecha diferente al día de la creación y la visualizaré en el apartado de páginas agendadas. |3| Johana Ojeda|
|[E15](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_e2e/cypress/4.44.0/cypress/e2e/E15_tags.spec.cy.js)| Como un usuario inicio sesión, creó una etiqueta posteriormente creó un post con la etiqueta creada y publicó inmediatamente el post. Finalmente el post es publicado con la etiqueta creada. | 4 | Esneider Velandia |
|[E16](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_e2e/cypress/4.44.0/cypress/e2e/E16_tags.spec.cy.js)| Como un usuario inicio sesión, voy a ir a la sección de tags, crear un nuevo tag, agregar el símbolo “#” al inicio del nombre del tag para clasificarlo como etiqueta interna. Ir a la sección de “publicaciones”, elegir la primera publicación, editarla y asociar la etiqueta interna, devolverse a la sección de tags y seleccionar “etiquetas internas”, verificar que el número de post ya no sea 0 sino 1. |4| Johana Ojeda|
|[E19](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_e2e/cypress/4.44.0/cypress/e2e/E19_settings.spec.cy.js)| Como un usuario inicio sesión, voy a ir a la sección “PUBLICATION IDENTITY” en “General”,  y eliminaré el logo. Posterior a esto, voy a ir a la sección principal y verificar que los cambios se hicieron con éxito. |5| Fabián Payan |
|[E21](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_e2e/cypress/4.44.0/cypress/e2e/E21_settings.spec.cy.js)| Como un usuario inicio sesión, me dirijo a la sección “Labs” ubicada en General y la selecciono, ubico la opción _Night shift_ la selecciono para que cambie y me dirijo a las secciones: Posts, Pages, Tags, Staf, General, Design, Code injection, Integrations y Labs y observo que el fondo de cada sección corresponde al tema oscuro de GHost (rgb(38, 50, 56)) | 5 | Esneider Velandia |
