

//let confimacion= confirm("Desea salir de este navegador ");

//console.log(confimacion);

let usuario={};

usuario.nombre= prompt(" como te llama");
usuario.email= prompt("Dime tu correo");
usuario.tineTikTok= confirm("tiene TikTok?(aceptar= Si/ cancelar = No)");

console.log(usuario);

let ConfirmarCerrarVentana= confirm("Desea salir de la pagiana?");
if(ConfirmarCerrarVentana)
{
  window.close () ;
}
