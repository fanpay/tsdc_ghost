# RECOMENDACIONES IMPORTANTES

Se deben adaptar las nuevas credenciales de autenticación dependiendo del usuario creado en la instalación de GHOST de su propia máquina. Esto se hace en el archivo [properties](https://github.com/fanpay/tsdc_ghost/blob/main/pruebas_kraken/properties.json) y las variables a editar serían:

    "USERNAME": "f.payan@uniandes.edu.co",
    "PASSWORD": "Testing123456789.",

*No olvide colocar las credenciales que usted usa en su instalación de Ghost.*    

## Precondiciones

* Tener instalado [NodeJS 12](https://nodejs.org/en/blog/release/v12.22.12) 
* Tener instalado [Kraken](https://thesoftwaredesignlab.github.io/Kraken/)
    - Sigue este tutorial para tener más idea sobre esta herramienta -> [Tutorial Kraken](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0)
* Instalar la versión **3.41.1** de Ghost en su máquina local siguiendo este tutorial -> [Tutorial - Ghost](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#0)
* Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).

### Kraken

Para ejecutar los escenarios [mencionados anteriormente](https://github.com/fanpay/tsdc_ghost/blob/main/README.md) se deben seguir los siguientes pasos:

> El aplicativo GHOST bajo pruebas debe estar en ejecución. 

1. Descargar [este](https://github.com/fanpay/tsdc_ghost) repositorio.
2. Abrir una terminal en su máquina e ir a la carpeta `pruebas_kraken`
3. Debemos instalar el paquete "kraken-node" dentro de nuestra carpeta. Puede utilizar el comando `npm install kraken-node`
4. Si aún no tiene instalado el paquete `Appium` en su máquina, puede hacerlo con este comando `npm install -g appium`. 
5. Asegúrese de haber instalado [Android Studio](https://developer.android.com/studio) en su máquina
    - También de haber refrescado las variables de entorno del sistema
        - [MAC](https://dev.to/ravics09/solution-of-command-not-found-adb-error-29e7)
        - [Windows](https://linuxhint.com/fix-adb-not-recognize-internal-external-command-windows-10/)
6. En la terminal, ejcutar el siguiente comando
    `./node_modules/kraken-node/bin/kraken-node run`
7. Son alrededor de 21 pruebas a ejecutar. Tomará su tiempo.
8. Encontrará los resultados de la prueba en el directorio `reports` dentro de la carpeta `pruebas-kraken`.

*NOTA*: Puede que al ejecutar tantas pruebas en paralelo, la versión de GHOST no soporte tantas conexiones tan seguidas y muestre el siguiente error: `Too many attempts try again in an hour`
Para esto, existen dos soluciones diferentes:
- Puede modificar algunas variables de entorno de su instalación de GHOST. Este [post](https://forum.ghost.org/t/disable-too-many-attempts-try-again-in-an-hour/4087/2) puede ayudarle a solucionarlo. 
- También puede [entrar a la base de datos de Ghost](https://codehangar.io/viewing-local-ghost-database-sqlite-db-files/) y ejecutar el siguiente comando:
    - `delete from brute;`


### Evidencias
Se adjuntan evidencias de ejecución
- Archivo [zip](https://uniandes-my.sharepoint.com/:u:/g/personal/f_payan_uniandes_edu_co/ES7xQOLmYS1Pmu-QpKqBWIUBDvZKQeAAtL0tdUn5foygSg?e=IrPiTS)
- [Folder completo](https://uniandes-my.sharepoint.com/:f:/g/personal/f_payan_uniandes_edu_co/El5wNaHx8sJNrEdHqYiCslUBhJ6NzVXRiGUImz4spQVt-A?e=GFWgg5)
