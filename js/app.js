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

  mostrarGeneracion() {
    if (this.añoDeNacimiento >= 1994 && this.añoDeNacimiento <= 2010) {
      alert("Perteneces a la generación Z");
      alert("Su rasgo caracteristico es: 😋 Irreverencia");
    } else if (this.añoDeNacimiento >= 1983 && this.añoDeNacimiento <= 1993) {
      alert("Perteneces a la generación Y (millenials)");
      alert("Su rasgo caracteristico es: 😖 Frustración");
    } else if (this.añoDeNacimiento >= 1969 && this.añoDeNacimiento <= 1980) {
      alert("Perteneces a la generación X");
      alert("Su rasgo caracteristico es: 😎 Obsesión por el éxito");
    } else if (this.añoDeNacimiento >= 1949 && this.añoDeNacimiento <= 1968) {
      alert("Perteneces a la generación Baby Boom");
      alert("Su rasgo caracteristico es: 🤑 Ambición");
    } else if (this.añoDeNacimiento >= 1930 && this.añoDeNacimiento <= 1948) {
      alert("Perteneces a la Silent Generation (los niños de la posguerra)");
      alert("Su rasgo caracteristico es: 😐 Austeridad");
    } else {
      alert("No se hayó ninguna generación");
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert("Es mayor de edad");
    } else {
      alert("No es mayor de edad");
    }
  }

  mostrarDatos() {
    const contenedor = document.createElement("ul");

    const datos = [
      `Nombre: ${this.nombre}`,
      `Edad: ${this.edad}`,
      `DNI: ${this.dni}`,
      `Sexo: ${this.sexo}`,
      `Peso: ${this.peso}kg`,
      `Altura: ${this.altura}cm`,
      `Año de nacimiento: ${this.añoDeNacimiento}`,
    ];

    datos.forEach((dato) => {
      const li = document.createElement("li");
      li.textContent = dato;
      contenedor.appendChild(li);
    });

    // Agregalo a algún contenedor visible del HTML, por ejemplo:
    document.querySelector(".justify-content-start").appendChild(contenedor);
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
  const añoDeNacimiento = parseInt(
    document.querySelector("#añoDeNacimiento").value
  );
  // asignar inputs
  personaCreada = new Persona(
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
  const div = document.querySelector(".justify-content-start");
  // 🔧 Crear un contenedor específico para esta persona
  const contenedorPersona = document.createElement("div");
  contenedorPersona.classList.add("mb-3");
  // creo la etiqueta p (nombre de la persona) y los botones (funciones)
  const p = document.createElement(`p`);
  const boton1 = document.createElement("button");
  const boton2 = document.createElement("button");
  const boton3 = document.createElement("button");
  // creo los eventos de manera dianamica
  boton1.addEventListener("click", () => personaCreada.mostrarGeneracion());
  boton2.addEventListener("click", () => personaCreada.esMayorDeEdad());
  boton3.addEventListener("click", () => personaCreada.mostrarDatos());
  // agrego el texto a la etiqueta p mas el nombre de la persona
  p.textContent = "👨‍👨‍👧‍👦Persona: " + inputNombre;
  // agrego texto a los botones
  boton1.textContent = "Mostrar generación";
  boton2.textContent = "¿Es mayor de edad?";
  boton3.textContent = "Mostrar datos";
  // agrego clases a los botones dinamicos
  boton1.classList.add("btn", "btn-primary", "me-2", "mt-2");
  boton2.classList.add("btn", "btn-success", "me-2", "mt-2");
  boton3.classList.add("btn", "btn-info", "mt-2");
  // agregar la "p" y los botones a su padre
  contenedorPersona.appendChild(p);
  contenedorPersona.appendChild(boton1);
  contenedorPersona.appendChild(boton2);
  contenedorPersona.appendChild(boton3);
  div.appendChild(contenedorPersona);
  // resetear formulario
  // formulario.reset();
};

const mostrarGeneracion = () => {
  personaCreada.mostrarGeneracion();
};

const esMayorDeEdad = () => {
  personaCreada.esMayorDeEdad();
};

// variables
const formulario = document.getElementById("miFormulario");
let personaCreada;
// manejador de eventos
formulario.addEventListener(`submit`, tomarDatos);
