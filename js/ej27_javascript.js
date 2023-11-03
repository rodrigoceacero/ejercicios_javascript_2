window.addEventListener("DOMContentLoaded", establecerResolucion);

const resoluciones = [
    "1920x1080",
    "1680x1050",
    "1600x900",
    "1440x900",
    "1400x105",
    "1366x768",
    "1360x768",
    "1280x960",
    "1280x800",
    "1280x768",
    "1280x720",
    "1280x600"
]

function obtenerResolucion(){
    let resolucionActual = `${screen.width}x${screen.height}`;

    return resolucionActual;
}

function establecerResolucion() {
    let radios = document.querySelectorAll('input[type="radio"]');

    for (const radio of radios) {
        if (resoluciones[radio.value] === obtenerResolucion()) {
            radio.checked = true;
        }
    }
}
