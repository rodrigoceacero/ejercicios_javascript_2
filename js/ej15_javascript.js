let nombrePersona = [];
let edadPersona = [];

function main(){
    let botonCrear = document.getElementById('crear');
    botonCrear.addEventListener("click", btnCrear);
    
    let botonRomper = document.getElementById('romper');
    botonRomper.addEventListener("click", btnRomper);
}

//Función para leer nombre y edad 
function btnCrear(){
    nombrePersona = [];
    edadPersona = [];
    let personas = "";
    for (let i = 0; i < 5; i++){
        nombrePersona[i] = prompt("Introduce un nombre para la " + (i+1) + " persona");
        edadPersona[i] = prompt("Introduce una edad para la " + (i+1) + " persona");
        personas += `${nombrePersona[i]}*${edadPersona[i]}#`;
    }   
    alert(personas);    

    nombrePersona = [];
    edadPersona = [];
}

function btnRomper(){
    let personasDos = "";
    for (let i = 0; i < 5; i++) {
        personasDos += `<tr><td> ${nombrePersona[i]} </td><td> ${edadPersona[i--]} </td></tr>`;
        contador--;
    }

    let tabla = document.getElementById('nombreEdad').innerHTML = 
    `<table><tr><th> NOMBRES </th><th> EDADES </th></tr> ${personasDos} </table>`;
}

window.addEventListener("load", main);