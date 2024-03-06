Descripción del Proyecto


Este proyecto es una “Aplicación de Comercio Electrónico” de baterías y servicios de auxilio para vehículos construida con React. Los componentes tienen archivos de estilos y en algunos casos se colocan elementos de Material UI.
Esta aplicación permite a los usuarios navegar por una lista de productos obtenidos de la base de datos de Firebase/Firestore que se puede filtrar por categoría en cada botón de la barra de navegación, ver sus detalles y modificar la cantidad que se quiere, a su vez, se los puede agregar a un carrito de compras. 
La renderización del carrito de compras está condicionada a si este tiene o no artículos agregados. Una vez que accedemos a Él, ingresamos a nuestra CartPage. En ella, nuestros artículos se muestran en tarjetas. Los botones para eliminar cada artículo como para limpiar el carrito son visibles sin existe un producto, sino una imagen sugiere que realicemos un pedido. La suma del total de los precios de los artículos como de sus cantidades también es calculada. Para terminar la compra, un botón con la leyenda “Comprar” nos redirecciona a nuestra ruta de Checkout en donde el cliente deberá completar 3 campos y “Ordenar”. Esta orden queda registrada en Firebase con el nombre de colección: “order” y el Id único, que es devuelto a la página en donde el usuario está terminando la compra y se hace visible como dato de confirmación.

![vistaPrincipalAux24](https://github.com/renecitosgo/aux24/blob/main/public/Images/imagenesParaReadme/vistaPrincipalAux24.jpg)


 








Estructura del Código

 



El código se organiza en varios componentes de React:

•	El index.js es responsable de inicializar y renderizar el componente principal de la aplicación React en el DOM del navegador, configurando el enrutamiento y el contexto del carrito, y realizando algunas configuraciones adicionales para el desarrollo y la medición del rendimiento.








•	Firebase.js: La aplicación utiliza Firebase como base de datos. La configuración de Firebase se encuentra en el archivo Firebase.js que es el componente en donde conectamos nuestra aplicación con firebase y creamos la referencia a la base de datos de Firestore con la que trabajaremos.
 

•	NavBar: Este componente muestra la barra de navegación en la parte superior de la aplicación.La barra de navegación incluye un enlace al la ruta de inicio y enlaces a diferentes categorías de productos. También muestra un widget del carrito que solo se muestra si hay elementos en el mismo.

•	ItemCount:
Este componente es un contador de elementos. Permite incrementar y decrementar la cantidad de un elemento específico que se va a agregar al carrito. La cantidad no puede ser menor a 1 ni mayor al stock disponible. También tiene un botón para agregar la cantidad seleccionada del elemento al carrito.

•	ItemListContainer: Se muestra una lista de productos. En este componente se encuentra parte importante de la lógica de nuestra aplicación dado que aquí es donde se hace la llamada a Firebase para que desde Firestore se provean datos a nuestra aplicación.
Importa los módulos y paquetes necesarios, incluyendo React, useState y useEffect de React, useParams de react-router-dom, métodos para interactuar con Firestore (como getDocs, collection, query, where) desde firebase/firestore, y el objeto db que representa la instancia de Firebase. 



Tenemos también el hook useEffect para realizar la lógica de obtención de datos de Firebase. Esto se ejecuta después de cada renderizado del componente y cuando cambia categoryId. Dentro del efecto, se establece el estado loading en true, se crea una referencia a la colección de Firebase basada en categoryId (si se proporciona), se obtienen los documentos de la colección, se adaptan los datos y se establece el estado products con los productos obtenidos. También maneja errores y finalmente establece loading en false.









•	CartPage: Este componente muestra el carrito de compras del usuario.
 Si el carrito está vacío, se muestra un mensaje indicando que el carrito está vacío junto con un icono de emoji que sugiere que realices un pedido. Si hay elementos en el carrito, se muestra una lista de los elementos del carrito. Cada elemento del carrito muestra el nombre, la categoría y el precio del producto, y un botón para eliminar ese elemento del carrito. También se muestra el total del carrito. Hay un botón para ir a la página de pago (Checkout) y un botón para limpiar todo el carrito.
•	Checkout: Este componente muestra un formulario de que recolecta información de usuario y la envía a nuestra base de datos en Firebase cuando el usuario decide realizar una compra. Una vez realizada esta operación, se genera una colección nueva con el pedido del cliente y a este, le devuelve en pantalla el ID identificatorio de su pedido.
 
	
DATOS: 

La aplicación utiliza react-router-dom para manejar la navegación entre diferentes vistas (rutas).
	
Los estilos de la aplicación se manejan con archivos. scss. Cada componente tiene su propio archivo de estilos.







Contexto
La aplicación utiliza el Context API de React para manejar el estado global del carrito de compras. El contexto proporciona funciones para agregar y eliminar elementos del carrito, y para limpiar el carrito.
Conclusión:

Con nuestra aplicación React pretendemos que el usuario con necesidad de arrancar su vehículo, pueda contactarse y solicitar el servicio a domicilio además que también pueda ser socio de la plataforma para cubrir futuras eventualidades las 24hs. 




