# Instrucciones de uso

Este script fue realizado con [resemblejs](https://github.com/rsmbl/Resemble.js/blob/master/README.md) y realiza una comparación 1:1 de las imágenes de un escenario en particular.

 La estructura del proyecto es la siguiente:
- [ghost-3.41.1-screens](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_vrt/script_vrt/ghost-3.41.1-screens): Aquí van las imágenes del escenario en la versión 3.41.1
- [ghost-4.44.0-screens](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_vrt/script_vrt/ghost-4.44.0-screens): Aquí van las imágenes del escenario en la versión 4.44.0
- [results](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_vrt/script_vrt/results): Esta carpeta es autogenerada y contendrá las imágenes comparativas entre versiones e información relevante en formato JSON.
    - `report.html`: Archivo que contiene el reporte generado por la herramienta junto a las imágenes a comparar, imagen comparativa y resultado de cada comparación.
- [index.js](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_vrt/script_vrt/index.js): Script que se encarga de generar el formato HTML
- [config.json](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_vrt/script_vrt/config.json): Parámetros a configurar para la generación correcta del reporte.


### Precondiciones

> Tener instalado Node v14+.

> Tener instalado resemblejs -> npm install resemblejs

Asegúrate de haber cambiado las siguientes propiedades en el archivo `config.json`:

- `titleEscenario` : Es una descripción del escenario que se evaluará en el reporte. Se puede poner lo que se desee pero se recomienda poner algo alusivo al escenario a probar.
- `idEscenario`: Ese es el identificador de la imagen. Es el código del escenario con el que inicia cada imagen. Ej: E3 (1).png. Para manejar las imágenes del escenario 3, se debe tener poner el `idEscenario: E3`. 
- `numImagenes` : Es la cantidad de imágenes que hay en cada carpeta ([3.41.1](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_vrt/script_vrt/ghost-3.41.1-screens) y [4.44.0](https://github.com/fanpay/tsdc_ghost/tree/main/semana_8/pruebas_vrt/script_vrt/ghost-4.44.0-screens)) donde se almacenan las capturas de pantalla de Ghost en cada versión. Deben coincidir y ser el mismo número de imágenes para ambas versiones.

> Ejemplo de archivo `config.json`

![Screenshot 2023-05-13 at 23 16 53](https://github.com/fanpay/tsdc_ghost/assets/1879188/b016173c-98d2-464c-af9e-28ca99a50e67)

> Ejemplo de cómo organizar las imágenes

![Screenshot 2023-05-13 at 23 17 52](https://github.com/fanpay/tsdc_ghost/assets/1879188/8c533f89-bc1a-4bba-9b18-d8f079c692d6)

 
### Ejecución

1. Descargar este repositorio.
2. Abrir una termina, ir a la carpeta `script_vrt` e instalar sus fuentes con `npm install`
3. Ejecutar la instrucción `node index.js`
4. Ir a la carpeta `results` y abrir el archivo `report.html`


### Ejemplo

En esta dirección puede ver un ejemplo de lo que arroja el reporta y sus comparaciones
* https://fanpay.github.io/tsdc_ghost/report_vrt/E3/results/report.html
