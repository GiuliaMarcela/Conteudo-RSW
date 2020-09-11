function validarDados() {
    let nome = document.getElementById('nome').value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome.length < 3) {
        alert("O nome deve ter no mínimo três caracteres");
        return false;
    }

    if (assunto.length < 5) {
        alert("O assunto deve ter no mínimo cinco caracteres");
        return false;
    }

    if (mensagem.length < 5) {
        alert("O mensagem deve ter no mínimo cinco caracteres");
        return false;
    }

    alert("Mensagem enviada com sucesso.");
    return true;

}

function altoContraste() {
    let cor = document.body;
    cor.classList.toggle('alto-contraste1');
}