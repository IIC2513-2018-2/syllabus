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

Hay más de una forma de lograr este resultado, y también hay algunos supuestos válidos que pueden especificarse que modificarán lo que es necesario implementar. Pero lo más importante es tener un _middleware_ que vaya almacenando la cantidad de páginas de producto vistas (según los requisitos, con menos de 1 hora de separación) en un atributo de la sesión (que es lo único (además de _cookies_ directamente), además de base de datos, que podemos utilizar para mantener este "estado") y otro _middleware_ (o un agregado al mismo anterior) que verifique si se han visto más de 10 y agregue el atributo necesario a `ctx.state` para que la vista muestre el cupón.

Si utilizamos dos middlewares, podemos crear uno bien simple como el siguiente:
```js
const MAX_INTERVAL_MS = 60 * 60 * 1000; // 1 hour in ms

function countProductPageViews(ctx, next) {
  const { productPageViews, lastProductPageViewedAt, cart } = ctx.session;
  let count;
  let curentViewedAt;
  // if cart is not empty, reset everything
  if (cart.length) {
    count = 0;
    curentViewedAt = undefined;
  } else {
    // if lastProductPageViewedAt is set, it means user saw another page before
    curentViewedAt = Date.now();
    count = lastProductPageViewedAt && (curentViewedAt - lastProductPageViewedAt < MAX_INTERVAL_MS)
      ? productPageViews + 1
      : 1;
  }
  ctx.session.productPageViews = count;
  ctx.session.lastProductPageViewedAt = curentViewedAt;
  return next();
}
```
Y añadirlo a la ruta de productos, que debiera ser algo de este estilo:
```js
router.get('/products/:id', (ctx, next) => { ... });
```
de esta manera:
```js
router.get('/products/:id', countProductPageViews, (ctx, next) => { ... });
```

Luego necesitamos otro _middleware_ que verifique si hay una cuenta mayor o igual a 10 y, en ese caso, agregar la variable del cupón:

```js
// on the main router
router.use((ctx, next) => {
  if (ctx.session.productPageViews >= 10) ctx.state.coupon = true;
  return next();
});
```

Otra opción es que usemos sólo un _middleware_ agregado al router principal. En ese caso necesitaremos verificar el _path_ del request para ver si hace match con `/products/:id` manualmente, y agregar esta condición del segundo _middleware_ al final del mismo:

```js
const MAX_INTERVAL_MS = 60 * 60 * 1000; // 1 hour in ms
// on the main router
router.use((ctx, next) => {
  const { productPageViews, lastProductPageViewedAt, cart } = ctx.session;
  // reset everything if cart is not empty
  if (cart.length) {
    ctx.session.productPageViews = 0;
    ctx.session.lastProductPageViewedAt = undefined;
    return next();
  }
  // check if route matches products
  if (/^\/product\/\d+$/.test(ctx.request.path)) {
    const now = Date.now();
    const count = lastProductPageViewedAt && (now - lastProductPageViewedAt < MAX_INTERVAL_MS)
      ? productPageViews + 1
      : 1;
    ctx.session.productPageViews = count;
    ctx.session.lastProductPageViewedAt = now;
  }
  if (ctx.session.productPageViews > 10) ctx.state.coupon = true;
  return next();
});
```

**Pauta**:
- (1 pto) Mostrar claridad de lo que es un _middleware_ (crear una función que recibe `ctx` y `next` (0.5 ptos), y que llama a `next` en algún punto de su cuerpo (0.5 ptos))
- (0.5 ptos) Saber cómo agregar un _middleware_ (usar `router.use` o insertarlo antes de otro en una cierta ruta, por ejemplo)
- (1 pto) leer (0.5 ptos) y escribir (0.5 ptos) correctamente datos en la sesión (utilizar `ctx.session` tanto para obtener propiedades como para asignarlas)
- (1 pto) por contexto correcto para llevar la cuenta de páginas: esto puede ser ya sea teniendo dos _middlewares_ en que uno se agrega sólo en la ruta correspondiente o con un chequeo del path del request en un _middleware_ más general
- (1.5 ptos) Llevar la cuenta de vistas de página de producto correctament en sesión. Esto es ir aumentando el contador cuando se cumplen las condiciones (1 pto) y reiniciar la cuenta cuando no se cumplen (carro no vacío e intervalo de tiempo) (0.5 puntos)
- (1 pto) Asignar `coupon` de acuerdo a la condición pedida (0.5 puntos por chequeo de condición, y 0.5 puntos por asignación correcta de la variable), utilizando `ctx.state`)

## Pregunta 4 (25%)

1. Es necesario crear una relación N:N entre el modelo Costume y el modelo User. Para ello:
    1. ejecutamos un comando sequelize para crear una migración para crear la tabla que contendrá ambas _foreign keys_: `sequelize migration:generate --name AddCostumesUsersTable`
    2. abrimos el archivo de la migración creada y, en `up`, agregamos la declaración de la tabla que queremos crear, utilizando `queryInterface.createTable`. Es importante aquí agregar dos columnas a esta tabla, `userId` y `costumeId`, cada una como referencia al `id` del modelo respectivo (type Integer, y le agregamos `references` al atributo respectivo)
    3. corremos el comando `sequelize db:migrate` para aplicar la migración en la BD
    4. luego tenemos que realizar un cambio en el modelo User y/o en Costume según sea necesario, para agregar la relación a nivel del modelo. Probablemente sólo sea necesario en User (para, a partir de un usuario, poder obtener los disfraces que agregó). Entonces, en `models/user.js` tenemos que agregar algo de este estilo:
        ```js
        user.associate = function associate(models) {
          user.belongsToMany(models.costume, { through: 'CostumesUsers' });
        };
        ```
        Eso servirá para que el modelo use automáticamente la tabla creada para mantener la relación entre entidades.

    **Pauta**: (3 puntos)
    1. 0.5 puntos por ejecutar un comando para crear una migración o por crear el archivo directamente (no es necesario que tengan el comando explícito mientras hagan explicado bien el paso)
    2. 1 punto por escribir o describir el contenido de la migración, particularmente en el método `up`: 0.5 puntos por la creación general de la tabla, y 0.5 puntos por las claves foráneas (sólo 0.3 puntos si no mencionan usar `references` o la creación de la _constraint_ de clave foránea)
    3. 0.5 puntos por ejecutar la migración con `db:migrate` (no es necesario que escriban el comando preciso mientras describan bien que quieren ejecutar esto)
    4. 1 punto por cambios en el modelo: dependiendo de lo que quieran hacer, podría ser necesario un cambio en User, en Costume, o en ambos. Deben al menos mencionar que escribirán una relación `belongsToMany` (0.5 puntos) y alguna descripción (0.5 puntos) de dónde y cómo se hace (escribiendo una función `associate`, utilizando `through` para especificar la clave foránea, etc).

    **Nota**: Otra respuesta válida es crear un modelo que maneje la relación. En ese caso, los puntajes descritos arriba cambian a:
    1. 0.5 puntos por el comando sequelize para crear la migración+modelo
    2. 0.5 puntos por los cambios/ajustes a la migración recién creada
    3. 0.5 puntos por `db:migrate`
    4. 1.5 puntos por los cambios al modelo creado (0.5 puntos por cada una de las dos relaciones que hay que crear para ese modelo) más los cambios a uno de los modelos user o costume (0.5 puntos)

2. Es necesario obtener el usuario desde los datos de sesión (aunque, suponiendo prácticas como las vistas en clases, se puede suponer que estará presente en `ctx.state.currentUser` ya cargado desde la BD), cargar el disfraz a partir del id que probablemente viene del path, y finalmente agregar ese disfraz a la colección de disfraces del usuario:
  ```js
  router.put('/whishlist/costumes/:id', async (ctx) => {
    const costume = await ctx.orm.costume.findById(ctx.params.id);
    if (costume) {
      await ctx.state.currentUser.addCostume(costume);
    }
    ctx.redirect('show-costume', costume.id);
  });
  ```

  **Pauta**: (3 puntos)
  - 0.5 puntos por elegir ya sea un método PUT, POST o PATCH para esta ruta
  - 0.5 puntos por elegir una combinación razonable de _path_ y datos del body (puede ser como el ejemplo, puede ser directamente a un recurso como `wishlist` y con el dato del disfraz a agregar en el _body_)
  - 1 punto por crear la relación entre usuario y disfraz: es válido tanto asignar la clave foránea directamente como usar los métodos creados por sequelize, como `addCostume`
  - 0.5 por una respuesta razonable, que puede ser hacer render de un template entregándole los datos del disfraz, o hacer una redirección a alguna otra ruta como en el ejemplo