// EJERCICIO 1
let A = 10;
let B = 19;
if (A < B) console.log("B es mayor que A");
else if (B < A) console.log("A es mayor que B");
const result = A === B ? console.log("A y B son iguales") : null;
// EJERCICIO 2
let nombre = "Leandro";
console.log("Bienvenido " + nombre);
// Ejercicio 3
function ejercicio3() {
    let inputNombre = prompt("\xbfC\xf3mo te llamas?", "introduce tu nombre");
    if (inputNombre != null) document.getElementsByClassName("ej3").innerHTML = `Bienvenido ${inputNombre}!`;
}
// Ejercicio 4
const ejercicio4 = ()=>{
    const PI = Math.PI;
    let radio = parseInt(prompt("ingresa el radio"));
    if (typeof radio === "number") {
        const areaCirculo = PI * radio ** 2;
        document.getElementsByClassName("ej4").innerHTML = `El area es ${areaCirculo}.`;
    } else document.getElementsByClassName("ej4").innerHTML = `No has introducido un número válido, vuelve a intentarlo.`;
} // Ejercicio 5
 // Ejercicio 6
 // Ejercicio 7
 // Ejercicio 8
 // Ejercicio 9
 // Ejercicio 10
 // Ejercicio 11
 // Ejercicio 12
 // Ejercicio 13
;

//# sourceMappingURL=index.aa69868b.js.map
