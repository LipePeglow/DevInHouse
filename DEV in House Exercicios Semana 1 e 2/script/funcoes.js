function perguntar() {
    const pNome = prompt("Digite seu nome: ")
    const pIdade = parseInt(prompt("Digite sua idade:  "));
    const pEsportes = confirm("Pratica esportes? Ok=SIM/Cancel=NÂO");

    if (pEsportes) {
        alert("Continue assim !!!")
    } else {
        alert("Você precisa praticar!!!")
    }

    alert("Próxima pergunta")

    const sobrenome = prompt("Digite seu sobrenome:");
    const nome = prompt("Digite seu nome:");
    alert("Olá, " + nome + " " + sobrenome + " ");

    alert("Próxima pergunta")

    const anoNascimento = prompt("Qual é o seu ano de nascimento?");
    const anoAtual = prompt("Qual é o ano atual?");
    const idade = anoAtual - anoNascimento;
    alert("Sua idade é : " + idade + " anos")

}

function calcular() {
    alert("Seja bem vindo a Calculadora!");

    const operacao = prompt("Digite 'S' para somar, 'L' para subtrair, 'D' para dividir, 'M' para multiplicar: ");
    if (operacao.toUpperCase() == 'S') {
        let s1 = parseInt(prompt('Digite primeiro número '));
        let s2 = parseInt(prompt('Digite segundo número '));
        let somar = s1 + s2;
        alert("Resultado da operção: " + somar);
    } else if (operacao.toUpperCase() == 'L') {
        let a1 = parseInt(prompt('Digite primeiro número '));
        let a2 = parseInt(prompt('Digite segundo número '));
        let diminuir = a1 - a2;
        alert("Resultado da operção: " + diminuir);
    } else if (operacao.toUpperCase() == 'D') {
        let d1 = parseInt(prompt('Digite primeiro número '));
        let d2 = parseInt(prompt('Digite segundo número '));
        let dividir = d1 / d2;
        alert("Resultado da operção: " + dividir);
    } else if (operacao.toUpperCase() == 'M') {
        let m1 = parseInt(prompt('Digite primeiro número '));
        let m2 = parseInt(prompt('Digite segundo número '));
        let multiplicar = m1 * m2;
        alert("Resultado da operção: " + multiplicar);
    }
}

function calcularPA() {
    const primeiroValor = prompt("Valor inicial: ");
    const raiz = parseInt(prompt("Raiz: "));

    if (primeiroValor != null && raiz != null) {
        let valor = parseInt(primeiroValor)
        let valores = []
        for (let i = 0; i < 10; i++) {
            valores.push(valor);
            valor += raiz;
        }
        alert('inicial= ' + primeiroValor + ',Raiz= ' + raiz + ',P.A= ' + valores)

    } else {
        alert('Nenhum número foi digitado')
    }

}
function sobrenome() {
    const lastname = prompt('Qual seu último sobrenome?')
    alert('Olá, ' + lastname.toUpperCase() + ' Seu sobrenome contém ' + lastname.length + ' letras')

}




