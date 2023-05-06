# GHOST v3.41.1
Repositorio creado para reportar incidencias del proyecto GHOST para The Software Design Company (TSDC)

* Versión liberada: https://github.com/TryGhost/Ghost/releases/tag/3.41.1


## Instrucciones de instalación

* https://ghost.org/docs/install/

## Wiki

Visita nuestra wiki [aquí](https://github.com/fanpay/tsdc_ghost/wiki/Resultados-de-pruebas-autom%C3%A1ticas)

## Nuestro contenido:

* [Resultados de pruebas automaticas usando Monkeys y Rippers](https://github.com/fanpay/tsdc_ghost/wiki/Resultados-de-pruebas-autom%C3%A1ticas)
* [Pros y contras de herramientas usadas para pruebas E2E](https://github.com/fanpay/tsdc_ghost/wiki/Cypress-Vs-Kraken)


## Listado de 5 funcionalidades bajo pruebas

### 1.	Crear publicaciones

La herramienta cuenta con un potente editor visual con opciones de formato familiares como las herramientas de edición de archivos (word), así como la capacidad de agregar contenido dinámico.Con esta funcionalidad se pueden redactar publicaciones y hacerlas visibles en el blog. Permite adjuntar imágenes, enlazar vínculos de otros sitios web, anclar videos e incluso insertar fragmentos de código. El visor de edición cuenta con un menú de configuración de publicación, cuando ya se haya finalizado la edición de la publicación y tenga el contenido que se desea, se realiza la acción de publicar y hacer visible el trabajo realizado, sin embargo, la herramienta nos permite optimizar y distribuir el contenido de manera efectiva. El menú de configuración permite realizar la publicación de forma inmediata, que es la forma tradicional pero, también cuenta con la opción de programar la publicación y escoger fecha y hora para realizar la acción. 

### 2. Administracion de Staff

Ghost permite crear contenido del sitio en colaboración de otros usuarios, por esta razón, ofrece la posibilidad de administrar usuarios en nuestro sitio, permite la creación de usuarios únicamente con el correo electrónico para hacer la invitación y la asignación del rol, por ahora se tiene la posibilidad de los siguientes roles: administrador, autor, editor y colaborador.  Cada usuario después de ser creado tiene un token y desde la vista del administrador se podrá gestionar su información y su eliminación de usuario si se desea.

### 3. Crear Paginas
//TODO
### 4. Crear Tags
//TODO

### 5. Administracion de Ajustes personalizados
//TODO ... completar

Si hasta ahora se encuentra realizando sus primeros pasos en su sitio o no tiene una publicación que no quiere que el mundo vea todavía porque no está lista para su lanzamiento, puede ocultar su sitio detrás de una frase de contraseña compartida básica. Ghost genera aleatoriamente una breve frase de contraseña que puede compartir con cualquier persona que necesite acceso al sitio mientras trabaja en él. Mientras esta configuración esté habilitada, todas las funciones de optimización del motor de búsqueda se desactivarán para ayudar a mantener su sitio bajo el radar.

## Listado de 21 escenarios de pruebas

| Id | Descripcion | Funcionalidad | Responsable |
|:--:|:-----------:|:-------------:|:------------:|
|E3| Como un usuario inicio sesión, creo una publicación, selecciono una fecha diferente al día de la creación para su publicación y la programo, al seleccionar esta opción se observa un mensaje indicando que fue programada la publicación. | 1 |Esneider Velandia |
|E6| Como un usuario inicio sesión, selecciono la sección “Staff”, invito a un usuario staff, le asigo un rol _Author_ y posteriormente remuevo la invitación. | 2 |Esneider Velandia |
|E9| Como un usuario inicio sesión, selecciono la sección “Staff”, cambio el nombre del usuario autenticado, cierro la sesión, inicio la sesión nuevamente y en la pantalla principal debe aparecer el nombre satisfactoriamente. | 2 |Esneider Velandia |
|E12| Como un usuario inicio sesión, selecciono la opción _Pages_, creo una página y la publicó en el mismo momento, luego la visualizo en la lista de publicaciones, la selecciono para eliminarla y al regresar al listado no aparece en la lista de páginas. | 3 | Esneider Velandia |
|E15| Como un usuario inicio sesión, creó una etiqueta posteriormente creó un post con la etiqueta creada y publicó inmediatamente el post. Finalmente el post es publicado con la etiqueta creada. | 4 | Esneider Velandia |
|E18| Como un usuario inicio sesión, me dirijo a la sección “General”, seleccionó la opción nombrada como _“Make this site private”_ para hacer privado el sitio, verifico el token generado como clave, finalmente dejao publico nuevamente el sitio. | 5 | Esneider Velandia |
|E21| Como un usuario inicio sesión, me dirijo a la sección “Labs” ubicada en General y la selecciono, ubico la opción _Night shift_ la selecciono para que cambie y me dirijo a las secciones: Posts, Pages, Tags, Staf, General, Design, Code injection, Integrations y Labs y observo que el fondo de cada sección corresponde al tema oscuro de GHost (rgb(38, 50, 56)) | 5 | Esneider Velandia |

## Colaboradores

* Johana Constanza Ojeda Ávila - 202317664
* Fabián Andrés Payan Meneses - 202314733
* Esneider Velandia Gonzalez - 201215364
