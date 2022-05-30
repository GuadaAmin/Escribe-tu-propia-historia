let historia = "Había " ;
let input = 0;
let continuar = 0;

alert("Escribamos una historia :]");
continuar = prompt("Escriba ESC si no desea continuar o enter para escribir una historia:");
while (continuar != "ESC") {
    alert(historia);
    input = prompt("Ingrese la siguiente palabra:");
    historia = historia + input;
    switch (input) {
        case "una":
            if (historia == "Había una vez una") {
                historia = historia + " hormiga.";
                break;
            }
            historia = historia + " vez ";
            break;
        case "un":
            historia = historia + " gato ";
            break;
        case "que":
            historia = historia + " dormía.";
            break;
        case "muy":
            historia = historia + " lindo.";
            break;
        default:
            historia = historia + " perros ";
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
    alert("No hay problema, ¡nos vemos la próxima!")
} else if (input == "") {
    alert("¡Recargá la página e intentá de nuevo!")
} else {
    alert("¡Gracias por escribir una historia conmigo!")
}


