// Soy perdro
//Crea un array con los días de la semana que el usuario digite
let DiasDeSemana=["Dominingo","Lunes","Martes","Miercoles ", "Jueves "," Viernes","Sabado"] ;
let dias=prompt("Que dia es hoy");



//Crea un array con 3 nombres de los miembros de familia que el usuario digite.
let MiembroFamilia=[" Juan","Leonidad ","Reinado"];

// Crea un objeto llamado datosPersonales y pídele al usuario que digite la siguiente información
let datosPersonales={
Nombre: prompt("Digite su nombre"),
FechaNacimiento:  prompt("Digite su fecha de nacimiento de esta forma"+"12/23/1991") ,
LugarNacimiento: prompt("Digite el lugar donde nacio"),
Edad: prompt(" digite su edad"),
ComidasFavoritas: prompt("¿Cuales son tu comidad favoritas?"),
PaisesVisitar: prompt("Cuales son los paises que desea visistar/ por lo meno 5 paises  ?"),
LicenciaConducir:Number.parseFloat (prompt(" posee licencia para conducir" +" "+ "Si/No")),
Studiouniversidad: Number.parseFloat(prompt("posee licensia"+ " "+ " si/no")),

}
alert(` buen dia${datosPersonales.Nombre }  hoy es  ${dias}`);

//Crea un objeto con los datos personales del artista favorito del usuario.
// Pide la información que encuentres relevante (por ejemplo: nombre, edad, canciones, etc).

let ArtistaFavorito={
 nombre: "Odalis Perez",
 edad:" 32",
 canciones: ["Real Guerrero","Papa Dios Me Dijo "],
 vive: "La Cienega, República Dominicana",


}
//5. Imprime la siguiente información por la consola:
//- Nombre Completo
//- Fecha de nacimiento
//- El primer país que le gustaría visitar
//- 4 datos del artista favorito

console.log(` Tu nombre es: ${datosPersonales.nombre}`);
console.log(` La fecha de nacimiento es: ${datosPersonales.FechaNacimiento}`);
console.log(` El pais que deseo visitar es: ${datosPersonales.PaisesVisitar}`);
console.log(` Nombre de artita favorito: ${ArtistaFavorito.nombre}`);
console.log(` Edad de artita: ${ArtistaFavorito.edad}`);
console.log(` Cancion favorita: ${ArtistaFavorito.canciones}`);
console.log(` vive en:  ${ArtistaFavorito.vive}`);


