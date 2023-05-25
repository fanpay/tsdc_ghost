# RECOMENDACIONES IMPORTANTES

Se deben adaptar las nuevas credenciales de autenticación dependiendo del usuario creado en la instalación de GHOST de su propia máquina. Esto se hace en el archivo [properties](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_validacion_datos/kraken/4.44.0_data_random/properties.json) y las variables a editar serían:

    "USERNAME": "test@test.com",
    "PASSWORD": "Testing1234567890.",

*No olvide colocar las credenciales que usted usa en su instalación de Ghost.*    

**LA VERSIÓN DE GHOST UTILIZADA PARA LAS PRUEBAS ES LA VERSIÓN 4.44.0**

## Precondiciones

* Tener instalado [NodeJS 16](https://nodejs.org/en/blog/release/v16.20.0) 
* Tener instalado [Kraken](https://thesoftwaredesignlab.github.io/Kraken/)
    - Sigue este tutorial para tener más idea sobre esta herramienta -> [Tutorial Kraken](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0)
* Instalar la versión **4.44.0** de Ghost en su máquina local siguiendo este tutorial -> [Tutorial - Ghost](https://www.coursera.org/learn/pruebas-automatizadas-software/ungradedWidget/dNjnt/pruebas-de-regresion-visual)
* Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).

## Kraken

Para ejecutar los escenarios [mencionados anteriormente](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/README.md#listado-de-escenarios-de-pruebas) se deben seguir los siguientes pasos:

> El aplicativo GHOST bajo pruebas debe estar en ejecución. 

1. Descargar [este](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_validacion_datos/kraken/4.44.0_data_random) repositorio.
2. Abrir una terminal en su máquina e ir a la carpeta `kraken`
3. Luego ir a la carpeta `4.44.0_data_random`
3. Debemos instalar el paquete "kraken-node" dentro de nuestra carpeta. Puede utilizar el comando `npm install kraken-node`
4. Si aún no tiene instalado el paquete `Appium` en su máquina, puede hacerlo con este comando `npm install -g appium`. 
5. Asegúrese de haber instalado [Android Studio](https://developer.android.com/studio) en su máquina
    - También de haber refrescado las variables de entorno del sistema
        - [MAC](https://dev.to/ravics09/solution-of-command-not-found-adb-error-29e7)
        - [Windows](https://linuxhint.com/fix-adb-not-recognize-internal-external-command-windows-10/)
6. En la terminal, ejcutar el siguiente comando
    `./node_modules/kraken-node/bin/kraken-node run`
7. Son alrededor de 3 pruebas a ejecutar.
8. Encontrará los resultados de la prueba en el directorio `reports` dentro de la carpeta `4.44.0_data_random`.


*NOTA*: Puede que al ejecutar tantas pruebas en paralelo, la versión de GHOST no soporte tantas conexiones tan seguidas y muestre el siguiente error: `Too many attempts try again in an hour`
Para esto, existen dos soluciones diferentes:
- Puede modificar algunas variables de entorno de su instalación de GHOST. Este [post](https://forum.ghost.org/t/disable-too-many-attempts-try-again-in-an-hour/4087/2) puede ayudarle a solucionarlo. 
- También puede [entrar a la base de datos de Ghost](https://codehangar.io/viewing-local-ghost-database-sqlite-db-files/) y ejecutar el siguiente comando:
    - `delete from brute;`


## Screenshots

* Kraken seguirá exportando sus screenshots por defecto en la carpeta de `reports`. Estas imágenes seguirán conservando el nombre de la imagen con un número consecutivo aleatorio basado en la fecha.


## Estrategias de generación de datos aleatorios usados y uso en los escenarios de pruebas

Total de pruebas en Kraken: **2**

### Estrategias usadas:

* **Pool de datos *pseudo-aleatorio* dinámico:**

    Para estos escenarios, se han utilizado los siguientes módulos:
    
    * **[Etiquetas (tags)](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_validacion_datos/kraken/4.44.0_data_random/features/2_CREATE_TAG.feature)**
    
    Se ha utilizado [*mockaroo*](https://mockaroo.com/schemas/530469) para generar un [grupo de datos](https://mockaroo.com/datasets/264642) en la prueba. Se prueban diferentes campos de diferentes longitudes en la descripción de un tag.


* **Escenario con datos aleatorios:**

    Para estos escenarios, se ha utilizado faker en todos los campos, ingresando datos totalmente aleatorios según el tipo de campo sin limitar fronteras para crear una publicación

    - **[Publicaciones (publications)](https://github.com/fanpay/tsdc_ghost/blob/main/semana_8/pruebas_validacion_datos/kraken/4.44.0_data_random/features/1_EDIT_PUBLICATION.feature)** 


