let historia = "Había " ;
let input = 0;
let continuar = 0;
let nombre = prompt("¿Cuál es tu nombre?")

alert("¡Hola, " + nombre + "!")

function siguiente(palabra) {
    historia = historia + palabra
}
function saludo(nombre) {
    alert("¡Nos vemos, " + nombre + "!")
}

alert("Escribamos una historia :]");
continuar = prompt("Escriba ESC si no desea continuar o enter para escribir una historia:");
while (continuar != "ESC") {
    alert(historia);
    input = prompt("Ingrese la siguiente palabra:");
    if (input == "una"|| input == "un" || input == "que"|| input == "muy") {
        siguiente(input)
    }
    switch (input) {
        case "una":
            if (historia == "Había una vez una") {
                siguiente(" hormiga.")
                break;
            } else {
            siguiente(" vez ")
            break;
            }
        case "un":
            siguiente(" gato ")
            break;
        case "que":
            siguiente(" dormía.")
            break;
        case "muy":
            siguiente(" lindo.")
            break;
        default:
            alert("Elige otra palabra, no tenemos tantas opciones aún :(")
            break;
    }
    if (input == "que" || input == "muy" || historia == "Había una vez una hormiga.") {
        alert(historia);
        break;
    }
    if (input == "") {
        alert("Así no se puede escribir una historia :(");
        break;
    }
}
if (continuar == "ESC") {
    alert("No hay problema :]")
    saludo(nombre)
} else if (input == "" || nombre == "") {
    alert("¡Recargá la página e intentá de nuevo!")
} else {
    alert("¡Gracias por escribir una historia conmigo!")
    saludo(nombre)
}


