/* var nombre = prompt("Dime tu nombre");
var instituto = prompt("Nombre de tu instituto")
console.log(nombre);
alert(nombre);
document.write("<h1>" + nombre + "</h1>");
document.write("<h2>" + instituto + "</h2>");
document.write("<table border =\"1\">")
document.write("<tr><th>Nombre</th><th>Nombre de instituto</th></tr>")
document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr>")
document.write("</table>")

var nota1 = 4;
var nota2 = 5;
var notaTotal1 = nota1 + nota2;
var notaMedia = (nota1 + nota2) / 2; 

function mostrarfecha(){
    var now = Date();
    console.log("Ahora son: " + now)
    alert("Ahora son las: " + now);
    document.write("<h1>" + now + "</h1>");
}

document.getElementById("boton1").onclick = () => {
    console.log("Click soblre el boton 1...");
    mostrarfecha();
}

var micaja = document.getElementById("micaja");
micaja.onmouseenter = () => {
    micaja.style.backgroundColor = "green";
    micaja.style.fontSize = "40px";
}

micaja.onmouseleave = () => {
    micaja.innerHTML = "Hasta luego";
}  */

document.getElementById("micaja").style.fontSize = "10px";

function changeFontSize() {
    var micaja = document.getElementById("micaja")
    var fontSizeMicaja = micaja.style.fontSize;
    console.log("mi caja font size" + fontSizeMicaja);
    if (fontSizeMicaja == "10px") {
        micaja.style.fontSize = "18px";
    }

    else if (fontSizeMicaja == "18px") {
        micaja.style.fontSize = "24px";
    }

    else {
        micaja.style.fontSize = "10px";
    }
}

var botonChangeFontSize = document.getElementById("botonChangeFontSize");
botonChangeFontSize.onclick = () => {
    changeFontSize();
}




