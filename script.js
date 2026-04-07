// ALERTA DE BOAS-VINDAS
function boasVindas() {
    alert("Bem-vindo ao site sobre Profissões do Futuro");
}

// MUDAR TEXTO
function mudarTexto() {
    document.getElementById("texto").innerHTML =
        "Profissão: Cientista de Dados ";
}

// CALCULADORA
function somar() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let resultado = n1 + n2;

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}

// QUIZ
function resposta(opcao) {
    let resposta = document.getElementById("quizResposta");

    if (opcao === "b") {
        resposta.innerHTML = "Correto! Engenheiro de IA é uma profissão do futuro.";
    } else {
        resposta.innerHTML = "Errado! Tente novamente.";
    }
}

// CONTADOR
let numero = 0;

function contar() {
    numero++;
    document.getElementById("contador").innerHTML = numero;
}