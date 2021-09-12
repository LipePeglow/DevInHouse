function Somar (){
    let numero1 = document.querySelector("#numero1").value;
    let numero2 = document.querySelector("#numero2").value;
    let resultado = document.querySelector("#texto");
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2)
    let soma = numero1 + numero2;
    
    resultado.innerHTML = soma;

}
function Subtrair (){
    let numero1 = document.querySelector("#numero1").value;
    let numero2 = document.querySelector("#numero2").value;
    let resultado = document.querySelector("#texto");
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2)
    let sub = numero1 - numero2;
    
    resultado.innerHTML = sub;

}
function Multiplicar (){
    let numero1 = document.querySelector("#numero1").value;
    let numero2 = document.querySelector("#numero2").value;
    let resultado = document.querySelector("#texto");
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2)
    let mult = numero1 * numero2;
    
    resultado.innerHTML = mult;

}
function Dividir (){
    let numero1 = document.querySelector("#numero1").value;
    let numero2 = document.querySelector("#numero2").value;
    let resultado = document.querySelector("#texto");
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2)
    let div = numero1 / numero2;
    
    resultado.innerHTML = div;

}