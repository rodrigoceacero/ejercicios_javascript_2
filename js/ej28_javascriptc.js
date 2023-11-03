window.addEventListener("DOMContentLoaded", main);

const FECHA_VACACIONES = new Date(2023, 11, 22);
const fechaActual = new Date();
const MLS_TO_SEG = 1000 * 60 * 60 * 24; //1 día.

function actualizarContador() {
    var tiempoRestante = FECHA_VACACIONES - fechaActual;

    var diasRestantes = Math.ceil(tiempoRestante / (MLS_TO_SEG)); //Redondear hacia arriba
    
    return diasRestantes;
}

function pasarADecenas(diasRestantes){
    var decenas = Math.floor(diasRestantes / 10); //Redondear hacia abajo

    return decenas;
}

function pasarAUnidades(diasRestantes){
    var unidades = diasRestantes % 10;

    return unidades;
}

function escribirDias(decenas,unidades){
    let parrafo = document.querySelector(".dias-vacaciones");
    parrafo.innerHTML += `Quedan ${decenas}${unidades} días para las vacaciones`;
}

function main() {
    var diasRestantes = actualizarContador();
    var decenas = pasarADecenas(diasRestantes);
    var unidades = pasarAUnidades(diasRestantes);
    escribirDias(decenas,unidades);
    setInterval(actualizarContador, MLS_TO_SEG);
}
