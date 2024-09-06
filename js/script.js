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

function avermelhar() {
    let elemento = document.getElementById("paragrafo") || document.getElementById("paragrafoTrocado1") || document.getElementById("paragrafoTrocado2")

    if (elemento) {
        if (elemento.id === 'paragrafo') {
            document.getElementById('paragrafo').style.color = 'red';
            elemento.id = 'paragrafoTrocado1';
            elemento.style.fontSize = '2em';
        } else if (elemento.id === 'paragrafoTrocado1') {
            document.getElementById('paragrafoTrocado1').style.color = 'green';
            elemento.id = 'paragrafoTrocado2';
        } else if (elemento.id === 'paragrafoTrocado2') {
            document.getElementById('paragrafoTrocado2').style.color = 'blue';
            elemento.id = 'paragrafo';
        }
    }else {
        alert("falhou cores")
    }
}

function sominha() {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    let numero1 = parseFloat(input1);
    let numero2 = parseFloat(input2);

    let soma = numero1 + numero2;

    document.getElementById('sominha').innerHTML = `Soma: ${soma}`;
}

function subtracao(){
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    let numero1 = parseFloat(input1);
    let numero2 = parseFloat(input2);

    let subtracao = numero1 - numero2;

    document.getElementById('subtracaozinha').innerHTML = `Subtração: ${subtracao}`;
}

function consoleT() {
    console.log("teste");
}