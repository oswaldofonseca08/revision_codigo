// Ejercicio #6 //

const array = [3, 6, 12, 5, 100, 1 ];
console.log("EJERCICIO 6:");
console.log ("Arreglo original: "+ array);

for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++) {
  let numActual;
  if (array[i] > array[i+1]) {
    numActual = array[i];
    array[i] = array[i+1];
    array[i+1] = numActual;
    
    }
  }
}


console.log("Arreglo ordenado: "+ array);