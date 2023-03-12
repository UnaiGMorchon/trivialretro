document.querySelector("form").addEventListener("submit", function(event) {
  let nombre = document.getElementById("username").value;
  let pago = document.getElementById("payment").value;
  sessionStorage.setItem("username", nombre);
  sessionStorage.setItem("payment", pago);
});