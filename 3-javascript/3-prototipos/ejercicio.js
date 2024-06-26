// AÑADIENDO MIEMBROS A LOS GRUPOS Y MOSTRANDO RESUMEN
// Completa el código del prototipo "Grupo"

/*
    1. Utilizando un constructor de objetos "Grupo"
    2. Completa el constructor "Grupo" con las propiedades:
        nombre   -> Nombre del grupo        -> String "..."
        personas -> Arreglo de Personas     -> Array["...", "...", "..."]
    3. Agrega un prototipo llamado `agregarPersona` que sea una función para agregar una persona
    4. Agrega un prototipo llamado `mostrarResumen` utilizando **interpolación** para mostrar el siguiente mensaje:
        "El grupo <propiedad_grupo> tienen <total_personas> miembros"
*/

// Constructor de Objetos "Grupo"
// Constructor de Objetos "Grupo"
function Grupo(nombre, personas) {
    this.nombre = nombre;
    this.personas = personas;
}

// Prototipo para agregar una persona al grupo
Grupo.prototype.agregarPersona = function(nombrePersona) {
    this.personas.push(nombrePersona);
}

// Prototipo para mostrar un resumen del grupo
Grupo.prototype.mostrarResumen = function() {
    console.log(`El grupo ${this.nombre} tiene ${this.personas.length} miembros.`);
}

const magios = new Grupo("Magios", ["Eduardo", "Carla", "Marcos", "Emmanuel", "Samara", "Paulina", "María", "Julio", "Alex", "Pedro", "Guillermo", "Hernán", "Eliot", "Israel", "Lucía"]);

magios.mostrarResumen(); // Muestra el resumen inicial del grupo

// Agregar algunas personas al grupo
magios.agregarPersona("Manuel");
magios.agregarPersona("Irma");
magios.agregarPersona("Carlos");

magios.mostrarResumen(); // Muestra el resumen actualizado del grupo


// magios.mostrarResumen()
// magios.agregarPersona("Manuel")
// magios.agregarPersona("Irma")
// magios.agregarPersona("Carlos")
// magios.mostrarResumen()