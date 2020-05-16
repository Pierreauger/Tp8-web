function changecolor(){
    document.getElementById("colorc").style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
}

let button = document.getElementById("colorc");
button.addEventListener("click", changecolor);
