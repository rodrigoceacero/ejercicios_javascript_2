window.addEventListener("DOMContentLoaded", main);

function main(){
    let form = document.querySelector("form");
    let telefonoCampo = document.getElementById("telefono");
    let dniCampo = document.getElementById("dni");
    let correoCampo = document.getElementById("correo");
    let btnEnviar = document.getElementById("enviar");
    enviar.addEventListener("click", function (){
        verificarTelefono(telefonoCampo);
        verificarDni(dniCampo);
        verificarCorreo(correoCampo);
    });
}

let claseCorrecta = 'correcto';
let claseError = 'error';
function verificarTelefono(campo) {
    let salida = false;
    let valor = campo.value;
    exp_reg = /[0-9]{9}/;
    if (exp_reg.test(valor) == false) {
        alert("El teléfono introducido es incorrecto");
        campo.classList.add(claseError);
        campo.placeholder = "dato erróneo";
    }else{
        campo.classList.add(claseCorrecta);
        salida = true;
    }
    campo.value = "";
    return salida;
} 

function verificarDni(campo){
    let valor = campo.value;
    exp_reg = /^[0-9]{8}[a-zA-Z]{1}$/;
    if (exp_reg.test(valor) == false){
        alert("El DNI no es válido");
    }
    campo.value = "";
}

function verificarCorreo(campo){
    let valor = campo.value;
    exp_reg = /^[a-z][\w\.]*@[\w\.]+\.[a-z]{2,3}/i
    if (exp_reg.test(valor) == false){
        alert("El correo no es válido");
    }
    campo.value = "";
}