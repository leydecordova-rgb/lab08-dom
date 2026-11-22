# Tarea: Mi componente interactivo

## Componente elegido
Lista interactiva de **Películas por Ver** que permite agregar películas con título, género y año mediante un formulario, marcarlas como vistas o pendientes, y eliminarlas de la lista de forma dinámica.

## Codigo principal
```js
// Clase propia
class Pelicula {
  constructor(titulo, genero, anio) {
    this.titulo = titulo;
    this.genero = genero;
    this.anio = anio;
    this.vista = false;
  }

  alternarVista() {
    this.vista = !this.vista;
  }

  descripcion() {
    const estado = this.vista ? "[Vista]" : "[Pendiente]";
    return `${estado}${this.titulo} (${this.anio}) -${this.genero}`;
  }
}

// Evento click para marcar o desmarcar como vista
btnVista.addEventListener("click", () => {
  pelicula.alternarVista();
  texto.textContent = pelicula.descripcion();
  li.classList.toggle("vista", pelicula.vista);
  btnVista.textContent = pelicula.vista ? "Desmarcar" : "Marcar vista";
});

// Evento click para eliminar el elemento del DOM
btnBorrar.addEventListener("click", () => {
  li.remove();
});

// Evento submit para agregar una nueva película desde el formulario
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const inputTitulo = document.getElementById("titulo");
  const inputGenero = document.getElementById("genero");
  const inputAnio = document.getElementById("anio");

  const nuevaPelicula = new Pelicula(
    inputTitulo.value.trim(),
    inputGenero.value.trim(),
    Number(inputAnio.value)
  );

  renderizarPelicula(nuevaPelicula);
  formulario.reset();
  inputTitulo.focus();
});
```

## Pruebas realizadas
| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| Completar título, género y año y hacer clic en "Agregar" | Se instancia un nuevo objeto `Pelicula` y se añade un elemento `<li>` a la lista con estado `[Pendiente]` sin recargar la página. | Si |
| Hacer clic en el botón "Marcar vista" de una película | El estado interno cambia a `[Vista]`, el texto se muestra tachado y el botón cambia su texto a "Desmarcar". | Si |
| Hacer clic en el botón "Borrar" de una película | El elemento `<li>` correspondiente se elimina del DOM mediante `remove()` sin afectar al resto de elementos. | Si |
| Intentar enviar el formulario dejando campos vacíos | El navegador impide el envío por los atributos `required` y no se agrega ningún elemento incompleto. | Si |

## Por que disene asi mi clase
Elegí los atributos `titulo`, `genero`, `anio` y `vista` porque representan los datos esenciales para identificar cada película y llevar control de su estado. Definí el método `descripcion()` para encapsular el formato de texto que se renderiza en el DOM y `alternarVista()` para modificar la propiedad `vista` del objeto directamente al dispararse el evento `click`.