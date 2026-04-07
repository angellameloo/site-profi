// Alerta de boas-vindas
function boasVindas() {
    alert("Bem-vindo ao site!");
}

// Mudar texto
function mudarTexto() {
    document.getElementById("texto").innerHTML = "Texto alterado!";
}

// Trocar cor
function mudarCor() {
    document.body.style.backgroundColor = "lightblue";
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