const fs = require('fs');

// Función para registrar una cita
function registrar(nombre, edad, animal, color, enfermedad) {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log("Cita registrada exitosamente");
}

// Función para leer las citas
function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log(citas);
}

module.exports = { registrar, leer };
