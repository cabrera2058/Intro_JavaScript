

let inputnumero1=document.querySelector("input#numero1");

let inputnumero2=document.querySelector("input#numero2");

let btnCalcular=document.querySelector("Button#calcular");


btnCalcular.addEventListener("click",function(){
    let valor1=Number(inputnumero1);
    let valor2=Number(inputnumero2);
    let suma=valor1=valor2;
    alert(`la suma es igual a${ suma}`);

});
let numero1= Number(prompt("Digiste el numero 1"));   
