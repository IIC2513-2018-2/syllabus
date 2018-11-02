# Pauta I2

## Pregunta 1 (25%)

1. No es lo mismo. En el primer caso, se le agrega un _callback_ (`hoge`) a la resolución de la promesa `hogehoge`, dando como resultado una segunda promesa, a cuya resolución se le agrega el _callback_ `piyo`. Si `hoge` a su vez retornara una promesa, por ejemplo, esto implicaría que la ejecución de `piyo` tendría que esperar la resolución de dos promesas, una tras la otra. En cambio, en el segundo caso ambos, `hoge` y `piyo` se agregan como _callbacks_ de la resolución de `hogehoge`, por lo que apenas ésta se resuelva, ambas funciones serán llamadas inmediatamente.

    **Pauta**: 0.6 puntos si responde que no con una razón medianamente correcta, 1.2 puntos si es una razón correcta. La clave está en entender qué promesa espera cada función en cada caso, así que si responden con esa diferencia, aún si no son demasiado precisos, igual se puede asignar el puntaje total

2. Una forma es que, sólo en esa ruta, agregamos en el resultado HTML una clase especial a un elemento suficientemente arriba en la jerarquía (como `body`, por ejemplo). Esto se puede lograr mediante alguna variable entregada a `render`, que quedará accesible al template layout. Luego de esto, sólo tenemos que definir reglas para los _anchors_ que sean descendientes de un elemento con esta clase especial.

    **Pauta**: 0.6 puntos por una idea similar a agregar una clase especial a algún punto alto de la jerarquía del HTML (no es necesario que expliquen lo de entregar el valor a la función `render`) y 0.6 puntos por explicar que agregarían un selector de links descendientes de esta clase. Eventualmente pueden haber otras respuestas válidas también, como por ejemplo incluir un archivo CSS condicionalmente en esa vista.

3. ¡NO! Porque las _cookies_ probablemente contendrán algunos datos personales, le darán acceso a este príncipe a una gran mayoría de los sitios web que he visitado y, más importante que todo esto, tendrá acceso a algunas _cookies_ que son usadas para el manejo de sesión, dándole la posibilidad de suplantar mi identidad al parecer como un usuario autenticado en algunas de las aplicaciones web en que tenga la sesión iniciada.

    En cuanto a koa, se utilizan dos _cookies_, una que contiene los datos para mantener la sesión (normalmente, el id de usuario) que no va encriptada, sino sólo codificada en Base64, y otra que contiene una firma de los datos anteriores, con una contraseña que sólo el servidor mantiene. Si le envío sólo la primera de estas _cookies_, el príncipe sólo podría conocer mi id de usuario, que es un dato público, pero no podrá suplantar mi autenticación pues sin tener la firma de la segunda _cookie_ no podrá utilizarla.

    **Pauta**: 0.6 puntos por explicar la razón de por qué no (basta con alguna de las expuestas en la respuesta de ejemplo, no es necesario especificar las 3; después de todo, cada una por sí sola es suficiente para no querer enviar tus _cookies_ a nadie :) ); 0.6 puntos por explicar que en koa se utlizan dos _cookies_ para el manejo de la sesión y que sin la firma no se le puede suplantar la autenticación (no importa si aún así responden que no le enviarían la primra _cookie_ mientras hayan explicado este funcionamiento).

4. El `padding` es el área del _box model_ que va desde el término del área de contenido hasta el comienzo del borde. El `margin`, por otra parte, es el espacio que el elemento intentará mantener como distancia hacia otros elementos, y se mide a partir del término del borde del elemento.

    Si tengo dos elementos contiguos, que no tienen borde ni fondo, y quiero que sus áreas de contenido tengan una separación entre ellas, puedo lograr esto de manera muy similar tanto con el `margin` o `padding` de uno de los elementos. Sin embargo, hay dos diferencias importantes: si ambos elementos usan `padding` o `margin`, en el caso del primero el espacio resultante será la suma de ambos, pero en el caso del `margin` dependerá de otros factores si ese espaciado de ambos elementos se suma o se utiliza el máximo entre ambos. Además, si el elemento en cuestión tiene un `background` o borde, entonces el `padding`, al estar dentro del área con `background` y dentro del borde, se verá muy diferente al `margin` que está fuera del borde.

    **Pauta**: 0.3 puntos por explicar `padding`, 0.3 puntos por explicar `margin` (no es necesario que sea una explicación formal (la del ejemplo tampoco lo es), pero es importante que se note que saben lo que es cada uno de estas dos propiedades), 0.3 puntos por un ejemplo válido en que ambas propiedades obtengan un resultado similar, y 0.3 puntos por un ejemplo en que obtengan un resultado diferente (sólo es necesario un ejemplo válido en cada caso; en la respuesta ejemplo se mencionan dos sólo para contar con más casos válidos de ejemplo).

5. Que muy probablemente `foo` es un objeto construido utilizando a `bar` como función constructora. Esto pues cuando un objeto se construye con una función constructora, se le asigna como su prototipo el objeto que la función constructora tiene en su atributo `prototype` (y lo expuesto en el enunciado deja claro que ambos objetos son **el mismo objeto**). La razón por la que digo "probablemente" es que en JavaScript igual podemos reasignar el prototipo en ambas funciones, por lo que en estricto rigor, cualquier cosa podría haber sucedido antes de lo ejecutado en el enunciado :)

    **Pauta**: 0.6 puntos por decir que `foo` es una instancia de `bar`, y 0.6 puntos por la explicación (no es necesario mencionar lo de "probablemente" ni tampoco ser muy específico mientras quede claro que que entienden el concepto de instancia creada a partir de una función constructora y los prototipos).

## Pregunta 2 (25%)

Hay un [ejemplo de respuesta completa](code/pregunta2) para que se vea exactamente como en las figuras del enunciado. Sin embargo, no es necesario un parecido fotográfico. En particular, temas como fuentes y tamaños de letra son ignorables; temas de colores y espaciados no necesitan ser precisos, sólo que se note un intento de acercarse a la imagen. La corrección se realiza con la siguiente rúbrica.

criterio  | Insatisfactorio  | Satisfactorio  |  Excelente
----------|------------------|----------------|-------------
Selectores (1 ptos) | Ninguno o muy pocos de los selectores están correctos (0 ptos) |  Parte importante de los selectores están correctos o sólo tienen errores menores, pero no se aprovecha la estructura del documento o sólo se usan selectores básicos (como id o clase únicamente) (0.6 ptos) | Casi el total de los selectores están correctos o sólo algunos contienen errores menores, y hay precencia de selectores compuestos o que usan características más complejas que sólo id y clase (1 pto)
Box model (1 puntos) | Ausencia casi total de uso del box model (0 puntos) | Hay presencia de uso correcto del box model pero con algunos errores importantes como, por ejemplo, usar padding o border en lugar de margin o no considerar las sumas de estas propiedades de manera correcta (0.6 puntos) | Uso correcto del box model salvo algunos errores menores (1 pto)
Diagramación (1 puntos) | Los elementos no son posicionados o no hay un intento claro de organizarlos en el documento según lo pedido (0 puntos) | Hay intentos parcialmente correctos o incompletos de organizar los elementos según lo pedido (por ejemplo, se intenta usar float/inline-block/flex para ello) (0.5 puntos) | Se logra una diagramación de los elementos según lo pedido, salvo errores menores (1 pto)
Uso de HTML (1 pto) | El uso de los elementos HTML a estilar parece casi aleatorio o no hay un indicio de entenderlo correctamente para determina qué estilar (0 ptos) | La mayoría de los elementos HTML se usan de manera correcta, como por ejemplo los contenedores signup-options y local-signup para cada lado de la pantalla, los anchors para los botones, el hr para la raya divisoria, etc. (0.7 ptos) | Casi todos los elementos se eligieron apropiadamente, salvo unos pocos errores menores (1 pto)
Semejanza (2 puntos) | Casi ningún elemento tiene el resultado pedido (0 puntos) | El resultado tiene algunos elementos con un resultado muy similar y otros con algo que se acerca a lo pedido, pero el documento en su conjunto aún lejos de lo pedido (1 puntos) | Muchos elementos tienen el resultado pedido y el documento en su conjunto se acerca bastante también (2 puntos)

## Pregunta 3 (25%)

## Pregunta 4 (25%)
