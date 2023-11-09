// Ejercicio #3 //

const numeros = [4, 5, 12, 34, 45];

function sumaNumeros (acomulador,numero){
  return acomulador+numero;
}

function productoNumeros (acomulador,numero){
  return acomulador*numero;
}

let suma = numeros.reduce(sumaNumeros,0)
let producto = numeros.reduce(productoNumeros,1);

console.log ("EJERCICIO 3:");
console.log ("Array de numeros: "+numeros);
console.log ("La suma es: "+suma);
console.log ("El producto es: "+producto);