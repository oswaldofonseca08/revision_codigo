console.log("================ Scrpt de Funciones =================");
console.log("Sesion JS02 - funciones");

//============ Funcioon declarada ==============
//    (function declaration, function statement)

/*
    Una de las caracteristicas de las funciones declaradas es que
    tienen hosting (pueden ser llamadas antes de su ejecucion)
*/

multiplicar(5,3);

/**
 * Comentario de funcion
 * Multiplica dos numeros e imprime en consola
 * @param {number} a valor de multiplicando
 * @param {number} b valor de multiplicador
 */
function multiplicar (a,b){
    const resultado = a*b;
    console.log(resultado)
}

function divide(dividendo,divisor){
    return dividendo / divisor;
}

console.log(divide(12,4)); //3
console.log(divide(12,"4")); //3
console.log(divide("12","4")); //3
console.log(divide("1 2","4")); //NaN

//=================== Funciones expresadas ===================
//      (function expression)
/*
    Funciones que son declaradas dentro de las asignacion de una variable
    Estas funciones pueden ser anonimas (no tienen nombre).

    Las funciones expresadas no tienen hoisting, por que no se carga
    en memoria hasta que la utilices.
*/ 

const sum = function sumaDeEnteros(a,b){
    return a + b;
};

console.log(sum(6,20)); //26

const potencia = function(base,exponente){  //funcion anonima (sin nombre)
    return base**exponente;
};

console.log(potencia(2,3));

const power = (base,exponent) => base ** exponent;


//==================== Funcion autoinvocada =======================
//    ( selft-incokinng functions)
// Se autoinvocan, no encesitan un llamado.
// Se pueden definir con funciones anónimas

(function setUp(){
    console.log("Me autoinvoco");
    console.log("Puedo servirte como Inicializador de tu programa");
})();

//=================== Funcion flecha ======================
//      (arrow function)
/*
    Son similares a las funciones expreasadas, pero:
    - No requieren de la palabra function.
    - Si tiene una sola instruccion, no require las llaves {}.
    - Si la instruccion es el mismo retorno no require de la palabra return.
*/

//Area de rectangulo con funcion expresada
const areaRectangulo = function(base, altura){
    return base * altura;
};

//Area de rectangulo con arrow function
const areaRectanguloArrowFunction = (base,altura) => base*altura;

console.log(areaRectangulo(10,6))
console.log(areaRectanguloArrowFunction(12,4))

const saludo = persona => "Hola " + persona;
const ellaBailaSola = () => "Compa, que le parece esa chica";

console.log(saludo("Peso Pluma"));
console.log(ellaBailaSola());

//--------------- Parametros default ----------------------

const saludoGeneration = (persona = "Amigo", cohorte = "CohorteMX") => "Hola " + persona + ", que gusto que estes en la corte: " + cohorte;

console.log (saludoGeneration("Joseph","CH-34")); //Hola Joseph, que gusto que estes en la corte: CH-34
console.log (saludoGeneration()); //Hola Amigo, que gusto que estes en la corte: CohorteMX

//--------------- Rest Parameters -------------------------
/* 
  Nos permite reprecentar una serie de valores indefinidos en los argumentos
  esto se reprecenta con un array
  El rest parameter debe estar al final de la lista de parametros 
*/

const sumatoriaVariosNumeros = (a, b, ...manyMoreArg) => {
  let suma = a + b;

  /*
  for (let index = 0; index < manyMoreArg.length; index++) {
    suma = suma + manyMoreArg [index]; //suma += manyMoreArge[index]
    
  }
  */

  suma += manyMoreArg.reduce((acumulador,currentValue) => acumulador + currentValue,0)

  return suma;
}

console.log ("sumatoria de 2 numeros 4 + 6 = "+ sumatoriaVariosNumeros (4,6));
console.log ("sumatoria de 4 numeros 4 + 6 + 5 + 7 = "+ sumatoriaVariosNumeros (4,6,5,7));

function inicializacion (config){
  console.log ("Me inicio con la configuracion "+ config);
}("Api de prueba");

//inicializacion ("api de prueba")


//--------------- Funciones de callback -------------------------
/*
  Funcion que se a otra funcion como argumento, para luego 
  invocarla para complementar algun tipo de rutina o accion.
*/

/*
 Realizar 3 funciones.
  1 función que reciba un mensaje e imprima en consola
  1 función que reciba un mensaje e imprima en alert
  1 función que reciba un mensaje e imprima en el DOM, en H2
*/

const printToConsole = message => console.log(message);
const printToAlert = message => alert(message);
const printToH2 = message => {
  const refH2 = getH2Message();
  refH2.innerHTML = message;
};
const getH2Message = ()=> document.getElementById("message");

// Función que obtenga un mensaje e imprima en consola o alert o DOM o lo que se me ocurra.
function getMessageAndPrint( fncPrint ){
  const message = getUserMessage();
    fncPrint(message);
}

const getUserMessage = () => `Martes de frescura`;

getMessageAndPrint (printToConsole);
//getMessageAndPrint (printToAlert);
getMessageAndPrint (printToH2);

//Imprimir en el DOM en un paragraph
getMessageAndPrint (function (message){
  document.getElementById("p-message").innerHTML = message
});

getMessageAndPrint (message => document.getElementById("p-message2").innerHTML = message);

//=================Ejercicios=====================
/*
    Ejercicio 2
    Escribe una función que tome un arreglo de números,
    duplique el valor de cada número del arreglo,
    e imprima el nuevo arreglo actualizado.
    [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/

const double = (array) => {
  const doubleNumbers = [];

  for (let index = 0; index < array.length; index++) {
    doubleNumbers.push( array[index] * 2 );
  }
  return doubleNumbers;
}

const numbers = [5, 10, 15, 20, 25];
console.log( double(numbers) ); // [10, 20, 30, 40, 50]


//Utilizando callback con map
const fncCallbackForMap = (element, index, array) => element * 2;
const doubleUsingMap = (array) => array.map(fncCallbackForMap)
console.log( doubleUsingMap(numbers) ); // [10, 20, 30, 40, 50]

//Con puras funciones flecha
const doubleUsingMapAndArrowFunction = (array) => array.map( element => element * 2 );
console.log( doubleUsingMapAndArrowFunction(numbers) ); // [10, 20, 30, 40, 50]


/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

  salida: "Cursos en común: Programming, Music"
*/

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Geography", "Spanish", "Music"];

const cursosEnComun = (student1Courses, student2Courses) => {
  const commonCourses = [];

  for (let i = 0; i < student1Courses.length; i++) {
    const course = student1Courses[i];
    for (let j = 0; j < student2Courses.length; j++) { 
      if (course === student2Courses[j]) { 
        commonCourses.push(course);
      }
    }
  }
  return commonCourses;
}

console.log("cursos en comun: ", cursosEnComun(student1Courses, student2Courses));


// Resolviendo el ejercicio usando el método filter() y el método includes()
const commonCoursesUsingFilter = ( courses1, courses2) => courses1.filter( (course, i, arr) => courses2.includes( course ));

console.log(`Cursos en común: ${ commonCoursesUsingFilter( student1Courses, student2Courses ) }`);

// Comparando 3 arreglos de cursos
const commonCoursesStudent1And2 = commonCoursesUsingFilter( student1Courses, student2Courses );
const commonCoursesStudet1And2And3 = commonCoursesUsingFilter( commonCoursesStudent1And2, student3Courses );
console.log(`Cursos en común: ${ commonCoursesStudet1And2And3 }`);


// --------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function
// convertir el texto a Array (split("")) y usar el metodo filter 

const enunciado = "pepe pecas pica papas con un pico y una pala";

/*
const countChar = (phrase, character) => {
  const characters = phrase.split(""); //[p,e,p,e, , p... ]
  const filterCharacters = characters.filter(  (element, index, arr)=> element === character ); // [p..p,p]
  return filterCharacters.length;
}
*/

const nuemrosDePs = (enunciado, caracter) => enunciado.toLowerCase().split ("").filter(element => element === caracter).length;
console.log(nuemrosDePs(enunciado,"p"));


//---------------------Funciones recursivas-----------------------
/*
  Es una tecnica de programacion en donde la funcion se llama a si misma
  se debe tener precaucion de no entrer en un ciclo infinito

  En algunos casos, la recursividad puede ser mas leginble y clara ya que refleja 
  de manera directa la naturaleza recursiva del problema.

  function funcionRecursiva (valor){
    if (condicionParo){

    } else {
      funcionRecursiva (nuevoValor); //llamada recursiva
    }
  }
*/

//Realizar una funcion que calcule el factorial de un numero
//Mostrar en consola el factorial de 5
/*
  El factorial de un número se calcula multiplicando el número 
  por cada número que lo precede hasta el 1. 
  Por ejemplo: 3!=3x2x1=6.
*/

/*
const calcularFactorial = (numero) => {
  if (numero < 0) {
    return "No se puede calcular el factorial de un número negativo.";
  } else if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }
};

const factorialDe5 = calcularFactorial(15);
console.log("El factorial es:", factorialDe5);
*/

function factorialAscendente( number ){
  let factorial = 1;
  for(let i = 1; i <= number; i++){
    factorial = factorial * i;
  }
  return factorial;
}

const factorialDescendente = ( number ) => {
  let factorial = 1;
  for(let i = number; i > 0 ; i--){
    factorial = factorial * i;
  }
  return factorial;
}


console.log(`El factorial acendente de 5 es : ${ factorialAscendente(5)}`);
console.log(`El factorial decendente de 5 es : ${ factorialDescendente(5)}`);


// Solución del ejercico con recursividad
function factorialRecursivo ( number ) {
  if( number < 1 ){
    return 1;
  } else {
      return number * factorialRecursivo( number - 1 );
  }
}

console.log(`Factorial recursivo de 5: ${factorialRecursivo(5)}`);

/*
  Calcular suma de numeros pares 
  realizar una funcion recursiva que sume los numeros pares de un 
  numero determinado hasta el numero 1.
  
  numero: 12
  resultado: 12 + 10 + 8 + 6 + 4 + 2
*/

const sumaNumerosPares = (numero) => {
  if (numero <= 1) {
    return 0;
  }
  if (numero % 2 === 0) {
    return numero + sumaNumerosPares(numero - 1);
  } else {
    return sumaNumerosPares(numero - 1);
  }
}

console.log(`La suma de números pares desde 12 hasta 2 es: ${sumaNumerosPares(12)}`);
console.log(`La suma de números pares desde 23 hasta 2 es: ${sumaNumerosPares(23)}`);
