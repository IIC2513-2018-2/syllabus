# Pauta I3

## Pregunta 1 (25%)

1. (1.2 puntos) Sí funcionará bien. La forma de ejecución del _request_ es diferente: en un caso tenemos _requests_ normales que el browser genera por _clicks_ en _links_, envíos de formulario y ese tipo de interacciones, y en el otro caso (la aplicación React) tenemos _requests_ generados directamente desde código JavaScript, que funcionan de manera asíncrona (Ajax). Sin embargo, a pesar de esta diferencia, los _requests_ en sí, a nivel HTTP, son prácticamente el mismo, e incluirán el mismo conjunto de _cookies_, por lo que las _cookies_ asociadas a la autenticación funcionarán de igual manera en ambos casos.

    **Pauta**: 0.8 puntos por explicar que los _requests_, incluidas las _cookies_, son las mismas en ambos casos; 0.4 puntos por especificar que dado las _cookies_ la autenticación funcionará de igual manera.

2. (1.2 puntos) Un componente "puro" es un componente que cumple con características similares a una función pura: sus únicas dependencias son los parámetros que recibe – `props` en el caso de un componente –, no genera _side effects_ al ejecutarse y cada vez que se ejecuta con los mismos parámetros – o `props` – el resultado es exactamente el mismo – _render_ del mismo HTML. Una consecuencia de lo anterior es que estos componentes no mantienen estado (son _stateless_).

    Sus ventajas son, por lo mismo, similares a las de una función pura: tienden a ser mucho más simples, son predecibles, son más fáciles de testear, son más reusables (al no tener dependencias más allá de sus parámetros).

    **Pauta**:
      - 0.8 puntos por definición:
        - 0.4 puntos por cada una de las siguientes dos características: que sólo depende de sus argumentos (y, por lo tanto, a mismos argumentos el output también será el mismo) y que no tiene _side effects_
        - si se mencionan características que estén incorrectas, se descuenta 0.4 puntos (en total, no por cada una, y sólo con un máximo de 0 puntos en esta sub-sección; es decir, si tiene una característica correcta y 1 o más incorrectas, tendrá 0 puntos, pero si tiene 2 correctas y una o más incorrectas, se otorgarán 0.4 puntos)
      - 0.4 puntos por mencionar al menos dos ventajas (0.2 puntos cada una), como entre las 4 mencionadas en la respuesta de ejemplo; explicar ventajas incorrectas ocasionan 0.2 puntos menos (en total, no por cada una, con la misma lógica del punto anterior).

3. (1.2 puntos) Ambas opciones serán equivalentes en cuanto al resultado final, pero no son equivalentes en cuanto a _performance_. La mutación del DOM que está siendo "rendereado" es una operación costosa. Por esta razón, el crear todos los elementos y luego sólo realizar una inserción (y, por lo tanto, también _rendering_) será mucho más conveniente que realizar una mutación del DOM por cada elemento. Por lo tanto, la primera opción es la mejor opción.

    Si los datos a mostrar no están aún disponibles sino que hay que obtenerlos, la respuesta podría cambiar dependiendo de lo que queramos: si no queremos que se vea como que los libros aparecen "de a uno", entonces podríamos esperar todos los _requests_ y luego generar el árbol de DOM con todos los libros y realizar una única inserción en el DOM. Pero si tener progreso parcial en cuanto a los libros mostrados es algo positivo, entonces sí nos podría convenir realizar inserciones una a una a medida que los _requests_ terminan. A pesar de finalmente realizar más procesamiento, el que estas inserciones de cada elemtno estén entre procesos asíncronos (en lugar de uno tras otro síncronamente) no hará que la aplicación tenga una interrupción muy larga de manera contínua.

    **Pauta**: 0.8 puntos por explicar que aunque el resultado sea el mismo, realizar una única inserción es más eficiente; 0.4 puntos por explicar que la respuesta podría cambiar a que sí nos convenga realizar una a una las inserciones (0.2 puntos por un razonamiento incompleto, y 0.4 por incluir que la ineficiencia percibida se reduciría por los procesos asíncronos).

4. El utilizar un _stream_ de datos resulta en un proceso más eficiente. Tenemos una "tubería" de datos que llegan a la aplicación (por ejemplo, un archivo siendo subido por el cliente), y una "tubería" de datos que sale desde la aplicación hacia otra fuente (por ejemplo, el archivo siendo subido a algún _cloud storage_). Usar un _stream_ es como conectar ambas tuberías, para que los datos que llegan van siendo enviados directamente por la tubería de salida. Esto logrará que el proceso se lleve a cabo de mejor manera que, por ejemplo, descargardo completa la primera tubería y luego subiendo completo el archivo a través de la otra tubería, tanto en términos de tiempo total utilizado como en uso de recursos del servidor intermedio (dado que no necesita almacenar el archivo completo, sino sólo un cierto _buffer_).

    **Pauta**: 0.6 puntos por explicación explícita o al menos implícita de lo que son los _streams_ en este contexto (no es necesario escribir "un _stream_ es…" pero que se note el concepto a través de la explicación). 0.6 puntos por explicar que la ventaja es eficiencia (en tiempo y uso de memoria, pero basta con que mencionen una de las dos).

5. La ventaja más importante es que el cliente no tendrá que esperar hasta haber descargado y ejecutado todo el contenido JS necesario antes de poder ver algo del contenido de esta aplicación React. Sobre todo en una _single page application_ esto puede ser relevante pues literalmente puede que no se vea nada hasta que la aplicación React esté corriendo ya.

    La principal desventaja es que esto será un proceso más pesado para el servidor. El _request_ para cargar esta página ya no será resuelto con simple contenido estático, sino que habrá que realmente ejecutar en el servidor la aplicación React completa para poder obtener el resultado HTML que ésta entrega. Esto implica una _response_ inicial que también tomará mayor tiempo en ser generada y enviada al cliente. También existe la desventaja de que no todo se puede ejecutar en el servidor, y muchas veces los _packages_ utilizados junto con React necesitan proveer de soporte especial para SSR (aunque esta desventaja no se espera que sea mencionada en la respuesta).

    **Pauta**: 0.6 puntos por la principal ventaja y 0.6 puntos por la principal desventaja. Mencionar ventajas incorrectas quitará 0.3 puntos (independiente de la cantidad de incorrectas), al igual que descuento de 0.3 puntos por desventajas incorrectas. Si no se menciona la ventaja o desventaja principal, pero se mencionan otras que también estén correctas, se puede obtener hasta 0.4 puntos (de los 0.6).

## Pregunta 2 (25%)

### Ejercicio 1 (1.5 puntos)

 Lo que vemos en el código es que hay dos objetos, que fueron creados a partir de la misma clase, pero que al comparar dos de sus métodos (que son objetos de tipo función) en el caso de uno de ellos (`buzz`) son exactamente el mismo objeto, pero en el otro caso (`collectPollen`) no son el mismo objeto. La causa más probable de que esto ocurra viene dada por cómo la clase define estos dos métodos. En el caso de `buzz` éste método probablemente está definido a nivel del prototipo de la función, mientras que en el caso de `collectPollen` probablemente se define una función diferente asignada a nivel del constructor. Ejemplos:

```js
class Bee {
  constructor() {
    // cada instancia quedará con su propio objeto función, diferente cada vez que se construye un objeto
    this.collectPollen = () => { console.log('...'); };
  }
  // método a nivel de Bee.prototype, compartido por todas las instancias de esta clase
  buzz() {
    console.log(`bzzzzzzzzz`);
  }
}

// o en JS < ES6
function Bee() {
  this.collectPollen = function () { console.log('...'); };
}
Bee.prototype.buzz = function () { console.log(`bzzzzzzzzz`); }
```

**Pauta**: La respuesta de ejemplo es bien extendida para que sirva además de explicación. Pero en el contexto de la evaluación, basta con que quede claro que responden a nivel de `buzz` -> prototipo y `collectPollen` -> instancia.

  - 0.75 puntos por la explicación de `buzz` (prototipo) 
  - 0.75 puntos por la explicación de `collectPollen` (método declarado directamente en la instancia)

Ojo que se pregunta por "la causa más probable", que es lo anteriormente expuesto. Si responden alguna otra causa que correctamente también ocasione el mismo efecto, podrán tener sólo 0.3 puntos en el ítem respectivo (ejemplo: que el constructor de la clase asigna una función externa a la clase misma en la propiedad `buzz` y por eso resultan en la misma instancia de función también explica el comportamiento de `buzz` pero no es lo más común, por lo que obtienen 0.3 puntos de los 0.75). Notar que **no es correcto** suponer (y, por tanto, 0 puntos si la respuesta depende de ello) que se ejecuten otras líneas de código entre la creación de instancias y los `console.log`, pues la idea es que respondan sólo en base al código expuesto, lo cual implica que todas las diferencias vienen dadas por la definición de la clase.


### Ejercicio 2 (1.5 puntos)

La separación entre Barry y Janet es de 47 pixeles. El comportamiento normal de un div es de tipo bloque, por lo que ambos nombres quedarán uno arriba y el otro debajo. Dado el box model y las propiedades especificadas en las dos reglas del enunciado, lo único que causa separación vertical entre estos elementos son 3 propiedades asignadas al selector `#bees div`: `padding-bottom`, `margin` y `border`.

- `padding-bottom` añadirá 20px de separación, pues ocasionará que la caja de Barry tenga un espaciado debajo de esos 20 px (el espaciado añadido a Janet no implicará mayor separación entre ellos)
- `margin` añadirá sólo 25px de separación, pues aún cuando implica que habrá un margen de 25px abajo de Barry y 25px de margen sobre Janet, el comportamiento de `margin` en este caso hará que sólo se considere al mayor de estos números como la separación final (con 25px, ambos elementos cumplen con la separación que requieren)
- `border` añadirá los últimos 2px de separación, dado que agregará un borde de 1px debajo de Barry y otro de 1px por sobre Janet

**Pauta**:

- 0.3 puntos por correctamente determinar qué propiedades son las que influyen (no es necesario que sean explícitos, basta con que en el contexto de su respuesta hayan mencionado sólo estas 3 propiedades – y a ninguna otra –, aún cuando la conclusión en cada una esté incorrecta)
- 0.3 puntos por determinar la separación de `padding`
- 0.3 puntos por la separación de `margin` (0.1 por una respuesta de 50px, 0.3 por responder 25px)
- 0.3 puntos por la separación de border
- 0.3 puntos por la respuesta final correcta de 47px (lo que implica que no hayan contaminado su cálculo con otros factores, por ejemplo, no sólo el sumar correctamente 3 números :) )

### Ejercicio 3 (1.5 puntos)

No son equivalentes. Aún cuando el resultado final en ambos casos será el mismo _output_ en consola, la ejecución de ambas es diferente por cómo se esperan las promesas en cada caso, serial versus paralelo:

- en el primer caso, se esperará a que se resuelva el `fetchBee` de Barry, y sólo cuando esto termine, se comenzará y esperará el `fetchBee` de Janet. Cuando el segundo haya terminado, se mostrarán sus nombres en el _output_
- en el segundo caso, en cambio, ambos `fetchBee` ocurrirán en paralelo; igual se esperará a que ambas promesas se resuelvan y sólo cuando ambas estén resueltas se mostrará en consola el mismo mensaje anterior

**Pauta**: 0.75 puntos por correctamente explicar el primer caso como ejecución serial de procesos asíncronos, y 0.75 puntos por explicar el segundo caso como ejecución paralela de procesos asíncronos.

### Ejercicio 4 (1.5 puntos)

El arreglo tiene queda con 80 elementos, entre los cuales sólo tiene 30 abejas.

Se crean dos Hives, una en que se le entrega como argumento el número 10 y la otra el número 20. El objeto que retorna `makeHive` contiene la función `makeBee`, y lo importante aquí es que la función `makeBee` creada tendrá, como parte de su _closure_, tanto al argumento `maxBees` de `makeHive` como también a un contador que parte inicialmente en 0. Cada vez que se llame esa función irá aumentando el contador y retornará una abeja sólo si el contador no ha alcanzado el valor de `maxBees`; en caso contrario, retornará `null`. Esto implica que la función `makeBee` sólo podrá retornar un máximo de abejas, luego de lo cual sólo retornará `null`.

`hive1` tendrá una función `makeBee` que sólo retornará una abeja las 10 primeras veces que es llamada, mientras que la función `makeBee` de `hive2` lo hará las primeras 20 veces.

El loop tendrá 40 iteraciones, y en cada una de ellas se agregarán 2 nuevos elementos al arreglo (de ahí que surgen los 80 elementos). En las 10 primeras iteraciones, ambas hives entregarán una abeja (completando 20), en las segundas 10 iteraciones sólo hive2 retornará una abeja mientras que hive1 `null` (completando otras 10 abejas). En todas las restantes 20 iteraciones ninguna hive retornará una abeja (así que tendremos 40 elementos `null`).

Conceptos relevantes:
- closure de la función `makeBee`, conteniendo tanto un contador independiente en cada objeto creado como también una varible `maxBees` diferente dependiendo del argumento entregado
- el hecho de que al llamar a una función no se entrega "la variable" como argumento, sino el valor de esa variable. Por lo que aún cuando la variable cambie de valor (como la signación de 40 a `max`) no afectará los argumentos entregados a `makeHive` anteriormente (en donde se crearon nuevas variables locales `maxBees` par almacenar el valor que en ese momento tenía `max`)

**Pauta**:
- 0.5 puntos por llegar al resultado correcto respecto al arreglo
- 0.5 puntos por explicación relacionada al closure de `makeBee`
- 0.5 puntos por considerar correctamente el paso de argumentos (aún cuando no haya una explicción explícita en este caso, dado que es algo "normal" en la mayoría de los lenguajes)

## Pregunta 3 (25%)

Hay varios temas necesarios de abordar, y se le asignará a cada uno de ellos un puntaje máximo y 3 niveles de logro:
- Insuficiente (I): no menciona el tema, o lo menciona con una solución incorrecta o muy incompleta
- Suficiente (S): menciona el tema y plantea una solución correcta pero con errores menores o no del todo completa
- Logrado (L): menciona el tema y plantea una solución correcta, con suficiente detalle y sin errores

Notar que en cada punto pueden haber variaciones por distintos enfoques tomados, que hay que considerar correctos si es que son compatibles con el enunciado. Un ejemplo de esto es cómo interpretar las sugerencias de búsquedas previas: puede ser como se considera en esta respuesta de ejemplo (un cuadro con un listado de valores de búsqueda anteriores) o bien estilo Google, que al ir escribiendo algo en el campo de búsqueda van apareciendo las sugerencias debajo del campo de búsqueda.

Los temas y sus respectivos puntajes son:

### Setup de la aplicación React (L: 1 pto; S: 0.5 ptos)

- En el template de la acción que devolverá la página en donde se cargará la aplicación React, agregar un elemento (normalmente un `div`) suficientemente identificado (con un atributo `id` por ejemplo)
- En el archivo JS que se encargará de partir la aplicación React, obtendremos el objeto DOM que representa al elemento del punto anterior y realizaremos el montaje de la aplicación React (a partir del componente raíz de la aplicación) en el mismo

### Endpoints por el lado del servidor (L: 1 pto, S: 0.5 ptos)

Serán necesarios los siguientes endpoints para que la aplicación React pueda obtener los datos que necesita, todos ellos entregando JSON como su respuesta:
- endpoint que recibe un término de búsqueda y entrega resultados de búsqueda
- endpoint que entrega un listado de términos de búsqueda anteriores que ha realizado el usuario actual

Ambos endpoints pueden ser creados en en el mismo router existente que maneja la búsqueda. El de los resultados podría ser una respuesta JSON incluso en la misma acción que actualmente ya entrega los un HTML con los resultados, mientras que el de las sugerencias probablemente no existe actualmente y habría que agregarlo.

### Datos iniciales para la aplicación React (L: 0.3 ptos, S: 0.1 ptos)

La aplicación React necesita, como mínimo, conocer qué _paths_ son los que necesita utilizar para obtener resultados de búsqueda y búsquedas anteriores. Estos se podrían entregar como un atributo `data-*` en el elemento contenedor de la aplicación, aunque en este caso también podría ser válido que los _paths_ estén directamente en el código React.

### Separación en diferentes componentes orientados a la UI de búsqueda (L: 1.5 ptos, S: 0.8 ptos)

Para la UI de búsqueda, podemos crear componentes como los siguientes:
- field de búsqueda que recibe como props el valor actual ingresado y una función a la cual llamar cada vez que el usuario escriba cambios en este campo
- botón para enviar la búsqueda, que puede ser un `button` de tip o `submit` para así gatillar "submit" en el formulario que lo contenga directamente
- componente formulario, que contendrá un `form` e incluirá a los dos componentes anteriores. Este componente será _stateful_, pues almacenará el término actual de búsqueda, y tendrá un método que entregará como prop (luego de realizar un `bind`) al field, para recibir los avisos de que el valor de búsqueda cambió. Además, recibirá como props una función que llamará cada vez que ocurra un evento "submit" del formulario
- un componente para representar un único resultado de búsqueda, que reciba como props uno de los resultados y lo despliegue. Probablemente contendrá un título, una descripción y parte o su totalidad será además un link a la URL del resultado de búsqueda
- un contenedor de los resultados de búsqueda, que reciba como props todos los resultados a mostrar, y realice una iteración sobre ellos (con `map`) para transformar cada uno de esos resultados en una instancia del componente anterior que representa un resultado de búsqueda

### Componentes para mostrar búsquedas anteriores (L: 0.7 ptos, S: 0.4)

- un componente para representar un único término de búsqueda y una función a llamar cuando se reciba un click (recibidos como props), entregándole como argumento el término de búsqueda
- un componente que recibe como props todos los términos de búsqueda anteriores y los despliega mediante un `map` transformándolos cada uno en el componente descrito en el punto anterior. Además recibe una función a llamar cuando algún término reciba un click

### Componentes para la comunicación y almacenaje de datos (L: 1.5 ptos, S: 0.8 ptos)

Éste podría ser un único componente, que sería el raíz de la aplicación (o directamente utilizado por un componente raíz), que contenga tanto el formulario de búsqueda, como el listado de resultados y el listado de búsquedas anteriores. Éste componente sería _stateful_ y tendría como parte de su estado tanto los datos de los resultados de búsqueda actuales como también los datos de términos de búsqueda anteriores. Necesitará, además del `render` que incluya los componentes mencionados, los siguientes métodos:
- `fetchSuggestions` uno que realice un `fetch` para cargar los datos de búsquedas anteriores
- `search`, que dado un término de búsqueda realice un `fetch` para obtener los resultados de búsqueda
- un `componentDidMount` que llamará a `fetchSuggestions` al momento de que se monte este componente
- un método para entregar como argumento al formulario, de manera que al ser llamado (por submit de formulario) use el término de búsqueda recibido para llamar a `search` y luego actualizar el `state` (mediante `setState`) con ellos
- un método similar al anterior pero para entregárselo a las sugerencias de búsqueda


## Pregunta 4 (25%)

**Nota general**: En cada punto a evaluar se pueden tolerar errores sintácticos menores (de los atribuibles a no estar programando esto en un computador) sin ningún descuento, siempre y cuando no denoten un error a nivel conceptual. Errores sintácticos mayores o errores conceptuales menores pueden alcanzar la mitad del ítem. Errores mayores a eso implicará 0 puntos.

### Ejercicio 1

Una solución de ejemplo puede encontrarse [aquí](./code/pregunta4/src/assets/js/components/Initiatives.jsx).

**Pauta**:
- 1 punto por declaración correcta del componente, incluyendo el recibir `props` que contengan las iniciativas (no se requiere que destructuren el argumento como en el ejemplo)
- 0.5 puntos por retornar JSX contenido en un único elemento raíz
- 0.75 puntos por iterar en las iniciativas (con `map`)
- 0.75 puntos por hacer _Render_ correctamente de cada iniciativa (`li` con `title` y _link_ a la `url`)

### Ejercicio 2

Una solución de ejemplo puede encontrarse [aquí](./code/pregunta4/src/assets/js/components/InitiativesContainer.jsx).

**Pauta**:
- 1 punto por declaración del componente (que en este caso necesita ser del tipo clase) más su constructor
- 1 punto por método `render` que utilice al componente del ejercicio anterior cuando ya tenga las iniciativas (no es requisito tener un "loading", pero sí que no se llame al componente anterior sin tener los datos, a menos que tal interacción haya sido soportada)
- 1 punto por `componentDidMount` que cargue los datos mediante un `fetch` (o similar). Importante considerar el parsear los datos si es necesario (ojo que algunas librerías permitidas, como superagent, parsean automáticamente la respuesta cuando es algo como JSON)

### Bonus

Un ejemplo de bonus se puede ver en las versiones alternativas de [`Initiatives`](./code/pregunta4/src/assets/js/components/InitiativesWithBonus.jsx) y [`InitiativesContainer`](./code/pregunta4/src/assets/js/components/InitiativesContainerWithBonus.jsx). La aclaración respecto a mitad de puntaje o 0 puntos aplica de igual manera.