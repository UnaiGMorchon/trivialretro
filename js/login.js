const miObjeto = { 
            user: "",
            age: "",
            color:""
        };

function guardarDatos(){
  let user = document.getElementById("username").value;
  let age = document.getElementById("age").value;
  let color = document.getElementById("colorUser").value;
  sessionStorage.setItem("nombre", user);
  sessionStorage.setItem("Edad", age);
  sessionStorage.setItem("color", color);
}
