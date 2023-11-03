// Ejercicio #4 //

let student1Courses = ['Programming', 'English', 'Math'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let elementosComunes = student1Courses.filter(function(elemento) {
    return student2Courses.includes(elemento);
});

console.log ("EJERCICIO 4:");
console.log ("Arreglo de cursos 1: "+ student1Courses);
console.log ("Arreglo de cursos 2: "+ student2Courses);
console.log ("Elementos repetidos: "+ elementosComunes);