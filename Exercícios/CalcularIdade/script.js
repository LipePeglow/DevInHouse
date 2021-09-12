
function calcIdade() {
    var dataNasc = document.getElementById("date").value;
    const dataAtual = new Date();
    dataNasc = new Date(dataNasc) ;
   

    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    const mes = dataAtual.getMonth() - dataNasc.getMonth();
 
    if (mes < 0 || mes == 0 && dataAtual.getDate() < dataNasc.getDate()+1) {
        idade--;
    }
    document.getElementById("result").innerHTML = "sua idade atual é: " + idade + " anos.";
}























