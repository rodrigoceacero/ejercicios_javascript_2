window.addEventListener("DOMContentLoaded", main);

const IMAGENES = ['../imagenes/numero0.png',
    '../imagenes/numero1.jpg',
    '../imagenes/numero2.jpg',
    '../imagenes/numero3.jpg',
    '../imagenes/numero4.jpg',
    '../imagenes/numero5.jpg',
    '../imagenes/numero6.jpg',
    '../imagenes/numero7.jpg',
    '../imagenes/numero8.jpg',
    '../imagenes/numero9.jpg'
];

const FECHA_VACACIONES = new Date(2023, 11, 22);
const fechaActual = new Date();
const MLS_TO_SEG = 1000 * 60 * 60 * 24; //1 dia.

function actualizarContador() {
    var tiempoRestante = FECHA_VACACIONES - fechaActual;
    var diasRestantes = Math.ceil(tiempoRestante / (MLS_TO_SEG));

    return diasRestantes;
}

function pasarADecenas(diasRestantes) {
    var decenas = Math.floor(diasRestantes / 10);
    return decenas;

}

function pasarAUnidades(diasRestantes) {
    var unidades = diasRestantes % 10;
    return unidades;
}

function escribirDias(decenas, unidades) {
    let parrafo = document.querySelector('.dias-vacaciones');
    let imgDecenas = document.querySelector('.imagen-decenas');
    let imgUnidades = document.querySelector('.imagen-unidades');

    imgDecenas.src = IMAGENES[decenas];
    imgUnidades.src = IMAGENES[unidades];

    parrafo.innerHTML += `${imgDecenas} ${imgUnidades}`;
}

function main() {
    var diasRestantes = actualizarContador();
    var decenas = pasarADecenas(diasRestantes);
    var unidades = pasarAUnidades(diasRestantes);
    escribirDias(decenas,unidades);

    setInterval(actualizarContador, MLS_TO_SEG);
}





