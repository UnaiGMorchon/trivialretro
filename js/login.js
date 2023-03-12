document.querySelector("form").addEventListener("submit", function(event) {
  
  let nombre = document.getElementById("username").value;
  let color = document.getElementById("colorUser").value;
  
  sessionStorage.setItem("username", nombre);
  sessionStorage.setItem("colorUser", color);
});