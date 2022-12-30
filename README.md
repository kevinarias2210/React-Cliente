# Proyecto del Cliente real

En este proyecto hay que realizar una aplicacion web que sea funcional y dinamico para un cliente que es independiente, en la que
podamos mejorar su economia e implementarlo directamente al mundo de la tecnologia.

## Extructura de carpetas

En esta estructura vamos a ver el flujo de componentes en la que están enlazados entre si, porque si un componente falta, la aplicacion
no va a quedar funcional y va a agarrar errores de importaciones o el tipico TypeError.

Normalmente los componentes se guardan en la carpeta *src* y dentro de eso va la carpeta componentes y container ahí va ir toda la logica, estilos, imagenes.

*Empezamos primero con el header:*

-En esta carpeta solo va a tener el html, una imagen que es el logo y estilos.

*nav:*

-En el nav va a tener la estructura de html, estilos css, se importan unas imagenes y una libreria de "react-scroll" o linkeo scroll, que lo que hace es que permite que cuando se de el botón click, se dirija a la seccion de la pagina indicada.
La forma en que podemos utilizarlo, es llamar el componente "link" que reemplaza la etiqueta "a" y "to" por el "href", en el "to" está enlazado con un id del elemento html que va a ir y la propiedad offset permite darle la ubicacion especifica en movimiento.

*section:*

-En el primer section es igual que el header, pero a excepcion que va a contener un video del trabajo del cliente, por el momento hay una cancion para sustituirlo momentaneamente.

*aside:*

-En este aside va a contener el la estructura html, css, imagenes del trabajo del cliente en su proceso. Se importa una libreria de scroll llamada "react-swiper", que permite que ya tenga animacion, que el usuario haga scroll horizontales. El responsivo está directamente importado con el brekpoint, donde se coloca el tamaño de la pantalla cerrando entrecorchetes l, el sliders es como la prioridades que va a tener o así yo lo entendí.

-En esta carpeta tambien está el componente card, importa una libreria de bootstrap que permite que las tarjetas de cada imagen tenga su estilo. Tambien va a guardar la data de las imagenes.

*sectionContacto:*

-En esta carpeta se utiliza un hook useState, para validar los estados que están en el los formularios y en el boton de enviar a whatsapp y nequi. Primero en los formularios donde su estado futuro se va a guardar en un objeto, en la funcion de "changeText" va a guardar en array llamado form que cada vez que obtienen del target el valor y el name se va a guardar ahí, en los imputs se nombra, con el atributo "name" y se utiliza la funcion "OnChange" para que esa sea su estado presente.

-Ahora en el boton de whatsapp: Va a tener una funcion llamada "sendWhatsapp" pasando una condicional y ahi hay otra condicional de encadenamiento gracias al "?", está diciendo que si form tiene la propiedad name y texto entonces ejecuta. Adentro contiene el let del numero del cliente y la url donde va a tener los datos del form del nombre y el texto y la ventana que cada vez que se de click se abra.

-En el boton de nequi es un popUp, que en el state va a pasar como valor falso, y que en su funcion que cada vez que se de click va a ser true.

-En este componente va a tener otro componente que va a tener la libreria llamado "headlessui/react" que es la logica del popUp, entonces acá solo seguí la documentacion de npm.

*home:*

-En este componente va a contener la flecha que regresa al home, traté de llamar la carpeta en ingles, pero me mandaba para otro lado, se demoraba en renderizar y fue un lio y si me asuste, pero lo solucioné. Pero en este tiene la misma logica del nav.