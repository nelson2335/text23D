# Dibujar en processing la consulta API Wordpress

> Este código recupera datos dinámicamente de una API externa y los utiliza para crear una experiencia visual.

JavaScript diseñado para ejecutarse en el entorno p5.js, recupera la cantidad de publicaciones de un sitio gratuito en WordPress.com y usa este recuento para dibujar círculos en un lienzo.

El código comienza declarando varias variables: posiciones para almacenar las coordenadas de los círculos, `postCount` para almacenar el número de publicaciones, constantes y diámetro de lo círculos. La función de configuración inicializa el lienzo, establece el color de fondo y establece la velocidad de fotogramas.

La función `getPostCount`, que obtiene el recuento de publicaciones de la API de WordPress. Una vez que se recupera el recuento, calcula las coordenadas `x` y `y` máximas para los círculos, asegurándose de que permanezcan dentro de los límites del lienzo.

La función `getPostCount` asincrónica recupera datos de la API de WordPress. Construye la URL _endpoint_ de la API y utiliza la función de recuperación para realizar la solicitud. Si la solicitud tiene éxito, analiza la respuesta JSON y devuelve la cantidad de publicaciones encontradas. Si hay un error durante la operación de recuperación, registra el error en la consola y devuelve 0.

Se completa la matriz de posiciones con coordenadas aleatorias para cada círculo.

Si la matriz de posiciones se ha completado con el número correcto de posiciones (`postCount`), itera a través de la matriz y dibuja un círculo por cada conjunto de coordenadas.
