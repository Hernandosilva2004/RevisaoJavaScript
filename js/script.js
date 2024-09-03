function executar() {
    alert("funfa")
}

function hora() {
    document.getElementById("hora").innerHTML = Date();
}

function trocar() {
    var elemento = document.getElementById("testeTroca") || document.getElementById("testeTrocado");


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

function sominha(){
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    let numero1 = parseFloat(input1);
    let numero2 = parseFloat(input2);

    let soma = numero1 + numero2;
    
    document.getElementById('sominha').innerHTML = `Soma: ${soma}`;
}