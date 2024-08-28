function executar() {
    alert("funfa")
}

function hora() {
    document.getElementById("hora").innerHTML = Date();
}

function trocar() {
    var elemento = document.getElementById("testeTroca") ||  document.getElementById("testeTrocado");

    
    if (elemento) {
        if (elemento.id === 'testeTroca') {
            document.getElementById("testeTroca").innerHTML = "Trocado";
            elemento.id = 'testeTrocado';
        } else if (elemento.id === 'testeTrocado') {
            document.getElementById("testeTrocado").innerHTML = "Trocando";
            elemento.id = 'testeTroca';
        }
    } else {
        alert("falhou")
    }
    
}