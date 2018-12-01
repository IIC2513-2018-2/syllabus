# Pauta Examen

## Pregunta 1 (25%)

1. Las diferencias se dan en dos aspectos:
    - punto desde donde se relativiza la posición: en el caso de `relative`, los cambios de posición (utilizando `top`, `bottom`, `left` y `right`) serán relativos a la ubicación original del elemento dentro del documento; en el caso de `absolute` será relativo al ancestro más cercano que tenga un posicionamiento diferente a `static` ("posicionado"); y en el caso de `fixed` será relativo al _viewport_
    - uso de espacio dentro del documento: en el caso de `relative` el elemento seguirá utilizando la misma ubicación que utilizaba originalmente (aún cuando se vea en otra posición), mientras que en el caso de `absolute` y `fixed` el elemento dejará de utilizar ese espacio, como si su nueva ubicación existiese en una capa ("layer") diferente al resto del documento.

    **Pauta**: 0.5 puntos por cada una de los dos aspectos en que hay diferencias. Dentro de cada punto, 0.2 puntos por el primer valor, 0.2 por el segundo valor y 0.1 por el tercer valor correctos. Si es que en lugar de plantearlo de esta manera definieron cada uno de los 3 valores, pueden obtener el puntaje si explicitaron cada uno de estos dos aspectos dentro de las definiciones de cada valor.

2. La recomendación general para los elementos `link` (para agregar hojas de estilo) es agregarlos dentro del elemento `head` del documento, para que se carguen antes de comenzar a desplegar el `body` y así evitar tener un FOUC (_flash of unstyled content_). En cuanto a `script`, cuando se utiliza para incluir archivos JavaScript externos, la recomendación general es incluirlos al final del elemento `body` cuando sea posible, para así no demorar el _rendering_ del documento por carga y ejecución de código JavaScript. Por supuesto ambos son recomendaciones generales, siempre hay excepciones que, por ejemplo, fuerzan a ubicar un `script` en `head` (cuando es necesario que se ejecute lo más temprano posible).

    **Pauta**: No es necesario que cubran casos excepcionales, sino que basta con los casos generales. 0.5 puntos por cada caso (0.25 puntos por la recomendación en sí (en `head`, al final del `body`) y 0.25 puntos por la razón).

3. ¡¡¡Promesas!!! La principal razón es que al tener múltiples procesos asíncronos que hay que esperar, con dependencias entre sí, utilizando _callbacks_ es muy posible que terminemos con un "callback hell" o "pyramid of doom", que se refiere a una seria de llamados en que se entrega una función como argumento, dentro de la cual también hay más y más funciones pasadas como argumento. En cambio, con promesas ese flujo se puede "aplanar" mucho más, tanto por la posibilidad de encadenar (_chaining_) promesas como también por APIs que vienen de la mano de las promesas (`Promise.all` por ejemplo).

    **Pauta**: No hay una respuesta estrictamente correcta entre una y otra preferencia, por lo que la pregunta se evalúa por la argumentación. Debe notarse en la argumentación que conocen las fortalezas y debilidades de cada opción como para fundamentar su respuesta. Dependiendo de lo que pueda deducirse desde la argumentación, las opciones de putnaje son:
        - 0 puntos si no argumentó realmente, o si argumentó erróneamente, o si es una argumentación muy pobre (muy superficial, como por ejemplo decir "me gustan más", o "son más complicadas")
        - 0.5 puntos si el argumento es correcto, pero no con suficiente profunidad; por ejemplo, mencionando el _callback hell_ pero no explicando por qué se produce o cómo las promesas ayudan a que no se produzca
        - 1 punto si es una respuesta correcta, fundamentada y que se puede extraer conocimiento respecto a cómo funcionan promesas y _callbacks_

4. Son dos preguntas en realidad:
    - Un _layout_ fluido es uno en que el tamaño de los elementos no es fijo, sino que "fluye" con el cambio del tamaño de la ventana del _browser_. Si la ventana crece en ancho, los elementos dentro del documento también se volverán más anchos. Esto suele ocurrir proporcionalmente, aunque no es requisito que lo sea. Esto es una de las bases de una UI _responsive_.
    - Los _breakpoints_ son otra de las bases de una UI _responsive_, y se refieren a ciertos puntos en cuanto a tamaño de la ventana (normalmente el ancho) en que ocurrirán cambios más drásticos en la pantalla, en cuanto a la distribución de los elementos dentro de la misma. Por ejemplo, en lugar de que un elemento simplemente se expanda proporcionalmente por el aumento del ancho de la ventana, éste podría cambiar completamente su ubicación dentro de la UI, como un menú que se mueve desde arriba del documento hacia el lado izquierdo del mismo. Estos _breakpoints_ se logran mediante la utilización de _media queries_ en CSS.

    **Pauta**:
        - 0.5 puntos por _layout_ fluido. No es necesario que sea una respuesta tan técnica, basta con que expliquen que los elementos aumentan o disminuyen su tamaño de acuerdo al aumento o disminución del tamaño de la ventana.
        - 0.5 puntos por _breakpoints_. Al igual que lo anterior, no necesita ser una respuesta muy técnica. Lo importante es que o bien mencionen que son puntos en que ocurre un cambio drástico en la distribución del _layout_, o bien que son los puntos definidos por _media queries_

5. En general, las restricciones de REST que como protocolo cumple, pero entre las más relevantes están la de que no tenga estado (_statelessness_) y de que para todos los efectos un cliente no puede saber si la respuesta proviene del punto original de conexión o de otro servidor interno que generó la respuesta (_layered system_). Esto implica que el _load balancer_ en este caso puede recibir el request HTTP, enviarle ese request HTTP a otro servidor, ese otro servidor generar la respuesta y enviársela al _load balancer_ para que éste finalmente envíe esa respuesta al cliente.

    **Pauta**: 0.6 puntos si mencionan una de estas dos características principales, y 0.4 puntos si mencionan la segunda característica principal. Si mencionan alguna característica incorrecta (que no es característica de HTTP o lo es pero no tiene ninguna incluencia en el contexto de la pregunta) tienen un descuento de 0.4 puntos.

6. El principal riesgo es de XSS ("cross site scripting"), que consiste en que un usuario que publica mensajes podría insertar, por ejemplo, un tag `script` con contenido JavaScript malicioso (por ejemplo, robando y enviando las _cookies_ hacia algún otro lugar). Como los caracteres se despliegan en los otros usuarios directamente, sin ser escapados, sus _browsers_ interpretarán (y ejecutarán) directamente cualquier cosa que el otro usuario maliciosamente haya publicado.

    **Pauta**: No es necesario que sea una respuesta tan técnica (menos aún con el nombre XSS), pero sí deben haberse percatado de que este tipo de interacción le permite a un usuario controlar lo que el browser de otro usuario ejecutará en términos de código JavaScript. Si explicaron eso, tienen 1 punto. Si explicaron que cualquier trozo de HTML escrito en el comentario se verá como tal en el feed de otros usuarios, pero sin notar que la amenaza principal de esto es ejecución de código JavaScript, entonces se les asigna 0.5 puntos.

## Pregunta 2 (25%)

1. Dado que tenemos una relación 1:N entre usuarios y mascotas, hay dos opciones válidas:
    - agregar la relación y los datos de la misma dentro del modelo `Pet`: necesito crear una migración y los posteriores cambios en el archivo del modelo `Pet` para agregar tanto un `userId` como cualquier otro dato asociado a la relación (como la fecha de adopción). Además, puedo agregarle a `Pet` un `belongsTo` y a `User` un `hasMany` en sus asociaciones para que en mi modelo pueda utilizar esta relación entre ellos
    - crear un nuevo modelo (y tabla asociada) para representar esta relación: necesito crear el modelo y migración para un nuevo modelo (`PetUser`, por ejemplo), que tendrá un `petId`, un `userId` y todos los demás atributos que se quieran guardar en la relación (como la fecha de adopción). Además, en este caso deberia definir en la migración un índice con `unique` para `petId`, para impedir que se pueda asociar una mascota a dos usuarios. Finalmente, agrego las relaciones `hasOne` desde `Pet` a `PetUser` y `hasMany` desde `User` a `PetUser`.

    **Pauta**: Hay más de una solución posible, y sólo necesitan explicar una de ellas. Pero en general, debieran mencionar la necesidad de crear una migración con las columnas o tablas a agregar (0.5 puntos), los cambios en cuanto a atributos en el archivo de modelo mismo (0.5 puntos) y el agregar la(s) relación(es) en el archivo de modelo (0.5 puntos).

2. Una solución válida que saca provecho de toda la paralelización que las restricciones nos permiten, puede ser la siguiente:

    ```js
    async function foo() {
      const promiseForC = fc();
      const promiseForD = fd();
      const [b, d, e] = await Promise.all([
        fa().then(a => fb(a)),
        promiseForD,
        promiseForC.then(c => c % 2 === 0 ? promiseForD.then(d => fe(d)) : fe()),
      ]);
      return b + d + e;
    }
    ```

    Pero además, como no sabremos si tendremos que llamar a `fe` con o sin el valor de `fd` hasta luego de resuelto `fc`, podríamos intentar ambas posibilidades en paralelo. Una vez se resuelva `fc` sabremos cuál de las dos utilizar, pero al menos habremos empezado a avanzar en esos procesos asíncronos más anticipadamente. Notar que es discutible si esta opción es mejor o peor que la opción anterior, dado que estamos llamado a `fe` dos veces y esto podría, en un caso real, ser o bien indiferente o implicar una carga adicional que haría que ambos llamados a `fe` tomen más tiempo del realmente necesario (y, por tanto, no salirnos a cuenta).

    ```js
    async function foo() {
      const promiseForC = fc();
      const promiseForD = fd();
      const promiseForEWithoutD = fe();
      const promiseForEWithD = promiseForD.then(d => fe(d));
      const [b, d, e] = await Promise.all([
        fa().then(a => fb(a)),
        promiseForD,
        promiseForC.then(c => (c % 2 === 0 ? promiseForEWithD : promiseForEWithoutD)),
      ]);
      return b + d + e;
    }
    ```

    **Pauta**: Notar que hay varias soluciones posibles, e incluso diferentes maneras de escribir la misma solución (con `async/await` o sin ello, por ejemplo). Por ello, tendremos una asignación de puntaje por diferentes requisitos que la respuesta podría o no cumplir:
    - (0.2 ptos) `fb` se llama luego de resuelta `fa`, con su valor como parámetro
    - (0.3 ptos) si `fc` es par, se utiliza el valor de `fe` llamado con el valor resuelto de `fd` como parámetro, o sin el parámetro en caso contrario
    - (0.2 ptos) los procesos de `fa`/`fb` y del resto ocurren en paralelo
    - (0.1 ptos) salvo por `fe` (por las dos soluciones válidas expuestas anteriormente), ninguna otra función se llama más que una sola vez
    - (0.1 ptos) `fc` y `fd` se ejecutan en paralelo
    - (0.2 ptos) `fd` y `fe` se ejecutan en paralelo cuando `fc` es impar
    - (0.1 ptos) se crea una función que ejecute todo lo anterior
    - (0.3 ptos) la función retorna la suma pedida correctamente, esperando todos los resultados que se necesitan

    Errores menores en código (como olvidarse de ponerle `async` a la función si es que se utiliza `await`, o a lo más un `await` faltante por ahí que se note que fue omisión por olvido y no por desconocimiento) pueden ignorarse. Si no, debiera afectar el no cumplimiento de alguno de los ítems de puntaje expuestos anteriormente.

3. Una buena solución es dejar que los _route handlers_ que ejecuten esta operación lancen el error (no le hagan `catch`). Podemos luego agregar un _middleware_ **antes** de todas rutas que podrían tener estos errores, y en ese _middleware_ esperamos la resolución de `next` (que podría resultar en una promesa rechazada, por el error lanzado) y, en caso de ser una promesa rechazada, capturamos ese error, y hacemos render de la página con el "Oops, I did it again".

    **Pauta**:
    - 0.5 puntos por explicar que necesitamos agregar un _middleware_ anterior a todas las rutas que llamarán a esta operación
    - 0.5 puntos por explicar que el _middleware_ debe llamar a `next` primero, y esperar la resolución de esa promesa entregada, para poder capturar el error
    - 0.5 puntos por explicar que en este mismo _middleware_ podemos tener el render de ese template de error

4. La solución más sencilla es no llamar a esta API externa en el _request_ inicial de esta página, sino que enviar la respuesta con todo el resto salvo esta información. En esa página que se carga, mediante JavaScript podemos gatillar un _request Ajax_ (con `fetch`, por ejemplo) a un nuevo _endpoint_ de nuestra aplicación que sí haría el llamado a la API externa y entregaría un resultado que luego, mediante este mismo script JavaScript, podemos insertar en la página previamente cargada.

    **Pauta**: La solución anterior es una de las opciones más sencillas (el enunciado pedía solucionar esto "fácilmente"), y por lo tanto obtendrá 1.5 puntos. Si se plantea una solución que también solucione este problema de la carga inicial lenta, pero que sea considerablemente más difícil que esto, se obtendrá un máximo de 1.2 puntos. Notar que utilizar React en lugar de JavaScript plano no es necesariamente más difícil si se piensa generar HTML desde JavaScript a partir de los datos de la API externa, pues dependerá de qué tan compleja sea la UI asociada a esa información. Estrictamente, eso sí, dado que originalmente teníamos templates en el lado del servidor para hacer _rendering_ de esta información, probablemente lo más sencillo sería que ese nuevo _endpoint_ retorne HTML (en lugar de JSON, por ejemplo) que desde JavaScript podamos directamente insertar en un cierto punto del DOM.
    
    Los puntos relevantes de esta solución son dejar de llamar la API externa en el _request_ inicial (0.5 puntos), agregar otro _endpoint_ (0.5 puntos) que permita ya sea obtener un _partial_ HTML con los resultados de la API o datos directamente (en formato JSON, por ejemplo) y finalmente utilizar JavaScript para llamar a ese _endpoint_ y insertar los resultados en el DOM (0.5 puntos).

    Si la solución planteada involucra llamar a esta API externa desde el lado del cliente directamente, se considerará con un máximo de 0.5 puntos (suponiendo que la explicación esté correcta), ya que esto expondría el _token_ mencionado en el enunciado y eso practicamente nunca será aceptable.

## Pregunta 3 (25%)

### Solución de ejemplo

Dado que necesitamos poder identificar a un usuario sin que tenga una cuenta registrada en la aplicación, de manera de poder recordarlo entre una visita y otra, necesitamos basar nuestra solución en _cookies_, ya sea directamente o indirectamente a través del manejo de sesión.

Creamos un _middleware_ que se ejecute independiente del _path_ del _request_ y en él hacemos el chequeo de existencia de una _cookie_ asociada a la raza. De no haber una, creamos una _cookie_ con la URL que el usuario quería visitar (para luego poder realizar la redirección hacia esa URL) y redirigimos a la página de selección de raza. Esa página simplemente debe hacer que se genere un _request_ con la raza seleccionada y luego el _route handler_ que procesa ese request podrá tanto crear una _cookie_ para almacenar la raza seleccionada como también crear la redirección a la URL original (almacenada en la otra _cookie_) de haber una (o al _home_ en caso contrario), borrándola para que no sea usada nuevamente.

Notas:
- usar `ctx.session` es totalmente válido, pero en esta respuesta se utilizará _cookies_ directamente para que los alumnos puedan ver esta otra alternativa, probablemente menos usada por ellos.
- la UI puede ser cualquiera, siempre y cuando sea consistente con el resto de lo planteado como solución (por ejemplo, en la siguiente solución se usa un formulario, y se reciben los datos acorde a ese formulario)

```js
const COOKIE_EXPIRATION = 2 * 7 * 24 * 60 * 60 * 1000; // two weeks
// middleware que chequea raza, debe ser agregado en la Koa app
app.use((ctx, next) => {
  const race = ctx.cookies.get('race');
  if (race) {
    ctx.state.race = race;
  } else {
    ctx.cookies.set('returnTo', ctx.path, { expires: new Date(Date.now() + COOKIE_EXPIRATION) });
    ctx.redirect('/races');
  }
});

// route handlers para procesar /races (agregado en algún punto como route.use('/races', racesRouter.routes()))
router.get('/', (ctx) => {
  return ctx.render('races', { submitPath: ctx.router.url('races-selection') });
});

// route handler para procesar request desde /races
router.put('races-selection', '/selection', (ctx) => {
  ctx.cookies.set('race', ctx.request.body.race, expires: new Date(Date.now() + COOKIE_EXPIRATION) });
  const returnTo = ctx.cookies.get('returnTo');
  if (returnTo) {
    ctx.cookies.set('returnTo'); // deletes the cookie
    ctx.redirect(returnTo);
  } else {
    ctx.redirect('/');
  }
});
```

```ejs
<form method="post" action="<%= submitPath %>">
  <input type="hidden" name="_method" value="put" />
  <label>Selecciona tu raza</label>
  <select name="race">
    <option value="elves">Elfos</option>
    <option value="dwarfs">Enanos</option>
    <option value="orcs">Orcos</option>
    <option value="men">Hombres</option>
    <option value="hobbits">Hobbits</option>
  </select>
  <input type="submit" value="Enviar" />
</form>
```

### Pauta

En cada uno de los siguientes puntos, se puede asignar 0 puntos si la respuesta tiene errores importantes, la mitad del puntaje si contiene errores menores o el puntaje completo si está correcta o con detalles que puedan ser ignorables (como sintaxis, o impresiciones respecto a cómo usar la sesión (siempre y cuando se note claramente la manera en que se quizo utilizar y ésta está correcta)).

- 1.5 puntos por plantear una solución en palabras que sea compatible con el problema planteado
  - 1 punto por hacer mención ya sea a _cookies_ o sesión, explicando qué se guardará en ellas (0.5 puntos si sólo piensan en la raza, pero no en la URL a la cual volver)
  - 0.5 puntos por el resto de la explicación con respecto a los _middlewares_
- 0.5 puntos por _route handler_ para rendering de la página de selección de raza
- 1 punto por template EJS de selección de raza
- 1 punto por verificar precencia de _cookie_ con la raza y redirección en caso contrario
- 0.5 puntos por exponer la raza a los siguientes _middlewares_ (a través de `ctx.state`) si es que estaba presente
- 0.5 puntos por almacenar URL a la cual devolverse luego de selección de raza y realizar esta redirección
- 1 punto por procesar respuesta de selección de raza y almacenar esa información en _cookies_

## Pregunta 4 (25%)

### Parte 1

Hay dos cosas relevantes de esta respuesta:
1. Cumplir con ser RESTful y Resource Oriented: dado que utilizamos HTTP, los aspectos más relevantes aquí son elegir un _path_ y método HTTP que represente la operación que proveemos sobre un cierto recurso (un _craft_ en este caso, con operación "obtener" => GET) y la restricción más olvidada de REST, HATEOAS, que básicamente nos implica agregar URLs que le den navegabilidad a nuestra API.
2. La buena práctica de no exponer la base de datos directamente como respuesta: hay atributos en la base de datos que no solo no son necesarios, sino que no debieran siquiera exponerse (como el `internalCode` de una manualidad). Para ello, podemos ya sea realizar la consulta a la base de datos con una _whitelist_ de atributos (normalmente más eficiente en este caso), o bien realizar un filtro de atributos posterior, pero antes de generar la respuesta final.

Hay otros factores que son relevantes pero que no se considerarán en esta oportunidad, como por ejemplo que es mucho mejor obtener los datos en una única consulta con _joins_ (como en la respuesta de ejemplo) en lugar de múltiples consultas.

Una posible respuesta es la siguiente:

```js
router.get('crafts-show', '/crafts/:id', async (ctx) => {
  const craft = await ctx.orm.craft.findOne({
    attributes: ['id', 'title', 'photoUrl', 'description', 'createdAt'],
    include: [
      { model: ctx.orm.crafter, attributes: ['id', 'name', 'type', 'age'] },
      { model: ctx.orm.category, attributes: ['id', 'name'] },
    ],
    where: { id: ctx.params.id },
  });
  const response = craft.toJSON();
  response.href = ctx.router.url('crafts-show', response.id);
  response.crafter.href = ctx.router.url('crafters-show', response.crafter.id);
  response.category.href = ctx.router.url('categories-show', response.category.id);
  ctx.body = response;
});
```

**Pauta**:
- 0.6 puntos por estructura básica de la ruta (declaración, argumentos, etc)
- 0.7 punto por consulta o consultas al ORM
- 0.5 puntos por asignar la respuesta a `ctx.body`
- 0.5 puntos por elección resource oriented de path y método
- 0.4 puntos por cumplir con HATEOAS
- 0.3 puntos por filtrar la respuesta que se entrega al cliente

### Parte 2

Los factores relevantes aquí, además de cumplir con los requerimientos explícitos del componente, son:
1. Usar más de un componente, al menos uno para el intercambio de datos y otro para el despliegue de la información
2. Manejar el estado del componente que obtiene los datos
3. Obtener los datos cuando el componente se monta

```jsx
class CraftContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      craft: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCraft(this.props.id);
  }

  fetchCraft(id) {
    this.setState({ loading: true });
    fetch(`/crafts/${id}`)
      .then(craft => this.setState({ craft, loading: false }));
  }

  render() {
    return this.state.loading
      ? <div>Loading...</div>
      : <Craft craft={this.craft} />;
  }
}

function Craft(props) {
  const { craft, { craft: crafter } } = props;
  return (
    <div>
      <h1>{craft.title}</h1>
      <p>
        <img href={craft.photoUrl} alt="Craft Photo" />
        {craft.description}
      </p>
      <dl>
        <dt>Creation date</dt>
        <dd>{craft.createdAt}</dd>
        <dt>Category</dt>
        <dd>{craft.category.name}</dd>
        <dt>Crafter</dt>
        <dd>{crafter.type} {crafter.name}, {crafter.age} years old</dd>
      </dl>
    </div>
  );
}
```

**Pauta**:
En cada uno de los siguientes puntos, si contienen errores menores de sintaxis atribuibles a escribir código con lápiz y papel, pueden ignorarse. Si hay errores conceptuales menores o sintácticos mayores, se puede otorgar la mitad de puntaje si está cerca de una solución correcta.

- 0.4 puntos por recibir como prop el id de la manualidad
- 0.7 puntos por mostrar todos los atributos pedidos (title, photo, crafter's name, etc) mediante JSX
- 0.6 puntos por realizar `fetch` desde la API y almacenar los datos en el estado
- 0.5 puntos por mantener estado de `loading` y mostrar un mensaje mientras esto ocurre
- 0.4 puntos por comenzar carga de datos al montar el componente
- 0.4 puntos por separación entre un componente "smart" y otro "dumb"