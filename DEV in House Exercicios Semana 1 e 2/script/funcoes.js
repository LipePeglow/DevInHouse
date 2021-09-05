function perguntar() {
    let a = prompt("Digite seu nome: ")
    let b = parseInt(prompt("Digite sua idade:  "));
    let c = confirm("Pratica esportes? Ok=SIM/Cancel=NÂO");

    if (c) {
        alert("Continue assim !!!")
    } else {
        alert("Você precisa praticar!!!")
    }

    alert("Próxima pergunta")

    let sobrenome = prompt("Digite seu sobrenome:");
    let nome = prompt("Digite seu nome:");
    alert("Olá, " + nome + " " + sobrenome + " ");

    alert("Próxima pergunta")

    let anoNascimento = prompt("Qual é o seu ano de nascimento?");
    let anoAtual = prompt("Qual é o ano atual?");
    let idade = anoAtual - anoNascimento;
    alert("Sua idade é : " + idade + " anos")

}

function calcular() {
    alert("Seja bem vindo a Calculadora!");

    var operacao = prompt("Digite 'S' para somar, 'L' para subtrair, 'D' para dividir, 'M' para multiplicar: ");
    if (operacao == 'S' || operacao == 's') {
        let s1 = parseInt(prompt('Digite primeiro número '));
        let s2 = parseInt(prompt('Digite segundo número '));
        let somar = s1 + s2;
        alert("Resultado da operção: " + somar);
    } else if (operacao == 'L' || operacao == 'l') {
        let a1 = parseInt(prompt('Digite primeiro número '));
        let a2 = parseInt(prompt('Digite segundo número '));
        let diminuir = a1 - a2;
        alert("Resultado da operção: " + diminuir);
    } else if (operacao == 'D' || operacao == 'd') {
        let d1 = parseInt(prompt('Digite primeiro número '));
        let d2 = parseInt(prompt('Digite segundo número '));
        let dividir = d1 / d2;
        alert("Resultado da operção: " + dividir);
    } else if (operacao == 'M' || operacao == 'm') {
        let m1 = parseInt(prompt('Digite primeiro número '));
        let m2 = parseInt(prompt('Digite segundo número '));
        let multiplicar = m1 * m2;
        alert("Resultado da operção: " + multiplicar);
    }
}

function PA() {
    const primeiroValor = parseInt(prompt("Valor inicial: "));
    const raiz = parseInt(prompt("Raiz: "));

    let valor = primeiroValor;
    let valores = [];
    for (let i = 0; i < 10; i++) {
        valores.push(valor);
        valor += raiz;

    }
    alert('inicial= ' + primeiroValor + ',Raiz= ' + raiz + ',P.A= ' + valores)
}
function sobrenome() {
    let a = prompt('Qual seu último sobrenome?')
    alert('Olá, ' + a.toUpperCase() + ' Seu sobrenome contém ' + a.length + ' letras')

}




