window.addEventListener("DOMContentLoaded", principal);

const urls = [
    "https://www.google.com",
    "https://educacionadistancia.juntadeandalucia.es/centros/jaen",
    "https://es.wikipedia.org",
    "https://www.google.es/maps/preview",
    "https://www.w3schools.com"
];

function principal(){
    let btnAbrirPagina = document.getElementById("abrirpagina");
    let paginas = document.getElementsByName("pagina");

    btnAbrirPagina.addEventListener("click", function (){
        for (const pagina of paginas) {
            if (pagina.checked){
                window.open(urls[pagina.value]);
            }
        }
    });
}

