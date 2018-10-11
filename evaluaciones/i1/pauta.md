# Pauta I1

## Parte I: Preguntas teóricas (50%)

### Sección A: Conceptos generales (60%)

1. **(1.5 ptos)**
    Los **headers HTTP** son pares nombre-valor (separados por el caracter dos puntos) que se envían tanto en el **request** como el **response**, para entregar información adicional acerca del mismo. Un ejemplo es el **header** `User-Agent`, que puede ser incluido en un **request** para que el cliente pueda entregar información sobre sí al servidor (como por ejemplo, el nombre y versión del cliente).

    **Pauta**: Lo más importante es mencionar que es *información*, tanto de **request** como **response** (1 pto). Un ejemplo correcto, 0.25 ptos, y su utilidad, 0.25 ptos.

2. **(1.5 ptos)**
    El *event loop* es el modelo que le permite a un runtime JavaScript tener concurrencia, a pesar de ejecutar el código JavaScript mismo en un solo *thread*.

    Un runtime JavaScript tiene un **stack** de ejecución, en donde se van añadiendo las funciones que están actualmente en el contexto de ejecución. Cuando se llama a una función nativa que puede realizar su ejecución en paralelo, fuera de la ejecución de JavaScript (principalmente operaciones relacionadas a I/O), se le entrega una función como *callback*, que será agregada a una **cola de mensajes** cuando la operación asíncrona termine. El *event loop*, cada vez que se vacía el *stack* de ejecución, examinará la cola y comenzará a ejecutar (o esperar el siguiente mensaje si aún hay llamadas asíncronas pendientes) el primer elemento de la misma (pasándolo ahora al *stack* de ejecución).

    **Pauta**: 0.5 puntos por explicar el objetivo de soportar concurrencia/asincronidad, 0.5 puntos por explicar la existencia de una cola, y 0.5 puntos por el stack de ejecución.

3. **(1.5 ptos)**
    **Cascading** se refiere a cómo se determina el valor de una propiedad para un cierto elemento. Se examinan la importancia (uso de `!important`), luego el origen de la hoja de estilos (browser, user o author), luego la especificidad del selector (cálculado según número de ids, clases y otros elementos del mismo) y finalmente el orden en el que la regla fue declarada en la hoja de estilos. Cuando dos reglas hacen match para un cierto elemento y ambas especifican un valor para una cierta propiedad, entonces la primera que "gane" respecto a alguna etapa de la cascada será la que aplique su valor al elemento.

    **Pauta**: 0.5 puntos por explicar a qué se refiere la cascada, 0.5 puntos por mencionar (sin necesidad de explicación detallada, como en el ejemplo) dos de las etapas de la cascada, y otros 0.5 puntos por especificar las otras dos etapas de la cascada más el orden correcto en que se resuelven todas.

4. **(1.5 ptos)**
    Estrictamente es falso. Si bien es cierto que *normalmente* una aplicación, por el lado del servidor, sólo recibirá requests que la interacción del usuario con lo que el servidor envíe al browser sea capaz de gatillar, hay múltiples formas en que un servidor podría recibir requests adicionales a los que las vistas enviadas al browser tengan contemplados. Sin ir muy lejos, una persona podría directamente enviar un request desde una línea de comandos o un programa escrito para tales efectos, sin siquiera necesitar cargar una vista de la aplicación.

    **Pauta**: Si se menciona el poder generar requests por otros medios fuera del contexto de la aplicación como fundamento para "falso", es suficiente para los 1.5 puntos; si la respuesta es "verdadero" justificando correctamente lo que sucede "normalmente" en una aplicación, se puede asignar 1 punto. Respuestas tanto de verdadero como falso sin una justificación razonable no tienen puntaje.

### Sección B: koa (40%)

1. **(2 ptos)**
    Un *middleware* en koa es una función **asíncrona** que está preparada para recibir el contexto del request y una función que le permite continuar la cadena de ejecución. En koa los *middlewares* se ejecutan como un *stack*: un *middleware* comienza su ejecución, luego en algún punto ejecuta la función para continuar la cadena de ejecución (que son los siguientes *middlewares*, llamados de manera asíncrona suspendiendo la ejecución del actual *middleware*), y finalmente tiene la opción ejecutar algunas otras sentencias antes de terminar su trabajo. Esto crea un flujo "hacia abajo", profundizando en la ejecución de *middlewares* que luego vuelve "hacia arriba", terminando de ejecutar los *middlewares* que comenzaron su ejecución anteriormente.

    **Pauta**: 1 pto por definir un *middleware* (0.5 puntos por mencionar que es una función, 0.5 puntos por explicar que es asíncrona, sus arguments, que procesa el request). 1 pto por explicar el flujo de *middlewares* (0.5 puntos por explicar cómo se ejecutan unos a otros de manera asíncrona y 0.5 puntos por explicar el comportamiento de *stack*).

2. **(2 ptos)**
    Pasos:
    1. ejecutar un comando sequelize que generará tanto un archivo de modelo como un archivo de migración para la creación de la tabla en la BD
    2. eventualmente ajustar los atributos y otras configuraciones tanto del modelo como de la migración
    3. ejecutar un comando para que se aplique la migración

    **Pauta**: 1 pto por el primer comando para crear los archivos necesarios (que puede ser reemplazado por describir manualmente crear los archivos, que también podría ser válido), 0.5 puntos por mencionar el ajuste de atributos (dado que prácticamente siempre que se genera un modelo es necesario ajustarlo) y 0.5 puntos por ejecutar la migración.

4. **(2 ptos)**
    Hay muchos ejemplos posibles. Lo importante es que sea uno válido/correcto:
    - *middlewares*: éstos son la manera más clara en que koa nos permite evitar repetir código. Una vez declarado, un *middleware* puede ser insertado en múltiples lugares, incluido antes (o "dentro") de varios otros *middlewares*. Además, con ayuda de koa-router, podemos insertar estos *middlewares* en condiciones específicas como presencia de ciertos *path params* o métodos del request
    - `ctx.state`: relacionado a los *middlewares*, pero este objeto permite que los *middlewares* puedan comunicarse entre sí, logrando comunicar el trabajo realizado a otros *middlewares* que podrían necesitar los mismos datos
    - extensión de modelos: sequelize nos permite extender nuestros modelos para agregarle métodos de instancia (aún cuando no tengan relación directa con nuestra BD) de manera de reutilizar esa lógica en otros lugares
    - layout: nos permite incluir el contenido de template general, que todos los (o muchos otros) templates van a también necesitar
    - `include` en los templates: permite escribir un trozo de template una sola vez (por ejemplo, cómo se representa a una ONG) que pueda ser incluido en todos los lugares (otros templates) en donde se necesite esa representación

    **Pauta**: se requiere sólo un ejemplo válido. 1 pto por mencionar algo que correctamente implica una ayuda en evitar repetir código y que sea del template/koa (no de JS mismo, por ejemplo, por lo que no es válido decir "funciones"), y 1 punto por una explicación en que quede claro cómo esa característica ayuda en este objetivo.

## Parte II: Preguntas prácticas (50%)

### Sección A: Promesas, promesas (40%)

#### Pregunta 1 (60%)

Cada pregunta sólo requiere una función (que siempre llamaremos `foo`) pero se listan a varias alternativas posibles de cómo escribirla, todas cumpliendo con lo pedido:

1. Ejercicio 1
    ```js
    function foo() {
      return getA().then(a => getX(a)); // o incluso getA().then(getX)
    }

    async function foo() {
      const a = await getA();
      return getX(a);
    }
    ```
2. Ejercicio 2
    ```js
    function foo() {
      return getB()
        .then(b => getA(b))
        .then(a => getX(a));
      // o directamente getB().then(getA).then(getX);
    }

    async function foo() {
      const b = await getB();
      const a = await getA(b);
      return getX(a);
    }
    ```
3. Ejercicio 3
    ```js
    function foo() {
      return Promise.all([getA(), getB()])
        .then(([a, b]) => getX(a, b)); // o .then(values => getX(...values))
    }

    // más engorrosamente sin Promise.all:
    function foo() {
      const promiseForA = getA();
      return getB()
        .then((b) => {
          return promiseForA.then(a => getX(a, b));
        });
    }

    // cuidado con await! queremos que ambas promesas corran simultáneamente
    async function foo() {
      const promiseForA = getA(); // sin usar await, para no tener que esperarla
      const b = await getB(); // aquí sí podemos usar await pues la promesa por A ya está andando...
      const a = await promiseForA; // ahora sí la podemos esperar
      return getX(a, b);
    }

    async function foo() {
      const [a, b] = await Promise.all([getA(), getB()]);
      return getX(a, b);
    }

    // single line! :godmode:
    async function foo() {
      return getX(...(await Promise.all([getA(), getB()])));
    }
    ```
4. Ejercicio 4
    ```js
    async function foo() {
      const [a, b] = await Promise.all([
        getC().then(c => getA(c)),
        getD().then(d => getB(d)),
      ])
      return getX(a, b);
    }
    ```
5. Ejercicio 5
    ```js
    async function foo() {
      const promiseForC = getC();
      const promiseForA = Promise.all([promiseForC, getD()]).then(values => getA(...values));
      const promiseForB = promiseForC.then(getB);
      return Promise.all([promiseForA, promiseForB])
        .then(values => getX(...values));
    }
    ```

**Pauta**:
- Cada ejercicio tiene 1.2 puntos en total
- Errores menores de sintaxis son perdonables
- Para cada ejercicio, la rúbrica es la siguiente:
  - no logrado (0 puntos): tiene errores importantes, indican falta de entendimiento respecto a promesas
  - insuficiente (0.4 puntos): tiene algunos errores menores, o algún error relevante, pero cuenta con aspectos correctos y demuestra algo de entendimiento de promesas (por ejemplo, una de las dependencias se obtiene adecuadamente, pero no la otra)
  - suficiente (0.8 puntos): el ejercicio está correcto desde el punto de vista de dependencias y resolución de promesas, pero no aprovecha al máximo la posible "paralelización" de ejecución de las mismas (ejemplo probable: usar `await` antes de también comenzar la ejecución de otra función asíncrona que no era dependiente)
  - excelente (1.2 puntos): la respuesta está correcta y se aprovecha al máximo la "paralelización" de funciones asíncronas


#### Pregunta 2 (40%)

1.
    El código anterior ejecutará dos funciones asíncronas una tras otra, sin esperar que terminen su poceso asíncrono: `heatWater` y `weightCoffee`. La segunda función, luego de que termina su proceso asíncrono y se llama al *callback* entregado como argumento, comenzará otro proceso asícnrono asociado a la función  `grindCoffee`. No sabemos de antemano cuál *callback*, el de `heatWater` o el de `grindCoffee`, será ejecutado primero. Por ello, además de primero asignar el resultado entregado al *callback* a una variable (`heatedWater` y `groundCoffee`) de un *scope* exterior (para que así ambos *callbacks* tengan acceso a esos valores), los respectivos *callbacks* chequearán si el resultado esperado desde el **otro** *callback* está ya listo en su respectiva variable antes de ejecutar el proceso asíncrono final, `brewCoffee`.

    Lo anterior logra que el primero en terminar de estos dos procesos asíncronos que ocurren en paralelo sólo asignará su resultado, pues aún no está todo listo para `brewCoffee`, y el que termina después sí ejecutará `brewCoffee` con ambos valores necesitados ya resueltos. Es el proceso de `brewCoffee` el que realmente necesitamos (los anteriores fueron sólo dependencias asíncronas que necesitábamos esperar) y es por ello que es el que recibe el *callback* entregado como argumento a la función `prepareCoffee`.

    **Pauta**: No importa si la explicación está más cerca de código o de lo semántico del código (hablado de "café molido" y "agua caliente" y todo eso). Lo importante es hacer notar tres puntos importantes:
    - 1 pto: `heatWater` y `weightCoffee` ocurren en paralelo
    - 1 pto: `grindCoffee` se ejecuta sólo luego de que `weightCoffee` termina (serialmente)
    - 1 pto: `brewCoffee` se ejecuta sólo cuando ambos procesos paralelos terminan (se espera a ambos antes de poder ejecutarse)

1. Posibles soluciones que simplican el código anterior basándose en promesas (obteniendo los 3 puntos):
    - sin nada más que `then` en promesas:
    ```js
    function prepareCoffee() {
      const promiseFoWater = heatWater();
      return weightCoffee()
        .then(beans => grindCoffee(beans))
        .then(groundCoffee =>
          promiseFoWater.then(heatedWater => brewCoffee(heatedWater, groundCoffee)))
    }
    ```
    - usando Promise.all:
    ```js
    function prepareCoffee() {
      return Promise.all([
        heatWater(),
        weightCoffee().then(beans => grindCoffee(beans))
      ])
        .then(waterAndCoffee => brewCoffee(waterAndCoffee[0], waterAndCoffee[1]))
    }
    ```
    - con `await`:
    ```js
    function prepareCoffee() {
      const waterPromise = heatWater(); // sin await! para que lo siguiente ocurra en paralelo
      groundCoffee = await weightCoffee().then(beans => grindCoffee(beans));
      return brewCoffee(await waterPromise, groundCoffee);
    }
    ```

    **Pauta**:
      - errores sintácticos o de funcionamiento del código menores pueden ser ignorados (entregar dos argumentos en vez de un Array a `Promise.all`, o esperar dos argumentos en el *callback* de `then` del `Promise.all`, por ejemplo)
      - 2 puntos por una respuesta que cumpla con hacer lo mismo que el original. De ellos:
        - 1.5 puntos por cumplir con que el resultado de la función `prepareCoffee` termina efectivamente siendo lo esperado (se puede asignar 0.5 puntos si es que hay algún error menor en el programa)
        - 0.5 puntos porque el código cumpla con ejecutar en paralelo los procesos que pueden ejecutarse así
      - 1 punto por adicional por, en lugar de seguir la misma estructura que en los *callbacks* (variables externas para guardar ambos resultados y luego un `if` para chequear que el otro proceso terminó) aprovechar las promesas para crear código más simple. El logro de esto se puede medir principalmente por evitar los `if` (puede haber también disminución de uso de variables, sobre todo externas (como en las dos primeras soluciones de ejemplo), pero igual es aceptable sólo eliminando los `if` (como en la tercera solución de ejemplo, en que igual se usan dos variables))

### Sección B (60%)

#### Pregunta 1 (50%)

El modelo `CarbonEmissionReport` ya existe, por lo que sólo necesitamos trabajar en:
- el router de *carbon emission reports* (siguiendo convenciones, se llamaría `carbonEmissionControls`, y habría que crearlo si es que no existía anteriormente): tenemos que crear dos acciones nuevas:
  - `GET /` o `GET /unapproved`: aquí consultaremos en la BD, utlizando el modelo `CarbonEmissionReport`, todos los reportes que no estén aprobados, y luego haríamos *render* de una vista que mostrará este listado entregándole el resultado anterior
  - `PUT /:id/approval` o `PATCH /:id` (ambos pueden ser válidos): recibimos el id del reporte en cuestión, lo cargamos desde la BD mediante el modelo, y actualizamos el valor del atributo `approved`. Luego podemos hacer un redirect de vuelta al listado (idealmente dejando un *flash message* seteado)
- al menos necesitamos crear la vista que hará render del listado de reportes no aprobados (`index.html.ejs` o `unapproved.html.ejs` en la carpeta `views/carbonEmissionReports`), cada uno con un botón que generará un request a la segunda acción mencionada en el punto anterior

**Pauta**:
  - 3 puntos por los requerimientos de *controller*/*router* (no es necesario mencionar explícitamente los métodos y paths de los requests, pero sí que quede claro lo que hace cada uno y su ubicación, notando que se pretende utilizar métodos y paths HTTP para representar la operación)
    - 1.5 puntos por explicar correctamente el listado
    - 1.5 puntos por explicar correctamente la actualización del atributo `approved` del reporte
  - 3 puntos por los requerimientos de vistas: pueden ser los 3 puntos sólo por el listado, como en la solución de ejemplo, siempre y cuando mencionen que la acción de actualización del reporte hará una redirección. Sino, son 1.5 puntos por el listado y 1.5 puntos por otro template para mostrar el reporte editado o similar. Es necesario describir el contenido general del template como en este ejemplo (2/3 de puntos, dependiendo de si son 3 o 1.5), y su ubicación posible en el proyecto (1/3 de los puntos)

#### Pregunta 2 (50%)

- Trozo de código de la vista: no se mencionan atributos del modelo, así que supondremos un método `getDescription` que entrega alguna representación razonable del reporte como para mostrarlo en el listado
```html
<% reports.forEach(report => { %>
  <tr>
    <td><%= report.getDescription() %></td>
    <td>
      <form method="post" action="<%= getApproveReportPath(report.id) %>">
        <input type="hidden" name="_method" value="put" />
        <input type="submit" value="Aprobar" />
      </form>
    </td>
  </tr>
<% }) %>
```

- Trozo de código del router:
```js
router.put('approve-report','/:id/approval', async (ctx) => {
  const report = await ctx.orm.carbonEmissionReport.findById(ctx.params.id);
  await report.update({ approved: true });
  ctx.redirect(ct.orm.router.url('reports'));
});
```

**Pauta**:
  - 3 puntos por vista. No es necesario que muestren tanto contexto del botón del template (el `forEach` y `td`) pero sí es importante que utilicen un formulario pues el botón debe crear un request PUT (o PATCH)
    - 1.5 puntos por utilizar un formulario
      - 0.5 puntos por usar el tag, 
      - 0.5 puntos por usar método `post`
      - 0.5 puntos por asignar un `action`
    - 0.5 puntos por enviar el *override* de método mediante el `input` de tipo `hidden`
    - 0.5 puntos por el `input` de tipo `submit` para mostrar realmente un botón
    - 0.5 punto por suponer otras buenas prácticas como que el router le envía una función para generar el *path* destino de cada formulario y que setea variables locales para iterar por los reportes o una variable local creada en el template con cada reporte a mostrar

- 3 puntos por router:
  - 1 punto por correctamente usar método y path (algo como `PUT :id/approval` y PATCH `/:id` pueden considerarse válidos; otros pueden tener 0.5 puntos si están relacionados o son similares, o 0 si es escapan mucho)
  - 1 punto por cargar y actualizar el modelo (se podría no necesaariamente cargar, utilizando el método estático `update` con un `where` adecuado; además es válido hacelro con un `update` de instancia como en el ejemplo o seteando el atributo y luego ejecutando `save`)
  - 1 punto por una respuesta adecuada (que puede ser redirección, como en el ejemplo)