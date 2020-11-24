# GameLab

GameLab es una aplicación donde puedes encontrar toda la información que necesites sobre tus juegos favoritos.
Al abrir la aplicación tienes una lista de más de 100 videojuegos, sus creadores, sus DLC’s, diferentes versiones y hasta otros juegos similares de las compañías.
El api “RAWG” nos provee con toda la información que necesitamos para que el usuario obtenga. Los diferentes juegos tienen mucha información 
y el usuario puede entrar al juego para poder seguir leyendo todo lo que necesite.
También tiene urls para las compañías y para diferentes lugares donde el juego puedo ser comprado o descargado.

En esta aplicación se trata de aplicar los temas vistos en clase y las librerías que ofrecen react native.
Para poder darle funcionalidad a la aplicación se necesita una API y una Key con estas se realizan las peticiones atravez de postman, 
La Api que utilizamos para poder realizar esto se llama https: //rawg.io/apidocs. Uno de los primeros errores que tuvimos fue con otra API donde no mostraba la información luego
utilizamos https: //rawg.io/apidocs, la documentación de esta Api nos ofrece, Juegos, Géneros, Tiendas, Plataformas y muchos más. Otro error fue con el logo 
ya que este estaba .jpeg y debería de ser PNG 
y a lo largo de la aplicación nos cruzamos con varios errores 
de los cuales debido al tiempo no logramos arreglar.

Hay que descargar varias librerías como ser: react-navigation, axios, native-base, react-navigation-stack.


Se creó un backend.js con la funcionalidad de poder hacer importaciones de enviroment.js el cual contiene la apikey y apiurl.
El backend y enviroment estos trabajan juntos para poder realizar las consultas a la API, 
también se realiza una importación de axios atravez de este se recibe la información.



Funcionalidad de la Aplicación

El nombre de esta Aplicación es “GameLab”, porque en un laboratorio encontramos una variedad de cosas teniendo en común área de la salud, 
lo mismo aplica para el nombre de la aplicación ya que tienen en común los videojuegos. La aplicación está formada por tres ventanas.
Ventana de Inicio
En esta se aparece el logo, barra de búsqueda y una lista de los videojuegos
Ventana de Búsqueda
Aquí aparece una lista de la búsqueda realizada
Ventana de Información Juego
En esta parte muestra la información del juego que se selección en la ventana de inicio.


Logo de GameLab

El logo está formado por un control de una consola de videojuegos el cual está roto y en los espacios que se ve roto tomamos la decisión de agregar imágenes de varios videojuegos

Diseño de GameLab

En el diseño tratamos de hacer algo simple, en la pantalla de inicia está formado por una barra de búsqueda, 
logo de la aplicación, una lista de los videojuegos, al hacer click en un juego este lo envía a otra ventana donde aparece información sobre este 
aparece una imagen del juego.

Ejecutar la aplicacion
Para eso se necesitaran todas las librerias mencionadas antes y utilizar el comando "expo start".

