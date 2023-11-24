console.log("Secion JS04 arreglos y ciclos");

/*
   ========================== Array =============================
   Es un tipo de estructura de datos que se utiliza para
   almacenar una colección ordenada de elementos.
   Estos elementos pueden ser de cualquier tipo.

   Los arrays son objetos especiales con propiedades y
   métodos específicos para trabajar con datos ordenados.
*/

//Declarar un arreglo utilizando corchetes
const nombresCh34 = ["Misael","Luis","Meli"];

//Declarar un arreglo usando el constructor
const apellidosCh34 = new Array("Navarro","Ortega","Flores");

console.log(nombresCh34);
console.log(apellidosCh34);

const numCajonesEstacionamiento = new Array(4); //[ , , , ]
console.log(numCajonesEstacionamiento);
console.log(new Array(2,3,6,7));

/*
   ===================== Arreglos anidados ======================
   A un arreglo anidado tambien se les puede considerar
   como matrices.

   [ [] , [] , [] ];
*/

const equiposIntegrador = [
    ["Msael", "Mirta", "Jocelyn", "Jorge", "Yaz", "Tony", "Itzel"],  /* 3 de pastor */
    ["Chino", "Victor", "Nalle", "Lili", "Fernanda", "Cinthia"],  /* Javadictos */
    ["Gaby", "Charly", "Alan", "Sebas", "Andrew", "Arlene", "Arely"]   /* CodeTitans */
];

//Imprimir al equipo de Javadictos
const javadictosPersonas = equiposIntegrador[1];
console.table(javadictosPersonas);

//Imprimir a Lili de Javadictos
const personaLili = javadictosPersonas[3]; 
console.log(personaLili);

//Imprimir a sevas directo del erreglo
console.table(equiposIntegrador);
console.log(equiposIntegrador[2][3]);
//Mirta
console.log(equiposIntegrador[0][1])
//Arlene
console.log(equiposIntegrador[2] [5])


/*
   ===================== Interar un arreglo =====================
   Mostar en consola todas las personas de los proyectos 
   utilizando ciclos for

   const equiposIntegrador = [     
    ["Misael", "Mirta" , "Jocelyn", "Jorge" , "Yaz"     , "Tony"   , "Itzel" ] , 
    ["Chino" , "Victor", "Nalle"  , "Lili"  , "Fernanda", "Cinthia" ] , 
    ["Gaby"  , "Charly", "Alan"   , "Sebas" , "Andrew"  , "Arlene" , "Arely"]  
   ];
*/

for (let i = 0; i < equiposIntegrador.length; i++) {
   console.log(equiposIntegrador[i]);
   for (let j = 0; j < equiposIntegrador[i].length; j++) {
     console.log(equiposIntegrador[i][j]);
   }
 }


 //Utilizando el metodo forEach
 console.log("========== forEach ========");

 const imprimirFilas = (element,index,array) => {
   console.log(element);
 }

 //Evolucion de sintaxis de funciones 
 equiposIntegrador.forEach(imprimirFilas);
 equiposIntegrador.forEach(function impEquipos(elemnt, index, array) {console.log(elemnt)});
 equiposIntegrador.forEach((elemnt, index, array) => console.log (elemnt));
 equiposIntegrador.forEach( fila => console.log (fila));
 
 //integracion completa 
 equiposIntegrador.forEach((fila,indice) => {
   fila.forEach(columna => console.log(indice, columna))
});

//================ interar utilizando for of ====================
//Se utiliza en elemntos interables como arreglos o strings
console.log("============== for of =============");

for(let fila of equiposIntegrador){
   for(let columna of fila){
      console.log(columna);
   }
};

const myName = "Alejandro";
for(let char of myName){
   console.log(char);
}


/*
   ====================== break y continue =====================
   consideraciones con el ciclo for:
   no es necesario indicar la expresion inicial, la evaluacion 
   y la expresion final

   for (inicio; comparacion; ExpFinal){
      sentencias;
   }

   for ( ; ; ){

   }

   break : rompe con la iteracion en curso y finaliza el ciclo for
*/

const numbers = [3,6,8,1];

//Detener la interacion si encontramos el numero 8
for (let number of numbers ){
   console.log( number );
   if( number === 8 ) break;
}

const matrix = [
    [2      ,4  ,6  ,9999], 
    [10_000 ,6  ,8  ,9   ], 
    [2      ,6  ,8  ,3   ] 
   ];

//Detener la iteracion cuando encuentre un 6, no mostar mas numeros.
//label: indica que ciclo rompera el  break.
console.log("================ Uso de brake y label ============");

rompeMatriz:
for (let row of matrix){
   for (let column of row){
      console.log(column);
      if (column===6) break rompeMatriz;
   }
}

//Mostrar todos los elemntos exepto el 6 (de cualquier fila).
console.log("================ Imprimir exepto el 6 ============");

for (let row of matrix){
   for (let column of row){
      if (column === 6) continue;
         console.log(column);
   }
}

const ages = [18,34,55];
for(let index = 0; index < ages.length; index++) console.log(ages[index]);

//prueba de for
//for (valorInicial ; valorFinal ; iteracion) intrucciones ;
let jiteracion = 0;
for ( ; jiteracion < 5; jiteracion++) /* Instrucciones */ ; //Notar el punto y coma ;

console.log(jiteracion); //5
console.log("Fin de jiteracion"); //Finde jiteracion


/*
   ================= for sin elemntos internos ==================
   Un for sin elemntos puede funcionar pero requiere de especificar
   el resto de elemntos dentro del bloque de codigo que sigue del
   for, de lo contarrio se generaria un bucle infinito.

   for ( ; ; );       <=== bucle infinito

   for ( ; ; ){
      valor inicial;
      valor final;
      break;          <=== break es necesario para parar el for
      interacion;
   };

*/

let x=0;

for ( ; ; ){
   console.log("x" + x);
   if( x >= 6 ) break;
   x++;
};

/*
   Ejemplaxo:

   notar que y se declara con let dentro del ciclo, pero let solo 
   tiene alcance de funcion por lo que "y" como variable solo existe
   dentro del ciclo por lo que no se puede imprimir fuera de este
*/

for (let y = 0; ; ){
    console.log("y: " + y); // 0,1,2,3,4,5,6
    if( y >= 6 ) break;
    y++ 
};

//console.log( y ); // error: y no está definida


/*
   ======================= ciclo while ==========================
   crea un bucle que ejecuta una centencia mientras la condicion 
   especcificada se verdadera.

   while (condicion) {
      sentencia
   };
*/

let counter = 1;
while (confirm("¿Quieres continuar?")){
   console.log("Numero de veces que has entrado: " + counter );
   counter++;
};

//Imprimir los nombres de las mascotas cuando se encuentre con canela.
//Resolver utilizando un ciclo wile

const nombreMascotas = [ "Junior", "Tomy", "Fify", "Canela", "Pelusa", "Freya", "Nana", "Cuco"];

const imprimirMascotasHastaLlegarA = (mascotas, mascotaAEncontrar) => {
   let i = 0;
   while( mascotas[i] !== mascotaAEncontrar ) {
     console.log(mascotas[i]);
     i++;
   }
};
 
imprimirMascotasHastaLlegarA (nombreMascotas,"Nana");


/*
   ===================== ciclo do-while =========================
   Crea un bucle que ejecuta una sentencia hasta que la
   condición de comprobación se evalue como falsa.

   La condición se evalua después de ejecutar la sentencia.
   Esto significa que la sentencia se ejecuta por lo menos una vez.

   sintaxis:

   do {
    sentencia;
   } while( evalución );

*/

/* 
let counterx = 0;
do {
   counterx++;
   console.log("No interacion: "+ counterx);
} while ( confirm("¿Deseas continuar")); 
*/

//===============================================================

let valor = -2;
while ( valor < 5) {
    console.log("While " + valor ); // -2... 4
    valor ++;
}

valor = 4;
do {
    console.log("Do-While " + valor ); // 4
    valor ++;
} while ( valor < 5);


/*
   FIFO: first input, first output
   LIFO: last input, first output
*/