window.addEventListener("load", principal);

function principal() {
    var numero;
    var parrafos = document.getElementById("numeros");
    var numeros = [];

    for (let index = 0; index < 10; index++) {
        numero = parseInt(prompt("Introduce un número:"));
        numeros.push(numero);
    }

    //Se usa ... porque la función Math.max y min requieren argumentos numéricos, y le estamos pasando un array. Así, se pasan los elementos del array separados. 
    const maximo = Math.max(numeros);
    const minimo = Math.min(numeros);

    for (let i = 0; i < numeros.length; i++) {
        let clase = 'negra';
        if (numeros[i] === maximo) {
            clase = 'roja';
        } else if (numeros[i] === minimo) {
            clase = 'verde';
        }
        parrafos.innerHTML += `<p class="${clase}">${numeros[i]}</p>`;
    }
}
