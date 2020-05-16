let open;
function popup(){
    open = window.open("https://web.isen-ouest.fr");
}
function fpopup(){
    open.close();
}
function droit(){
    document.getElementById("d1").style.top;
}
function gauche(){
    document.getElementById("d1").className = "gauche";
}
function haut(){
    document.getElementById("d1").className = "haut";
}
function bas(){
    document.querySelector("#d1").className = "bas";
}
function move(param){
    document.getElementById("d1").style.backgroundPosition = param
}
document.getElementById("nvpu").addEventListener("click", popup);
document.getElementById("fpu").addEventListener("click", fpopup);
