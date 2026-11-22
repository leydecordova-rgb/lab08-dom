class Pelicula {
  constructor(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
    this.vista = false;
  }

  alternarVista() {
    this.vista = !this.vista;
  }

  descripcion() {
    const estado = this.vista ? "Vista" : "Pendiente";
    return `${this.titulo} (${this.genero}) - ${estado}`;
  }
}

const peliculas = [];
const formulario = document.getElementById("form-pelicula");
const lista = document.getElementById("lista-peliculas");

function agregarPeliculaALista(pelicula) {
  const li = document.createElement("li");

  const texto = document.createElement("span");
  texto.textContent = pelicula.descripcion();

  const divAcciones = document.createElement("div");
  divAcciones.classList.add("acciones");

  // Botón para modificar el estado del objeto y actualizar el texto del DOM
  const btnVista = document.createElement("button");
  btnVista.textContent = "Marcar vista";
  btnVista.classList.add("btn-estado");
  btnVista.addEventListener("click", () => {
    pelicula.alternarVista();
    texto.textContent = pelicula.descripcion();
    li.classList.toggle("vista");
    btnVista.textContent = pelicula.vista ? "Desmarcar" : "Marcar vista";
  });

  // Botón para borrar usando li.remove() como indica la pista
  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.classList.add("btn-borrar");
  btnBorrar.addEventListener("click", () => {
    li.remove();
    const indice = peliculas.indexOf(pelicula);
    if (indice !== -1) {
      peliculas.splice(indice, 1);
    }
  });

  divAcciones.append(btnVista, btnBorrar);
  li.append(texto, divAcciones);
  lista.appendChild(li);
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const inputTitulo = document.getElementById("titulo");
  const selectGenero = document.getElementById("genero");

  const tituloLimpio = inputTitulo.value.trim();
  if (!tituloLimpio) return;

  const nuevaPelicula = new Pelicula(tituloLimpio, selectGenero.value);
  peliculas.push(nuevaPelicula);

  agregarPeliculaALista(nuevaPelicula);
  formulario.reset();
});