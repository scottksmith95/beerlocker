Código fuente de los tutoriales de 'Beer Locker'

####beerlocker-1

Con una creciente colección de cerveza, estoy en extrema necesidad de una forma para almacenar y rastrear mi cerveza.  ¿Qué mejor manera de hacerlo que  crear una aplicación donde puedo añadir, quitar, actualizar y ver mi colección de cerveza. Como cualquier desarrollador motivado, quiero a mis amigos para poder crear sus propios casilleros y controlar quién tiene acceso a la mía.

En esta serie de varias entregas ire creando una API RESTful usando Node ,Express, Mongoose para interactuar con MongoDB, Passport para la autenticación, OAuth2orize para soportar OAuth, y explorar las mejores prácticas y herramientas.

Cuando terminemos, debemos tener un API que permite a los usuarios autenticarse, realizar las operaciones CRUD, autorizar otras aplicaciones a través de OAuth para acceder a la API, tener una sólida comprensión de las mejores prácticas y herramientas y más importante de todo, un lugar para almacenar nuestra cerveza!

[Beer Locker: Building a RESTful API With Node](http://scottksmith.com/blog/2014/05/02/building-restful-apis-with-node/)

####beerlocker-2

En nuestro anterior artículo nos quedamos con una aplicación básica de Node capaz de aceptar las solicitudes HTTP y que responde cierto JSON estático.

En esta parte se ahonda un poco más y se aprende a implementar las operaciones CRUD en nuestro casillero de cervezas. Al final de este artículo habrás aprendido a conectarte a MongoDB, utilizando Mongoose para modelado de objetos y habrás implementado los endpoints GET, PUT, POST y DELETE .

[Beer Locker: Building a RESTful API With Node - CRUD](http://scottksmith.com/blog/2014/05/05/beer-locker-building-a-restful-api-with-node-crud/)

####beerlocker-3.1

Punto de partida para el tercer artículo sobre la implementación de Passport. Esto es para limpiar el código un poco con relación a nuestros anteriores  tutoriales.

####beerlocker-3.2

En nuestro anterior artículo acabamos con un API bastante funcional capaz deagregar, quitar, actualizar y ver cerveza.

En esta parte se zambullirá en la creación de cuentas de usuario y autenticación mediante Passport. Al final de este artículo habrán aprendido cómo agregar cuentas de usuario, implementar autenticación y control de acceso a los casilleros de cerveza.


[Beer Locker: Building a RESTful API With Node - Passport](http://scottksmith.com/blog/2014/05/29/beer-locker-building-a-restful-api-with-node-passport/)

###beerlocker-4

En nuestro anterior artículo acabamos con un API funcional capaz de crear cuentas de usuario, bloquear endpoints de la API y permitiendo sólo el acceso al casillero de cerveza del usuario.

En esta parte se zambullirá en crear un servidor que usa OAuth2 y permite el acceso a los endpoints de API solo a usuarios autorizados o aplicaciones autorizadas. Esto lo haremos mediante la integración OAuth2orize en nuestra aplicación.

[Beer Locker: Building a RESTful API With Node - OAuth2 Server](http://scottksmith.com/blog/2014/07/02/beer-locker-building-a-restful-api-with-node-oauth2-server/)

###beerlocker-5

En nuestro artículo anterior terminamos con un API funcional capaz de crear cuentas de usuario, bloquear endpoints de la API, solamente permitiendo el acceso al casillero de cerveza propiedad del usuario y un servidor que usa OAuth2.

Muchos lectores han hecho preguntas acerca de cómo usar las diferentes ‘authentication strategies ‘ (estrategias de autenticación), así que voy a seguir esta serie y profundizar en muchas de esas estrategias.

Este artículo explora el uso de ‘Digest authentication’ (autenticación implícita) en vez de la básica.

[Beer Locker: Building a RESTful API with Node - Digest](http://scottksmith.com/blog/2014/09/14/beer-locker-building-a-restful-api-with-node-digest/)

####beerlocker-6.1

Punto de partida para el sexto artículo donde utilizamos ‘username’ y ‘password’ para la autenticación. Esto es para limpiar un poco el código de nuestro tutorial anterior.

####beerlocker-6.2

En nuestro artículo anterior exploramos la implementación de la ‘Digest authentication’  (autenticación implícita) en lugar de la básica. En este artículo se profundizará  en la implementación de autenticación de usuario y contraseña mediante el módulo local del Passport (passport-local module).

[Beer Locker: Building a RESTful API With Node - Username & Password](http://scottksmith.com/blog/2014/09/18/beer-locker-building-a-restful-api-with-node-username-and-password/)
