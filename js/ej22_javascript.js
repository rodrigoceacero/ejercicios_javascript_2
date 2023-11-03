function cambiarColor(){
    let menu = document.getElementById("lista");

    menu.addEventListener("mouseover", function (){
        menu.style.backgroundColor = "cyan";
        menu.style.color = "yellow";
    });
}

window.addEventListener("DOMContentLoaded", cambiarColor);