class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoDeNacimiento = añoDeNacimiento;
  }

  mostrarGenracion(añoDeNacimiento) {
    if (añoDeNacimiento >= 1994 && añoDeNacimiento <= 2010) {
      document.writeln("Perteneces a la generación Z <br>");
      document.writeln("Su rasgo caracteristico es: 😋 Irreverencia <br>");
    } else if (añoDeNacimiento >= 1983 && añoDeNacimiento <= 1993) {
      document.writeln("Perteneces a la generación Y (millenials) <br>");
      document.writeln("Su rasgo caracteristico es: 😖 Frustración <br>");
    } else if (añoDeNacimiento >= 1969 && añoDeNacimiento <= 1980) {
      document.writeln("Perteneces a la generación X <br>");
      document.writeln(
        "Su rasgo caracteristico es: 😎 Obsesión por el éxito <br>"
      );
    } else if (añoDeNacimiento >= 1949 && añoDeNacimiento <= 1968) {
      document.writeln("Perteneces a la generación Baby Boom <br>");
      document.writeln("Su rasgo caracteristico es: 🤑 Ambición <br>");
    } else if (añoDeNacimiento >= 1930 && añoDeNacimiento <= 1948) {
      document.writeln(
        "Perteneces a la Silent Generation (los niños de la posguerra) <br>"
      );
      document.writeln("Su rasgo caracteristico es: 😐 Austeridad <br>");
    } else {
      document.writeln("No se hayó ninguna generación");
    }
  }

  esMayorDeEdad(edad) {
    if (edad >= 18) {
      document.writeln("Es mayor de edad");
    } else {
      document.writeln("No es mayor de edad");
    }
  }

  mostrarDatos() {
    document.writeln(`<ul>`);
    document.writeln(`<li>Nombre: ${this.nombre}</li>`);
    document.writeln(`<li>Edad: ${this.edad}</li>`);
    document.writeln(`<li>DNI: ${this.dni}</li>`);
    document.writeln(`<li>Sexo: ${this.sexo}</li>`);
    document.writeln(`<li>Peso: ${this.peso}</li>`);
    document.writeln(`<li>Altura: ${this.altura}</li>`);
    document.writeln(`<li>Año de nacimiento: ${this.añoDeNacimiento}</li>`);
    document.writeln(`</ul>`);
  }
}

const tomarDatos = (e) => {
  e.preventDefault();
  // buscar inputs
  const nombre = document.querySelector("#nombre").value;
  const edad = parseInt(document.querySelector("#edad").value);
  const dni = document.querySelector("#dni").value;
  const sexo = document.querySelector("#sexo").value;
  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);
  const añoDeNacimiento = document.querySelector("#añoDeNacimiento").value;
  // asignar inputs
  const personaCreada = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    añoDeNacimiento
  );
  // necesito tomar el texto (nombre) del input
  const inputNombre = document.getElementById("nombre").value;
  // necesito el div padre para agregar un item hijo que es una p
  const div = document.querySelector(".justify-content-stard");
  // 🔧 Crear un contenedor específico para esta persona
  const contenedorPersona = document.createElement("div");
  contenedorPersona.classList.add("mb-3");
  // necesito agregar una "p" con el texto del input, tambien los botones
  const p = document.createElement(`p`);
  const boton1 = document.createElement("button");
  const boton2 = document.createElement("button");

  p.textContent = "👨‍👨‍👧‍👦Persona: " + inputNombre;

  boton1.textContent = "Mostrar generación";
  boton2.textContent = "¿Es mayor de edad?";

  boton1.classList.add("btn", "btn-primary", "me-2", "mt-2");
  boton2.classList.add("btn", "btn-success", "mt-2");
  // agregar la "p" y los botones a su padre
  contenedorPersona.appendChild(p);
  contenedorPersona.appendChild(boton1);
  contenedorPersona.appendChild(boton2);
  div.appendChild(contenedorPersona);
  // resetear formulario
  formulario.reset();
};

const mostrarGeneracion = (añoDeNacimiento) => {
  alert(`${personaCreada.mostrarGenracion(añoDeNacimiento)}`);
};

const esMayorDeEdad = (edad) => {
  alert(`${personaCreada.esMayorDeEdad(edad)}`);
};

// variables
const formulario = document.getElementById("miFormulario");
const btnMostrarGeneracion = document.getElementsByClassName("btn-primary");
const btnEsMayorDeEdad = document.getElementsByClassName("btn-success");
// manejador de eventos
formulario.addEventListener(`submit`, tomarDatos);
btnMostrarGeneracion.addEventListener("click", mostrarGeneracion);
btnEsMayorDeEdad.addEventListener("click", esMayorDeEdad);
