// Ejercicio #5 //

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log("EJERCICIO 5:");

console.log("1.-"+ people);

let eliminarDani = people.indexOf("Dani");
people.splice(eliminarDani, 1);
console.log("4.-"+ people);

let eliminarJuan = people.indexOf("Juan");
people.splice(eliminarJuan, 1);
console.log("4.-"+ people);

let traerAlFrente = people.indexOf("Luis");
people.splice(traerAlFrente, 1);
people.unshift("Luis");
console.log("4.-"+ people);

people.push("Oswaldo");
console.log ("5.-"+ people);

for (let i = 0; i < people.length; i++) {
  console.log("6.-"+people[i]);
  if (people[i] === 'Maria') {
    break;
  }
}

console.log ("Maria se encuentra en la posicion: "+ people.indexOf("Maria"));

console.log ("El arreglo final es: "+ people);