const { registrar, leer } = require('./operaciones.js');

// Obtener los argumentos de la línea de comandos
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === "leer") {
    leer();
}
