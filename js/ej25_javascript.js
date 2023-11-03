window.addEventListener("DOMContentLoaded", abrirPagina);

const urls = [
    "https://www.google.com",
    "https://educacionadistancia.juntadeandalucia.es/centros/jaen",
    "https://es.wikipedia.org",
    "https://www.google.es/maps/preview",
    "https://www.w3schools.com"
];

//Función para abrir una página según su indice seleccionado al pulsar un boton 
function abrirPagina() {
    let btnAbrirPagina = document.getElementById("abrirpagina");
    let sltPaginas = document.getElementById("paginas");

    btnAbrirPagina.addEventListener("click", function () {
        window.open(urls[sltPaginas.selectedIndex], "_blank");
    });
}
