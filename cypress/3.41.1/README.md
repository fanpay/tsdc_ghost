# RECOMENDACIONES IMPORTANTES

Se deben adaptar las nuevas credenciales de autenticación dependiendo del usuario creado en la instalación de GHOST de su propia máquina. Esto se hace en el archivo de [configuración](https://github.com/fanpay/tsdc_ghost/blob/main/prubas_cypress/cypress.config.js) y las variables a editar serían:

    email: "user@email.com",
    password: "Qwertyuiop",

**No olvide colocar las credenciales que usted usa en su instalación de Ghost.**    

## Precondiciones

* Tener instalado [NodeJS 12](https://nodejs.org/en/blog/release/v12.22.12) 
* Tener instalado [Cypress](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0)
    - Sigue este tutorial para tener más idea sobre esta herramienta -> [Tutorial Kraken](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0)
* Instalar la versión **3.41.1** de Ghost en su máquina local siguiendo este tutorial -> [Tutorial - Ghost](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#0)
* Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).


### Cypress

Para ejecutar los escenarios [mencionados anteriormente](https://github.com/fanpay/tsdc_ghost/blob/main/README.md) se deben seguir los siguientes pasos:

> El aplicativo GHOST bajo pruebas debe estar en ejecución. 

1. Descargar este repositorio, identifique la carpeta `prubas_cypress`, ingrese y abra el archivo `cypress.config.js` en su editor de texto favorito y configure las variables que tienen por nombre `email` y `password` con los datos del usuario que tiene rol `OWNER` dentro de su aplicativo GHOST y guarde los cambios.
2. Abrir una terminal y ejecutar el comando `cypress open` .
3. Seleccionar la opción `Add proyect` .
4. En el panel que se despliega dar click para buscar en el explorador de archivos la ubicación donde descargo este repositorio y seleccionar la carpeta `pruebas_cypress`.
5. Ahora, en el nuevo panel seleccionar la opción `E2E Testing`.
6. En el panel `Choose a browser` seleccione la opción `Chrome` y continue con la opción `Start E2E Testing in Chrome`
7. Se abrirá un navegador Chrome con el aplicativo de Cypress en la opción `Specs` bajo el folder `cypress/e2e` con un listado de 21 escenarios de pruebas. Los escenarios llevan por nombre el siguiente formato: `E{IdEscenario}_{nombre-funcionalidad}.spec.cy.js`, para un mayor control y facilidad de reconocimiento.
8. Seleccione el escenario a probar y automáticamente la prueba empieza a ejecutarse.
9. Para seguir con la ejecución de las pruebas faltantes, en el panel izquierdo encontrará las demás pruebas y basta con dar click y la ejecución iniciará.

