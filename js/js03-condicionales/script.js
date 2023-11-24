console.log("Sesion Js 03 condicionales")

/*
  ==================Condicional if - else==================

  La condicional if ejecuta una unica centencia si una condicion
  especificada es evaluada como verdadera. En caso contrario
  podemos usar la sentencia else

  Sintaxis:
  if (condicion) sentencia;
  
  if (condicion) {
    sentencia1;
    sentencia2;
    sentencia3;
    sentenciaN;
  } 

  if (condicion) sentenciaVerdadera;
  else sentenciaFalsa;
*/

const temperatura = 27;

//Verificar temperatura, si es mayor o igual a 26 grados
//imprimir consola "team calor"
//en caso contrario "team frio"

if (temperatura >= 26) {
  console.log("Team calorssss");
} else {
  console.log("Team frijol");
}

if (temperatura===21) {  //Si no existieran el bloque de codigo {} solo se asociaria la primera intruccion despues de if
  console.log("Temperatura sabrosonsa");
  console.log("Me pongo a la moda con shorts y calcetines");
}

//=======================================================

const temp = 20;

if (temp === 15){
  console.log("Frio");
  console.log("Esto no le gusta a Nan");
}
else
  console.log("Temp. a analizar");

//=========================================================

const age = 25;

if (age===50) /* Instrucciones (en este caso no hay) */ ;
  console.log("Estas en los nuevos 30s");
console.log("Fin de analizar tu edad");

//========================================================

function verdadero(){
  return true;
}

if (verdadero()) console.log("Resultado verdadero");

console.log("Se termina de analizar la funcion")

/*
  ============= Condicional if - else if - else ===========
  if (condicion1) sentencia2;
  else if (condicion2) sentencia2;
  else if (condicionN) sentenciaN;
  else sentenciaFalse;
*/

const color = "negro";
let mensaje = "";

/*
if (color === "negro") {
  mensaje = "Color negro";
}
else {
  if (color === "verde"){
      mensaje = "color verde";
  }
  else {
      if (color === "azul"){            
          mensaje = "color azul";
      }
      else {
          mensaje = "No tengo el color registrado";
      }
  }
}
*/

//sintaxis else - if anidad mas legible

if (color === "negro")  mensaje = "Color negro";
else if (color === "verde") mensaje = "color verde";    
else if (color === "azul") mensaje = "color azul";           
else mensaje = "No tengo el color registrado";


/*
  ================== Sentecia Switch ====================
  La sentencia Switch evalua una expresió y se compara con
  el valor de cada instancia en "case" y se ejecuta las
  sentenicas asociadas a ese "case" hasta que se ecuentre
  la sentencia break o que finalice el Switch.

  La evaluación es estricta ( === ).

  Sintaxis:
   switch( expresión ) {
     case valor1:
        sentecias;
      break;
     case valor2:
        sentencias;
      break;
     case valorN:
        sentencias;
      break;
     default:
        sentencias;
      break;
   } 
*/

const person = "Oswaldo";

switch (person) {
  case "Sergio":
    mensaje = "Hola Sergio, Instructor";
    break;
  case "TonY":
    mensaje = "Hey Tony";
    break;
  case "Gaby":
    mensaje = "Hola Gaby";
    break;
  default:
    mensaje = "Persona desconocida";
}

console.log (mensaje);

//====================================================
/*
  Imprimir aprobado si la calificación es 7,8,9,10
  Imprimir reprobado fuera de esos números

  Realizarlo con switch dentro de una función.
*/

const aprovadoOReprovado = (califiacacion) => {
  let message = "";
  switch (califiacacion) {
    case 7:
    case 8:
    case 9:
    case 10:
      message = "Aprobado"
    break;
    default:
      message = "Reprovado"
  }
  return message;
}

console.log("Tu resultado con 8 es: " + aprovadoOReprovado(8));
console.log("Tu resultado con 3 es: " + aprovadoOReprovado(3));
console.log("Tu resultado con 11 es: " + aprovadoOReprovado(11));


// ======================================================
/*
 Realizar dos funciones, una usando switch y otra con if-else if-else
 Donde verifique el mes del 1 al 12 y despliegue la estación del año.

 mes 12 , 1, 2 = Invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño
*/

const estacionesUtilizandoIfElse = (mes) => {
  let sentencia = "";
if (mes === 12 || mes === 1 || mes === 2)  sentencia = "La estacion es invierno";
else if (mes >=3 && mes <= 5) sentencia = "La estacion es Primavera";    
else if (mes >=6 && mes <= 8) sentencia = "La estacion es Verano";    
else if (mes >=9 && mes <= 11) sentencia = "La estacion es Otoño";               
else sentencia = "No ingresaste un mes valido";

return sentencia;
}


const estacionesUtilizandoSwitch = (mes) => {
  let sentencia = "";
  switch (mes) {
    case 1:
    case 2:
    case 12:
      sentencia = "La estacion es Invierno"
    break;
    case 3:
    case 4:
    case 5:
        sentencia = "La estacion es primavera"
    break;
    case 6:
    case 7:
    case 8:
          sentencia = "La estacion es verano"
    break;
    case 3:
    case 4:
    case 5:
          sentencia = "La estacion es otoño"
    break;
    default:
      sentencia = "No introduciste un mes valido"
  }
  return sentencia;
}

console.log("La estacion que le corresponde al mes 8: "+ estacionesUtilizandoIfElse(8));
console.log("La estacion que le corresponde al mes 16: "+ estacionesUtilizandoIfElse(16));
console.log("La estacion que le corresponde al mes 12: "+ estacionesUtilizandoSwitch(12));
console.log("La estacion que le corresponde al mes 20: "+ estacionesUtilizandoSwitch(20));

/*
 ====================== Operador Ternario ===========================
  Es el único operador de JavaScript que tiene 3 operandos.
  Generalmente se usa como opción simplificada a la 
  sentencia if-else.

  Sintaxis:

  condición ? expresionSiCondiciónEsVerdadera :  expresionSiCondicionEsFalsa;

*/
const subtotal = 1_000_000;
const esFrontera = true;
let total;

if ( esFrontera )
  total = subtotal * 1.08
else
  total = subtotal * 1.16

console.log(`El total es ${total}`);

//Aplicando el operador ternario
const totalConIVA = esFrontera ? subtotal * 1.08 : subtotal * 1.16;
console.log(`Operador ternario ${ totalConIVA }`);

//Reducción con el operador ternario
console.log(`Total : ${ subtotal * (esFrontera ? 1.08 : 1.16) }`);

/*  
  Evaluar la edad de una persona
  Si la persona es igual o mayor a 18 : puede votar
  En caso contrario: no puede votar
*/
const edad = 16;
console.log(`Puedes votar? : ${ edad >= 18 ? "Tu puedes votar" : "Tu no puedes votar"}`);
console.log(`Tu ${edad >= 18 ? "puedes votar" : "no puedes votar"}`);
