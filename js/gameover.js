let nombre = sessionStorage.getItem("username");
let pago = sessionStorage.getItem("payment");
let score = sessionStorage.getItem("score")
document.getElementById("user").innerText = nombre;
document.getElementById("payment").innerText = "You won: " + score + " " +pago;
function Restart(){
    let buttonRestart = documento.getElementById("resstart");
    buttonRestart.addEventListener("click",initiale());
    console.log(Restart);
    };



    setTimeout(function() {
        var animation = document.getElementById('gameOver');
        animation.style.display = 'none';
      }, 5000);