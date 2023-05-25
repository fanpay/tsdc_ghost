## Instrucciones para ejecutar los escenarios.

### Cypress

Para ejecutar los escenarios [mencionados anteriormente](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8#listado-de-21-escenarios-de-pruebas) se debe seguir los siguientes pasos:

> El aplicativo GHOST bajo pruebas debe estar en ejecución. 

1. Descargar este repositorio, identifique la carpeta `prubas_cypress`, ingrese y abra el archivo `cypress.config.js` en su editor de texto favorito y configure las variables que tienen por nombre `email` y `password` con los datos del usuario que tiene rol `OWNER` dentro de su aplicativo GHOST y guarde los cambios.
2. Abrir una terminal y ejecutar el comando `cypress open` .
3. Seleccionar la opción `Add proyect` .
4. En el panel que se despliega dar click para buscar en el explorador de archivos la ubicación donde descargo este repositorio y seleccionar la carpeta `pruebas_cypress`.
5. Ahora, en el nuevo panel seleccionar la opción `E2E Testing`.
6. En el panel `Choose a browser` seleccione la opción `Chrome` y continue con la opción `Start E2E Testing in Chrome`
7. Se abrirá un navegador Chrome con el aplicativo de Cypress en la opción `Specs` bajo el folder `cypress/3.41.1/e2e` con un listado de 21 escenarios de pruebas. Los escenarios llevan por nombre el siguiente formato: `E{IdEscenario}_{nombre-funcionalidad}.spec.cy.js`, para un mayor control y facilidad de reconocimiento.
8. Seleccione el escenario a probar y automáticamente la prueba empieza a ejecutarse.
9. Para seguir con la ejecución de las pruebas faltantes, en el panel izquierdo encontrará las demás pruebas y basta con dar click y la ejecución iniciará.


### Kraken

Para ejecutar los escenarios [mencionados anteriormente](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8#listado-de-21-escenarios-de-pruebas) se deben seguir los siguientes pasos:

> El aplicativo GHOST bajo pruebas debe estar en ejecución. 

1. Descargar [este](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_reconocimiento/kraken/3.41.1) repositorio.
2. Abrir una terminal en su máquina e ir a la carpeta `kraken/3.41.1`
3. Debemos instalar el paquete "kraken-node" dentro de nuestra carpeta. Puede utilizar el comando `npm install kraken-node`
4. Si aún no tiene instalado el paquete `Appium` en su máquina, puede hacerlo con este comando `npm install -g appium`. 
5. Asegúrese de haber instalado [Android Studio](https://developer.android.com/studio) en su máquina
    - También de haber refrescado las variables de entorno del sistema
        - [MAC](https://dev.to/ravics09/solution-of-command-not-found-adb-error-29e7)
        - [Windows](https://linuxhint.com/fix-adb-not-recognize-internal-external-command-windows-10/)
6. En la terminal, ejcutar el siguiente comando
    `./node_modules/kraken-node/bin/kraken-node run`
7. Son alrededor de 21 pruebas a ejecutar. Tomará su tiempo.
8. Encontrará los resultados de la prueba en el directorio `reports` dentro de la carpeta `semana_8/kraken/3.41.1`.

*NOTA*: Puede que al ejecutar tantas pruebas en paralelo, la versión de GHOST no soporte tantas conexiones tan seguidas y muestre el siguiente error: `Too many attempts try again in an hour`
Para esto, existen dos soluciones diferentes:
- Puede modificar algunas variables de entorno de su instalación de GHOST. Este [post](https://forum.ghost.org/t/disable-too-many-attempts-try-again-in-an-hour/4087/2) puede ayudarle a solucionarlo. 
- También puede [entrar a la base de datos de Ghost](https://codehangar.io/viewing-local-ghost-database-sqlite-db-files/) y ejecutar el siguiente comando:
    - `delete from brute;`

Por favor leer también las [siguientes recomendaciones adicionales](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_reconocimiento/kraken/3.41.1/README.md)
