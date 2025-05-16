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
  const nombre = document.querySelector("#nombre").value
  console.log(nombre)
  // asignar inputs
}

// variables
const formulario = document.getElementById("miFormulario");

// manejador de eventos
formulario.addEventListener(`submit`, tomarDatos);