function boasVindas() {
    alert("Bem-vindo ao site Profissões do Futuro!");
}

// mudar texto
function mudarTexto() {
    document.getElementById("texto").innerText =
    "Essas profissões envolvem tecnologia, inovação e novas soluções!";
}

// mostrar/esconder
function toggleConteudo() {
    let div = document.getElementById("conteudo");

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

// trocar cor
function trocarCor() {
    document.body.style.background =
    "linear-gradient(to right, #95d5b2, #74c69d)";
}

// calculadora
function somar() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let resultado = n1 + n2;

    document.getElementById("resultado").innerText =
    "Resultado: " + resultado;
}

// contador
let numero = 0;

function contar() {
    numero++;
    document.getElementById("contador").innerText = numero;
}

// quiz
function verificar(correto) {
    if (correto) {
        document.getElementById("resposta").innerText = "✅ Correto!";
    } else {
        document.getElementById("resposta").innerText = "❌ Errado!";
    }
}