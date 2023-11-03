window.addEventListener("DOMContentLoaded", abrirPagina);

const urls = [
    "https://www.google.com",
    "https://educacionadistancia.juntadeandalucia.es/centros/jaen",
    "https://es.wikipedia.org",
    "https://www.google.es/maps/preview",
    "https://www.w3schools.com"
];

function abrirPagina() {
    let sltPaginas = document.getElementById("paginas");
    let indiceSeleccionado = sltPaginas.selectedIndex;

    sltPaginas.addEventListener("click", function () {
        if (indiceSeleccionado < urls.length){
            window.open(urls[indiceSeleccionado], "_blank");
        }else{
            alert("No se ha encontrado la página");
        }
    });
      
}
