console.log("JS08 - Objetos");

// ------------- Uso  de  symbol --------------------------------------
/*
 Se utiliza para añadir claves de propiedades únicas y que estén ocultas
 a otros mecanismos como la iteración y stringify.

 Esto nos sirve para realizar el concepto de encapsulación.
*/

const escondite = Symbol();

//============= Crear Un objeto en JS ==============

const natsu = {
    nombre: "Natsu", 
    color: ["blaco", "beige"],
    eterilizado: true,
    raza: "criollo",
    tamanioCm: 25,
    edad: 8,
    [escondite]: "Cama de Meli",
    maullar: function(){
        return "miiiiiaaaau";
    },
    comer: function(comida){
        return `${this.nombre} come ${comida}`;
    }
};

console.log(`Meli tiene de mascota a ${natsu.nombre} de edad ${natsu.edad} `);
//se le va a dar de comida: pescado
console.log(`Quiero que ${natsu.nombre} coma ${natsu.comer("pesacado")} `);

//interar los atributos de un objeto
for(let atributo in natsu){
    console.log(`${atributo} : ${natsu[atributo]}`);
};

//Guardar los valores de natsu en el local storage
localStorage.setItem("datosNatsu", JSON.stringify(natsu));

console.log(`El escondite de Natsu es: ${natsu[escondite]}`);
