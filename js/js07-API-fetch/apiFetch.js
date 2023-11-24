console.log("JS07 - apiFetch");

/*
    API: Application Programming Interface
    Permite la comunicación entre dos aplicaciones de software
    a travéz de un conjunto de reglas.

    La API Fetch nos ayuda a acceder y manipular 
    peticiones HTTP (DELETE, GET, POST, PUT).
 
    Sintaxis:
    fetch(resource, options)

    La API fetch en JavaScript proporciona una interfaz para realizar 
    solicitudes de red, como solicitudes HTTP, de manera asíncrona. 
    Es una forma moderna y más poderosa de realizar solicitudes HTTP 
    en comparación con métodos más antiguos, como XMLHttpRequest.
*/

const urlFakeStore = "./pokemones.json";

/*
const getProducts = ( url ) =>{
   // Realizando solicitud Get
   // .then() consume/maneja la promesa cuando sea resuelta
   // .catch() se ejecuta en caso de que la promesa sea rechazada.
   fetch(urlFakeStore)
    .then (response => {
      console.log("Status code: " + response.status);
      response.json()
      .then(products => console.log(products))
      .catch(error => console.log("Error en la conversoion " + error));
   })
    .catch (error => {
      console.log ("Error en la solicitud GET");
      console.warn (error);
   });
};
*/


//============ Solucion asincrona con .then y .catch ============
const getProducts = ( url ) =>{
   // Realizando solicitud Get
   // .then() consume/maneja la promesa cuando sea resuelta
   // .catch() se ejecuta en caso de que la promesa sea rechazada.
   fetch(urlFakeStore)
    .then (response => {
      console.log("Status code: " + response.status);
      return response.json();
   })
   .then(products => {
      console.log(products)
      imprimirEnDOM(products);
   })
   .catch (error => {
      console.log ("Error en la solicitud GET");
      console.warn (error);
   });
};


//============ Solucion sincrona con async y await =============
const getProductsUsingAsyncAwait = async (url) => {
   try {
      const response = await fetch(url);
      const products = await response.json();
      imprimirEnDOM(products);
   } catch (error) {
      console.log(error);
   }
};


//getProducts( urlFakeStore );
getProductsUsingAsyncAwait(urlFakeStore)


function imprimirEnDOM( products) {
   const productsContainer = document.getElementById("products-container");

   // solución 1
   const myArrayOfTitle = [];
   products.forEach( (element, idex, array )=>{ myArrayOfTitle.push( `<p>${ element.title }</p>` )}  ); 

   // solución 2
   // products.map( (element, idex, array )=>{}  ); 
   const productsTitle = products.map( (product, index, array) =>
   `
   <article class="col-sm-6 col-lg-4">
   <div class="card mx-auto mb-2" style="width: 12rem;">
    <img src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
   </div>          
   </article>
   ` 
   );
   
   console.log( myArrayOfTitle );
   console.log( productsTitle );

   productsContainer.innerHTML =  productsTitle.join("");
   // productsContainer.innerHTML =   myArrayOfTitle.join("");
};

