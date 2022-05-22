/* Codigo de: Hilary Daffne Benítez González  Hola profa Irma :D recuperese pronto*/

/* Recogemos el nombre */
var nombre = document.getElementById("nombre");
/* Recogemos la edad */
var edad = document.getElementById("edad");

/* funcion para validar el formulario */
function validar() {
var datosCorrectos = true;
/* Que valide que el nombre esta escrito */
if (document.getElementById("nombre").value.length < 1) {
    datosCorrectos = false;
}
/* que valide que la edad sea un numero */
if (isNaN(document.getElementById("edad").value)) {
    datosCorrectos = false;
}
/* que valide que se escogio una opcion */
if (!document.querySelector('input[name="opciones"]:checked')) {
    datosCorrectos = false;
}
if (!datosCorrectos) {
    alert("Algunos campos no estan llenados de manera correcta, vuelva a revisarlos");
} else {
    alert("Todos los campos han sido llenados correctamente:");
    alert("Tus datos:\nNombre: " + nombre.value + "\n" + "Edad: " + edad.value);
}
return datosCorrectos;
}

