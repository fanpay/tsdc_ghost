# Instrucciones de uso

Este script fue realizado con [resemblejs](https://github.com/rsmbl/Resemble.js/blob/master/README.md) y realiza una comparación 1:1 de las imágenes de un escenario en particular.

 La estructura del proyecto es la siguiente:
- ghost-3.41.1-screens: Aquí van las imágenes del escenario en la versión 3.41.1
- ghost-4.44.0-screens: Aquí van las imágenes del escenario en la versión 4.44.0
- results: Esta carpeta es autogenerada y contendrá las imágenes comparativas entre versiones e información relevante en formato JSON.
    - `report.html`: Archivo que contiene el reporte generado por la herramienta junto a las imágenes a comparar, imagen comparativa y resultado de cada comparación.
- index.js: Script que se encarga de generar el formato HTML
- config.json: Parámetros a configurar para la generación correcta del reporte.

### Precondiciones

> Tener instalado Node v14+.
 
### Ejecución

1. Descargar este repositorio.
2. Abrir una termina, ir a la carpeta `script_vrt` e instalar sus fuentes con `npm install`
3. Ejecutar la instrucción `node index.js`
4. Ir a la carpeta `results` y abrir el archivo `report.html`

### Ejemplo

En esta dirección puede ver un ejemplo de lo que arroja el reporta y sus comparaciones
* https://fanpay.github.io/tsdc_ghost/report_vrt/E3/results/report.html
