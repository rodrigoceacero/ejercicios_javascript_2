//Función para leer nombre y edad 
function btnCrear() {
    nombrePersona = [];
    edadPersona = [];

    for (let i = 1; i <= 6; i++) {
        nombrePersona[i] = prompt("Introduce un nombre para la " + i + " persona");
        edadPersona[i] = prompt("Introduce una edad para la " + i + " persona");
        personas = `${nombre[i]}*${edad[i]}#`;
    }
    alert(personas);

    nombrePersona = [];
    edadPersona = [];
}
