console.log("JS06 - formulario");

//Obtener la referencia del formulario
const registerForm = document.forms["registerForm"];

//Crear un evento del boton sumit
/**
 * Adjunta un controlador de eventos a un elemnto HTML.
 * EventType: Tipo de evento a escuchar
 * fncCallBack: Funcion de CallBack que se ejecutara cuando sucede el evento
 * 
 * .addEventListener(event, fncCallback);
 * 
 * El evento se realizara al pulsr el boton submit
 */
registerForm.addEventListener("submit", (event)=>{
    //Evita el comportamiento predeterminado asociados a un evento
    event.preventDefault();
    console.log(event);

    const user ={
        email : registerForm.elements["inputEmail1"].value,
        password : registerForm.elements["inputPassword1"].value,
        confirmPassword : registerForm.elements["inputPassword2"].value,
        termsAndConditions : registerForm.elements["gridCheck"].checked,
    };

    if(datosVerificados (user) ){
        enviarDatosAlServidor(user);
    };
} );

const datosVerificados = (user) => {
    let response = true;

    if(user.email === ""){
        mensajeError("Falta introducir el email");
        response = false;
    } else if (user.password.length < 8){
        mensajeError("El pasword debe ser mayor o igual a 8 caracteres");
        response = false;
    }else if (user.password !== user.confirmPassword){
        mensajeError("La confirmacion de la contraseña no es valida");
    }else if  (!user.termsAndConditions){
        mensajeError("Debe aceptar los términos y condiciones");
        response = false;
    }else {
        mensajeError("");
    }

    return response;
};

const mensajeError = (message) => {
    console.log(message);
    const errorMessage = document.getElementById("error-message");
    const errorMessageContainer = document.getElementById ("error-message-container");

    errorMessage.innerHTML = message;
    if (message === ""){
        // displaty: none: quita el elemento del DOM
        // visibility: hidden : ocultar
        errorMessageContainer.style.display = "none";   
    }else { errorMessageContainer.style.display = "block";
    }
};

const enviarDatosAlServidor = ( user ) => {
    console.table(user);
    // TODO enviar datos a la api del servidor
};