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