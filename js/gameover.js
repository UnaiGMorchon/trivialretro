let nombre = sessionStorage.getItem("username");
let color = sessionStorage.getItem("colorUser");
document.getElementById("user").innerText = nombre;
document.getElementById("Color").style.background = color;

function Restart(){
    let buttonRestart = documento.getElementById("resstart");
    buttonRestart.addEventListener("click",initiale());
    console.log(Restart);
    
    };

    setTimeout(function() {
        var animation = document.getElementById('gameOver');
        animation.style.display = 'none';
      }, 10000);