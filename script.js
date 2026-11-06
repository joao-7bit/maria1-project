let tamanhoNao = 1;
let temporizadorFinal;

function trocarTela(atual, proxima) {
    document.getElementById(atual).classList.remove("ativa");
    document.getElementById(proxima).classList.add("ativa");
}

function aceitar() {
    trocarTela("tela1", "tela2");
}

function aumentarNao() {
    tamanhoNao += 0.25;
    document.getElementById("nao").style.transform = `scale(${tamanhoNao})`;
}

function formatarData(data) {
    return data.split("-").reverse().join("/");
}

function mostrarFinal() {
    const inicio = document.getElementById("dataInicio").value;
    if (!inicio) {
        alert("Escolha a data de início do nosso namoro! ♥");
        return;
    }
    document.getElementById("dataEscolhida").innerText =
        "Nossa história começa em: " + formatarData(inicio) + " ♥";
    clearTimeout(temporizadorFinal);
    trocarTela("tela2", "tela3");
}

function confirmarData() {
    const inicio = document.getElementById("dataInicio").value;
    if (!inicio) {
        alert("Escolha a data de início do nosso namoro! ♥");
        return;
    }
    mostrarFinal();
}

document.getElementById("dataFim").addEventListener("change", function() {
    const inicio = document.getElementById("dataInicio").value;
    const aviso = document.getElementById("avisoFim");
    if (!inicio) {
        aviso.style.display = "block";
        aviso.innerText = "Escolha primeiro a data de início! ♥";
        this.value = "";
        return;
    }
    aviso.style.display = "block";
    aviso.innerText = "ERRO! Não existe data para o fim do nosso amor. ♥";
    this.value = "";
    clearTimeout(temporizadorFinal);
    temporizadorFinal = setTimeout(function() {
        mostrarFinal();
    }, 1800);
});

function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("heart");
    coracao.innerHTML = Math.random() > 0.5 ? "♥" : "♡";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (Math.random() * 20 + 15) + "px";
    coracao.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.getElementById("hearts").appendChild(coracao);
    setTimeout(function() {
        coracao.remove();
    }, 7000);
}

setInterval(criarCoracao, 350);
