console.log("JS06 apiDOM");

/**
 * Modificar un elemnto HTML por su ID
 */
const findElementById = () => {
  //Obtener el objeto del DOM
  const titleRef = document.getElementById("title");
  console.log( titleRef.innerHTML);

  //Modificar el contenido
  titleRef.innerHTML = `
    <div class="text-center">
        <h1 class="text-danger">Clika Ch34 </h1>
        <h2 class="text-warning">En el barrio no hay reglas </h2>
    </div>`;
}

findElementById();

/**
 * Encontrar y modificar elemntos por su tag 
 */
const changeElementByTagName = () => {
    const sectionsRef = document.getElementsByTagName("section")
    console.log(sectionsRef); //3 objetos section

    //Agregando estilos personalizados
    const color = "purple"
    for (let section of sectionsRef){
        section.style.border = `2px solid ${color}`;
    }
}

changeElementByTagName();


/**
 * Modificar un elemnto utilizando el selector universal
 */
const changeElementByQuerySelector = () => {
    //Nos trae la referencia del primer elemnto que cumpla con
    //la condicion en el selector universal.
    //const element = document.querySelector("#description"); //Selector por ID
    //const element = document.querySelector( ".list"  ); // Selector por clase
    //const element = document.querySelector( "p"  ); // Selector por tag
    const element = document.querySelector( "#clickas p" ); // Selector por ID y depues por etiqueta  
    console.log(element);
}

changeElementByQuerySelector();