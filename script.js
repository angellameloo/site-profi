function boasVindas() {
    alert("Bem-vindo ao site Profissões do Futuro!");
}

// Mudar texto
function mudarTexto() {
    document.getElementById("texto").innerHTML = "Você acabou de mudar o texto!";
}

// Mostrar/Esconder
function mostrarConteudo() {
    let conteudo = document.getElementById("conteudo");

    if (conteudo.style.display === "none") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

// Trocar cor
function trocarCor() {
    document.body.style.backgroundColor = "#d8f3dc";
}

// Calculadora
function somar() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let resultado = n1 + n2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

// Contador
let cont = 0;

function contar() {
    cont++;
    document.getElementById("contador").innerHTML = cont;
}

// Quiz
function resposta(correto) {
    if (correto) {
        document.getElementById("quizResposta").innerHTML = "Resposta correta!";
    } else {
        document.getElementById("quizResposta").innerHTML = "Resposta errada!";
    }
}