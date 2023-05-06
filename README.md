# GHOST v3.41.1
Repositorio creado para reportar incidencias del proyecto GHOST para The Software Design Company (TSDC)

* Versión liberada: https://github.com/TryGhost/Ghost/releases/tag/3.41.1


## Instrucciones de instalación

* https://ghost.org/docs/install/

## Wiki

Visita nuestra wiki [aquí](https://github.com/fanpay/tsdc_ghost/wiki/Resultados-de-pruebas-autom%C3%A1ticas)

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

| Id | Descripcion | Responsable |
|:--:|:-----------:|:------------:|
|E3| Crear una publicación, determinar una fecha diferente al día de la creación para su publicación y validar que fue programada la publicación. | Esneider Velandia |
|E6| Ir a la sección “Staff” invitar a un usuario, asignar un rol y posteriormente remover la invitación. | Esneider Velandia |
|E9| Hacer inicio de sesión, ir al apartado de staff, cambiar el nombre del usuario autenticado, cerrar sesión, iniciar sesión nuevamente y verificar en la pantalla principal que el nombre cambie satisfactoriamente. | Esneider Velandia |
|E12| Crear una página y publicarla en el mismo momento, visualizarla en la lista, eliminarla y comprobar que no aparece en la lista de páginas. | Esneider Velandia |
|E15| Crear una etiqueta, crear un post con la etiqueta creada y publicar el post. El post es publicado con la etiqueta creada. | Esneider Velandia |
|E18| Ir a la sección “General”, seleccionar la opción de “Make this site private” para hacer privado el sitio y luego nuevamente dejarlo publico.  | Esneider Velandia |
|E21| En la sección “Labs” ubicada en General, cambiar la opción Night shift y verificar que en las secciones: Posts, Pages, Tags, Staf, General, Design, Code injection, Integrations y Labs el fondo corresponde al tema oscuro de GHost (rgb(38, 50, 56)) | Esneider Velandia |

## Colaboradores

* Johana Constanza Ojeda Ávila - 202317664
* Fabián Andrés Payan Meneses - 202314733
* Esneider Velandia Gonzalez - 201215364
