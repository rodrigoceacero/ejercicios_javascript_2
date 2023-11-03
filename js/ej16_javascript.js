function main() {
    let frase = prompt("Introduce una frase: ");
    let contadorVocales = 0;
    let contadorConsonantes = 0;

    const vocales = [
        "a", "e", "i", "o", "u",
        "A", "E", "I", "O", "U",
        "á", "é", "í", "ó", "ú",
        "Á", "É", "Í", "Ó", "Ú"
    ];
    const consonantes = [
        "q", "w", "r", "t", "y",
        "p", "ñ", "l", "k", "j",
        "h", "g", "f", "d", "s",
        "z", "x", "c", "ç", "v",
        "b", "n", "m", "Q", "W",
        "R", "T", "Y", "P", "S",
        "D", "F", "G", "H", "J",
        "K", "L", "Ñ", "Z", "X",
        "C", "V", "B", "N", "M", "Ç"
    ];

    //COMPRUEBA LAS VOCALES INCLUIDAS EN frase RECORRIENDO LA frase CON UN FOR
    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i])) {
            contadorVocales++;
        }
    }
    //COMPRUEBA LAS CONSONANTES INCLUIDAS EN frase RECORRIENDO LA frase CON UN FOR
    for (let i = 0; i < frase.length; i++) {
        if (consonantes.includes(frase[i])) {
            contadorConsonantes++;
        }
    }

    let parrafoFrase = document.getElementById('frase').innerHTML =
        frase + "<br />";
    let pVocales = document.getElementById('vocales').innerHTML =
        "Número de vocales: " + contadorVocales + "</br>";
    let pConsonantes = document.getElementById('consonantes').innerHTML =
        "Número de consonantes: " + contadorConsonantes + "</br>";
}

window.addEventListener("load", main);