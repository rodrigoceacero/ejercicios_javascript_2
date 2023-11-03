function principal(){
    fecha();
    fechaDos();
    hora();
    setInterval(hora, 1000);
}

//FUNCIÓN PARA ESCRIBIR LA FECHA EN FORMATO dd/mm/yyyy
function fecha() {
    const fechaActual = new Date();
    
    let fecha = document.getElementById('fecha').innerHTML = 
    (`Fecha: ${fechaActual.getDate()} / ${(fechaActual.getMonth() + 1)} / ${fechaActual.getFullYear()}`);
    //getMonth() devuelve un número del 0 al 11, debemos sumarle uno. 
}

//FUNCIÓN PARA ESCRIBIR LA FECHA EN FORMATO FRASE
function fechaDos(){
    const fechaActualDos = new Date();
    const meses = ["Enero", "Febrero", "Marzo", "Abril",
                   "Mayo", "Junio", "Julio", "Agosto",
                   "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Lunes", 
                  "Martes",
                  "Miércoles", 
                  "Jueves",
                  "Viernes", 
                  "Sábado",
                  "Domingo"];

    let fechaDos = document.getElementById('fechaCompleta').innerHTML = 
    (`Hoy es ${dias[fechaActualDos.getDay() - 1]}  ${fechaActualDos.getDate()} de  
    ${meses[fechaActualDos.getMonth()]} de ${fechaActualDos.getFullYear()}`);
    //getDay() devuelve un número del 0 al 6 y va desde domingo hasta sábado, debemos restarle 1
}

//FUNCIÓN PARA ESCRIBIR LA HORA EN FORMATO hh:mm:ss
function hora(){
    const horaActual = new Date();

    let hora = document.getElementById('hora').innerHTML = 
    (`${(horaActual.getHours())}:${(horaActual.getMinutes())}:${(horaActual.getSeconds())}`);
}

window.addEventListener("load", principal);