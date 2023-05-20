# GHOST v3.41.1
Repositorio creado para reportar incidencias del proyecto GHOST para The Software Design Company (TSDC)

# Vídeo Semana 6
[Enlace al video](https://youtu.be/dtIm2GfxmG4)

## Precondiciones

* Tener instalado [NodeJS 12](https://nodejs.org/en/blog/release/v12.22.12)
* Tener instalado [Cypress](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0)
* Tener instalado [Kraken](https://thesoftwaredesignlab.github.io/Kraken/)
    - Sigue este tutorial para tener más idea sobre esta herramienta -> [Tutorial Kraken](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0)
* Instalar la versión **3.41.1** de Ghost en su máquina local siguiendo este tutorial -> [Tutorial - Ghost](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#0)
    - Acá podrá encontrar más información oficial sobre las instrucciones de instalación: https://ghost.org/docs/install/
    - Versión liberada: https://github.com/TryGhost/Ghost/releases/tag/3.41.1
* Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).

## Wiki

Visita nuestra wiki [aquí](https://github.com/fanpay/tsdc_ghost/wiki/Resultados-de-pruebas-autom%C3%A1ticas)

## Nuestro contenido:

* [Resultados de pruebas automaticas usando Monkeys y Rippers](https://github.com/fanpay/tsdc_ghost/wiki/Resultados-de-pruebas-autom%C3%A1ticas)
* [Pros y contras de herramientas usadas para pruebas E2E](https://github.com/fanpay/tsdc_ghost/wiki/Cypress-Vs-Kraken)
* [Pros y contras de herramientas usadas para pruebas VRT](https://github.com/fanpay/tsdc_ghost/wiki/Pros-y-contras-de-herramientas-usadas-para-pruebas-VRT)
* [Script para generar pruebas de regresión visual VRT usando ResembleJS](https://github.com/fanpay/tsdc_ghost/tree/main/script_vrt)
    * [Ejemplo del reporte generado](https://fanpay.github.io/tsdc_ghost/report_vrt/E3/results/report.html)
* [Sistema de incidencias](https://github.com/fanpay/tsdc_ghost/issues)
* [Video explicativo sobre nueva funcionalidad de pantallazos para Cypress Y Kraken](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
* [Video explicativo sobre toma de pantallazos, ejecución de suite de pruebas sobre versión de Ghost 4.44.0 y pruebas de regresión visual(Actividad Semana 6) ](https://youtu.be/dtIm2GfxmG4)
* Utilización de técnicas para la generación de datos en GHOST **4.44.0**
    *  [Cypress](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/README.md#estrategias-de-generaci%C3%B3n-de-datos-aleatorios-usados-y-uso-en-los-escenarios-de-pruebas)
    *  [Kraken](https://github.com/fanpay/tsdc_ghost/blob/main/kraken/4.44.0_data_random/README.md#estrategias-de-generaci%C3%B3n-de-datos-aleatorios-usados-y-uso-en-los-escenarios-de-pruebas)

## Listado de 5 funcionalidades bajo pruebas

### 1.	Crear publicaciones

La herramienta cuenta con un potente editor visual con opciones de formato familiares como las herramientas de edición de archivos (word), así como la capacidad de agregar contenido dinámico.Con esta funcionalidad se pueden redactar publicaciones y hacerlas visibles en el blog. Permite adjuntar imágenes, enlazar vínculos de otros sitios web, anclar videos e incluso insertar fragmentos de código. El visor de edición cuenta con un menú de configuración de publicación, cuando ya se haya finalizado la edición de la publicación y tenga el contenido que se desea, se realiza la acción de publicar y hacer visible el trabajo realizado, sin embargo, la herramienta nos permite optimizar y distribuir el contenido de manera efectiva. El menú de configuración permite realizar la publicación de forma inmediata, que es la forma tradicional pero, también cuenta con la opción de programar la publicación y escoger fecha y hora para realizar la acción. 

### 2. Administracion de Staff

Ghost permite crear contenido del sitio en colaboración de otros usuarios, por esta razón, ofrece la posibilidad de administrar usuarios en nuestro sitio, permite la creación de usuarios únicamente con el correo electrónico para hacer la invitación y la asignación del rol, por ahora se tiene la posibilidad de los siguientes roles: administrador, autor, editor y colaborador.  Cada usuario después de ser creado tiene un token y desde la vista del administrador se podrá gestionar su información y su eliminación de usuario si se desea.

### 3. Crear Paginas
Ghost permite crear contenido estático en forma de páginas web, además de los típicos artículos o entradas de blog llamados "páginas". Las páginas son diferentes de las publicaciones regulares, ya que no tienen una estructura de tiempo ni se muestran en la lista de publicaciones principales. Las páginas se utilizan para crear contenido que no necesita actualizarse con frecuencia, como páginas de inicio, páginas de contacto, páginas de acerca de, políticas y términos de servicio, entre otros. Estas páginas pueden contener texto, imágenes, videos y otros elementos multimedia, al igual que las publicaciones regulares.

Las páginas son creadas utilizando el editor de contenido integrado en la interfaz de administración. Se les puede dar un título, agregar contenido utilizando un editor de texto enriquecido, y aplicar formato y estilos mediante opciones de formato, inserción de imágenes, enlaces y más. Además, también se puede utilizar HTML y CSS personalizado para lograr diseños más avanzados y personalizados en las páginas. Estas pueden ser enlazadas desde el menú de navegación del sitio web y pueden ser accesibles directamente a través de su URL. También puedes organizar las páginas en una estructura de navegación jerárquica utilizando subpáginas o "páginas hijas".

### 4. Crear Tags
Ghost tiene una funcionalidad llamada "Tags" que permite organizar y clasificar el contenido en categorías temáticas, lo que facilita la búsqueda, la navegación y el descubrimiento de contenido relacionado. Se pueden asignar etiquetas a las publicaciones y personalizar la forma en que se muestran en el sitio web. Los tags son una herramienta útil para mejorar la estructura y accesibilidad del contenido.

### 5. Administracion de Ajustes personalizados
En Ghost, la funcionalidad de "Settings" (configuración) se utiliza para administrar y personalizar la configuración del sitio web o blog. Proporciona una amplia gama de opciones y ajustes que te permiten controlar diversos aspectos del sitio y adaptarlo a necesidades y preferencias específicas.

Aquí hay algunas características clave de la funcionalidad de "Settings" en GHOST:
- Información general del sitio: Se puede establecer el título y la descripción del sitio web, así como la dirección URL principal. Estos detalles ayudan a definir la identidad y el propósito del sitio.
- Personalización del tema: Ghost ofrece una selección de temas y plantillas prediseñadas que se pueden aplicar al sitio web. Se puede personalizar el aspecto y la sensación del sitio eligiendo colores, fuentes y otras opciones de diseño.
- Integraciones y servicios: Se pueden configurar integraciones con servicios externos, como servicios de análisis web, herramientas de marketing por correo electrónico o plataformas de redes sociales, para conectar el sitio web con otras herramientas y ampliar su funcionalidad.
- Labs: Ghost permite habilitar y probar características experimentales y en desarrollo. Estas características pueden estar en etapas tempranas de desarrollo y pueden no ser completamente estables o listas para su uso en entornos de producción. Tambiénm brinda la oportunidad de explorar nuevas funcionalidades y proporcionar retroalimentación a los desarrolladores de Ghost. Se pueden activar y desactivar estas características experimentales según las necesidades y deseos.

Si hasta ahora se encuentra realizando sus primeros pasos en su sitio o no tiene una publicación que no quiere que el mundo vea todavía porque no está lista para su lanzamiento, puede ocultar su sitio detrás de una frase de contraseña compartida básica. Ghost genera aleatoriamente una breve frase de contraseña que puede compartir con cualquier persona que necesite acceso al sitio mientras trabaja en él. Mientras esta configuración esté habilitada, todas las funciones de optimización del motor de búsqueda se desactivarán para ayudar a mantener su sitio bajo el radar.

## Precondiciones a tener en cuenta con algunos escenarios de prueba:


- E1: (Sólo para Cypress) Para este escenario se tiene creado previamente un post llamado "Escenario 1".
- E7: Para este esceneario debe estar cargada previamente una foto de perfil del usuario. En la sección de Staff > Active Users > Owner > profile picture.
- E10: Para este escenario, se tiene previamente creado una página con el nombre "pagina cambiar foto" y también en la sección de "Page Settings" se carga una foto antes de correr la prueba.
- E16: Para este escenario, se tiene previamente creado un post con el nombre "Post tag interno" 
- E19: Para este escenario es necesario tener una imagen cargada en la sección de Publication Logo ubicada en "General Settings"


## Listado de 21 escenarios de pruebas

| Id | Descripcion | Funcionalidad | Responsable |
|:--:|:-----------:|:-------------:|:------------:|
|E1| Como usuario inicio sesión, accedo a una publicación previamente creada, la edito de tal forma que los cambios se guarden correctamente y se pueda visualizar en la sección de posts. |1| Johana Ojeda|
|E2| Como un usuario inicio sesión, creo una publicación, luego visualizo la lista de publicaciones, busco la que creé y elimino el registro. Vuelvo a comprobar la lista de publicaciones y la publicación creada ya no debe estar. |1| Fabián Payan|
|E3| Como un usuario inicio sesión, creo una publicación, selecciono una fecha diferente al día de la creación para su publicación y la programo, al seleccionar esta opción se observa un mensaje indicando que fue programada la publicación. | 1 |Esneider Velandia |
|E4| Como usuario quiero crear un post y asignar un rol de editor a alguna persona asociada a Ghost. |1| Johana Ojeda|
|E5| Como un usuario inicio sesión, creo una publicación básica pero no la publico, la dejo en estado "Draft" o "Borrador". Luego visualizo la lista de publicaciones, busco la publicación que estaba editando y verifico que su estado sea "Draft" o "Borrador".  |1| Fabián Payan|
|E6| Como un usuario inicio sesión, selecciono la sección “Staff”, invito a un usuario staff, le asigo un rol _Author_ y posteriormente remuevo la invitación. | 2 |Esneider Velandia |
|E7| Como usuario quiero hacer inicio de sesión, ir al apartado de "staff", ver la información del usuario, eliminar la foto de perfil y guardar los cambios. |2| Johana Ojeda|
|E8| Como un usuario inicio sesión, voy a la sección de "Staff", selecciono mi usuario, busco el campo de contraseña, lleno los campos solicitados, cierro sesión, inicio nuevamente sesión con la nueva contraseña y puedo consultar la lista de publicaciones.  |2| Fabián Payan|
|E9| Como un usuario inicio sesión, selecciono la sección “Staff”, cambio el nombre del usuario autenticado, cierro la sesión, inicio la sesión nuevamente y en la pantalla principal debe aparecer el nombre satisfactoriamente. | 2 |Esneider Velandia |
|E10| Como usuario inicio sesión, voy a la sección de "Pages", selecciono la primera página, voy a la sección de "post settings" y remuevo la imagen asociada a la página. Guardo los cambios, vuelvo a la sección de "Páginas" y reviso que si se haya quitado la foto.  |2| Johana Ojeda|
|E11| Como un usuario inicio sesión, voy a la sección de "Pages", selecciono la primera página, cambio el título de la página, guardo los cambios, cierro sesión, inicio nuevamente sesión, consulto sección de páginas y la primera página debería tener el título que fue modificado.  |3| Fabián Payan|
|E12| Como un usuario inicio sesión, selecciono la opción _Pages_, creo una página y la publicó en el mismo momento, luego la visualizo en la lista de publicaciones, la selecciono para eliminarla y al regresar al listado no aparece en la lista de páginas. | 3 | Esneider Velandia |
|E13| Como un usuario inicio sesión, creo una página, determinaré una fecha diferente al día de la creación y la visualizaré en el apartado de páginas agendadas. |3| Johana Ojeda|
|E14| Como un usuario inicio sesión, voy a la sección de "Pages", crearé una página que incluya un título y una descripción, la guardo como borrador, cerrar sesión, volver a iniciar sesión, ir a la sección de "Pages", verificar que la publicación creada tenga el estado de borrador o "draft".  |3| Fabián Payan|
|E15| Como un usuario inicio sesión, creó una etiqueta posteriormente creó un post con la etiqueta creada y publicó inmediatamente el post. Finalmente el post es publicado con la etiqueta creada. | 4 | Esneider Velandia |
|E16| Como un usuario inicio sesión, voy a ir a la sección de tags, crear un nuevo tag, agregar el símbolo “#” al inicio del nombre del tag para clasificarlo como etiqueta interna. Ir a la sección de “publicaciones”, elegir la primera publicación, editarla y asociar la etiqueta interna, devolverse a la sección de tags y seleccionar “etiquetas internas”, verificar que el número de post ya no sea 0 sino 1. |4| Johana Ojeda|
|E17| Como un usuario inicio sesión, voy a la sección de "Settings" y seleccionar la opción "General", expandir la opción de “Title & description”, cambiar el título y la descripción, guardar cambios, ir a la sección "View site" y verificar que el título fue actualizado. Luego ir al sitio principal y verificar que la descripción se actualizó. Por último, revertir los cambios y cerrar sesión.  |5| Fabián Payan|
|E18| Como un usuario inicio sesión, me dirijo a la sección “General”, seleccionó la opción nombrada como _“Make this site private”_ para hacer privado el sitio, verifico el token generado como clave, finalmente dejao publico nuevamente el sitio. | 5 | Esneider Velandia |
|E19| Como un usuario inicio sesión, voy a ir a la sección “PUBLICATION IDENTITY” en “General”,  y eliminaré el logo. Posterior a esto, voy a ir a la sección principal y verificar que los cambios se hicieron con éxito. |5| Johana Ojeda|
|E20| Como un usuario inicio sesión, voy a la sección de Design, ubicarse en la parte de "Navigation", dejar vacío el primer label y guardar cambios. Debe aparecer un mensaje de error en rojo diciendo "You must specify a label" y el botón de guardado debe estar de color rojo y tener un texto que diga "Retry". Luego ir a la página principal, verificar el menú principal y no debe existir la opción que se intentó crear. Por último, se cierra la sesión. (escenario negativo). |5| Fabián Payan|
|E21| Como un usuario inicio sesión, me dirijo a la sección “Labs” ubicada en General y la selecciono, ubico la opción _Night shift_ la selecciono para que cambie y me dirijo a las secciones: Posts, Pages, Tags, Staf, General, Design, Code injection, Integrations y Labs y observo que el fondo de cada sección corresponde al tema oscuro de GHost (rgb(38, 50, 56)) | 5 | Esneider Velandia |

## Instrucciones para ejecutar los escenarios.

### Cypress

Para ejecutar los escenarios mencionados anteriormente se debe seguir los siguientes pasos:

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


[Enlace al proyecto Cypress](https://github.com/fanpay/tsdc_ghost/tree/main/cypress/3.41.1)

[Enlace para utilización de técnicas para la generación de datos en CYPRESS](https://github.com/fanpay/tsdc_ghost/blob/main/cypress/4.44.0_data_random/README.md#estrategias-de-generaci%C3%B3n-de-datos-aleatorios-usados-y-uso-en-los-escenarios-de-pruebas)

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

Por favor leer también las [siguientes recomendaciones adicionales](https://github.com/fanpay/tsdc_ghost/blob/main/pruebas_kraken/README.md)

### Screenshots Kraken

* Después de cada ejecución se creará una carpeta llamada "screenshots" y dentro de esta, una carpeta con el nombre del escenario. Dentro de esta se generarán las capturas de pantalla por cada paso de la prueba.

    Ejemplo para el escenario "E12":
    - screenshots
        - E12_paginas
            - E12 (1).png

* Kraken seguirá exportando sus screenshots por defecto en la carpeta de `reports`. Estas imágenes seguirán conservando el nombre de la imagen con un número consecutivo aleatorio basado en la fecha.

[Enlace al proyecto Kraken](https://github.com/fanpay/tsdc_ghost/tree/main/kraken/3.41.1)

[Enlace para utilización de técnicas para la generación de datos en KRAKEN](https://github.com/fanpay/tsdc_ghost/blob/main/kraken/4.44.0_data_random/README.md#estrategias-de-generaci%C3%B3n-de-datos-aleatorios-usados-y-uso-en-los-escenarios-de-pruebas)


### Evidencias Kraken
Se adjuntan evidencias de ejecución
- Archivo [zip](https://uniandes-my.sharepoint.com/:u:/g/personal/f_payan_uniandes_edu_co/ES7xQOLmYS1Pmu-QpKqBWIUBDvZKQeAAtL0tdUn5foygSg?e=IrPiTS)
- [Folder completo](https://uniandes-my.sharepoint.com/:f:/g/personal/f_payan_uniandes_edu_co/El5wNaHx8sJNrEdHqYiCslUBhJ6NzVXRiGUImz4spQVt-A?e=GFWgg5)

## Colaboradores

* Johana Constanza Ojeda Ávila - 202317664
* Fabián Andrés Payan Meneses - 202314733
* Esneider Velandia Gonzalez - 201215364
