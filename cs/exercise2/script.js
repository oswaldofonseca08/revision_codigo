// Ejercicio #2 //

const numeros = [15, 25, 35, 45, 55];

function duplicarArreglo(arreglo) {
    let arregloDuplicado = arreglo.map(function(numero) {
        return numero * 2;
    });
    return arregloDuplicado;
}

console.log ("EJERCICIO 2: ");
console.log ("Array original: "+numeros)

let numerosDuplicados = duplicarArreglo(numeros)
console.log ("Array duplicado: "+ numerosDuplicados);