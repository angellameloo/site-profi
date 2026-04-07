function boasVindas() {
    alert("Bem-vindo ao site sobre Profissões do Futuro!");
}

// Mudar texto
function mudarTexto() {
    document.getElementById("texto").innerHTML = "Profissão: Engenheiro de Inteligência Artificial 🤖";
}

// Trocar cor
function mudarCor() {
    document.body.style.backgroundColor = "#c8e6c9";
}

// Mostrar / esconder
function toggleTexto() {
    let texto = document.getElementById("extra");

    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}

// Contador
let numero = 0;

function contar() {
    numero++;
    document.getElementById("contador").innerHTML = numero;
}