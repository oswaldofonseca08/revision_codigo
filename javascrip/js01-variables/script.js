console.log("Sesion JS 01");

/*
Principales tipos de datos en JS:

Datos primitivos:
1. String
2. Boolean
3. Number
4. Undefined
5. Null
6. Bigint
7. NotNumber

Datos Objetos:
1. Array
2. Objetc
*/

//string
console.log("Tipos de datos: "+ "Hola" + " 012345");

//Number: 12, -45, 56.839, +infinity, -infinity, NaN
//Los datos numericos usan 64 bits para almacenar pero solo usan 53 bits para reprecentar numeros
console.log("Tipo de datos number: ", 12, -45, 56.4835, 5/0, -23/0, 4*"hola");
console.log("Valor maximo reprecentado en JS: ", Number.MAX_VALUE);
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER);

//Valor maximo + 1, javascript solo puede reprecentar hasta el valor 1.7976931348623157e+308
console.log("1.7976931348623157e+308", 1.7976931348623157e+308);
console.log("1.7976931348623157e+309", 1.7976931348623157e+309)

//Un valor mas aya de 9007199254740991 carece de precision en javascript
console.log("MAX_SAFE_INTEGER + 1: ", Number.MAX_SAFE_INTEGER + 1); //9007199254740992
console.log("MAX_SAFE_INTEGER + 2: ", Number.MAX_SAFE_INTEGER + 2); //9007199254740992
console.log("MAX_SAFE_INTEGER + 3: ", Number.MAX_SAFE_INTEGER + 3); //9007199254740994
console.log("MAX_SAFE_INTEGER + 4: ", Number.MAX_SAFE_INTEGER + 4); //9007199254740996

//BigInt: reprecenta valores numericos enteros de los que el tipo number no puede reprecentar (MAX_VALUE) o no es seguro (MAX_SAFE_INTEGER).
//Agregar una n al final del valor lo combierte en un BigInt
//El limite de BigInt esta determinado por la memoria disponible del sistema.
let myBigInt = 9007199254740991n; 
console.log("myBigInt: ", myBigInt);
console.log("myBigInt + 1: ", myBigInt + 1n); //9007199254740992n
console.log("myBigInt + 2: ", myBigInt + 2n); //9007199254740993n
console.log("myBigInt + 3: ", myBigInt + 3n); //9007199254740994n
console.log("myBigInt + 4: ", myBigInt + 4n); //9007199254740995n

//Booleant: En este tipo de valor solo tenemos 2 estado: True / False
console.log("Boolean en true: ", true);
console.log("Boolean en false: ", false);

//Undefined: Un dato que es declarado (var, let, const), pero no esta definido
let myVar; //Solo esta declarado
console.log("Tipo de dato undefined", myVar); //undefined

//Null: Es un valor al que intencionalmente se borra el tipo de dato
let myVarNull; //solo se declara
console.log("Mi dato indefinido myVarNull es:", myVarNull); //undefined
myVarNull =  "Quiero que Tan nos cuente como le fue en su concierto";
console.log(myVarNull); //string
myVarNull = null;
console.log(myVarNull); //null

//------------------------------
//Tipos de datos Object
//Object: const misDatosDePerfil = {clave: valor, clave2: valor2};
const misDatosDePerfil = {
    //atributos
    nombre: "Peso", 
    apellido: "Pluma",
    edad: 24,
    isBelicoso: true,
    23: "Lo que sea",
    //metodos
    nombreCompleto: function fullName(){
        return misDatosDePerfil.nombre +" "+ misDatosDePerfil.apellido;
    }
};

console.log( `Nombre ${ misDatosDePerfil.nombre }`); // Peso
console.log( `Apellido ${ misDatosDePerfil["apellido"] }`); // Pluma
console.log( `Lo que sea: ${ misDatosDePerfil["23"] }`); // Lo que sea
console.log( `El nombre completo es ${ misDatosDePerfil.nombreCompleto() }`) // Peso Pluma

//Arrays: Tipo de objetos especiales que su fortaleza radica en los metodos con los que cuenta
//Almacena diferentes tipods de datos, su primer elemnto es el indice 0
const cancionesPesoPluma = [
    "Ella Baila Sola",
    "Lady Gaga",
    "Lou Lou",
    "Laguna",
    "El Gavilan",
    {
        2020:5,
        2021:30,
        2022:20,
        2023:56,
        total: 111
    }
];

console.log("Canciones por años: " + cancionesPesoPluma[5]); // [Object Object]
//indice del objeto de numero de canciones del año 2020
console.log("Canciones por año 2020: " + cancionesPesoPluma[5]["2020"]);
//Mostrar en total de canciones de PP
console.log("Total de canciones: " + cancionesPesoPluma[5]["total"]);
console.log("Total de canciones: " + cancionesPesoPluma[5].total);

//----------------------------------------------------------------------------
//Conversion de datos (casting)

//Conversion implicita:
console.log("Hola CH" + 34); //Hola CH34
console.log("3" + 5 + 6); // "356" (string)
console.log("3" * 3); //9 (number)

//conversiones explicitas: (string a number)
//Number, parseInt, parseFloat
console.log("3" + 5 + 6); //"356" - string
console.log(Number("3") + 5 + 6); //14
console.log(parseInt("3") + 5 + 6); //14
console.log(parseFloat("3") + 5 + 6); //14
console.log(parseFloat("$3")); //NaN
console.log(parseFloat("3 MXN")); //3
console.log(parseInt("3 MXN")); //3
console.log(Number("3 MXN")); //NaN

console.log("$3MNX" + 5 + 6); //"$3MXN56"
console.log("$3MXN".slice(1)); //"3MNX"
console.log(parseInt("$3MXN".slice(1))+ 5 + 6); //14
console.log(parseInt("$354325MXN".slice(1))+ 5 + 6); //354335

console.log(parseInt("$3MXN".replace('$','')) + 5 + 6 ); //14
console.log(parseInt("$354325MXN".replace('$','')) + 5 + 6 ); //354335

console.log(parseInt("$354325MXN".replace(/[^0-9.]/g,'')) + 5 + 6 ); //354335 (Mejor solucion)

console.log(parseInt("1000")); //1000 en base 10
console.log(parseInt("1000", 2)); //8 Binario (base - 2)

/*
   Number()
    - Convierte directamente una cadena a numeros
    - Si el string tienen caracteres no numericos (12,56), devuelve NaN
    - Puede manejar decimales y exponentes (3e3)
    - Puede convertir booleanos y objects a numbers

   ParseInt()
    - Convierte una cadena a numeros enteros
    - Ignora los caracteres no numericos despues del primer numero (12,56 -> 12)
    - Puede aceptar como argumento , la base numerica parseInt ("1000,2") -> 8 en decimal

   ParseFloat()
    - Convierte una cadena a números de punto flotante
    - Maneja decimales y exponentes
*/

//Conversion a string
console.log(String(23.4)); // 23.4 como string
console.log(String(true)); // true
console.log(String([3,4,6,5])); //3,4,6,5
console.log(String({a:1,b:2,c:3})); // [Object Object]

console.log(JSON.stringify({a:1,b:2,c:3})); //{a:1,b:2,c:3}

//Conversion booleana
//Para que el resultado sea false: "", 0, null, undefined

console.log(Boolean("Hola")); //true
console.log(Boolean("false")); //true
console.log(Boolean(" ")); //true
console.log(Boolean("")); //false
console.log(Boolean(myVarNull)); //false
console.log(Boolean([])); //false

// Conversión a Number()
/*
 [] = 0;
 [30] = 30
 [40,23, 45] = NaN
 false = 0
 true = 1
*/
console.log( Number( [] ) ); // 0
console.log( Number( [9] ) ); // 9
console.log( Number( [3,6,7] ) ); // NaN


// Conversión a String()
/*
  [] = ""
  [1,2] = 1,2
  function(){} = function(){}
  {} = [object Object]
*/