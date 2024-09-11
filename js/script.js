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
            elemento.style.fontFamily = 'Arial';
        } else if (elemento.id === 'paragrafoTrocado1') {
            document.getElementById('paragrafoTrocado1').style.color = 'green';
            elemento.id = 'paragrafoTrocado2';
        } else if (elemento.id === 'paragrafoTrocado2') {
            document.getElementById('paragrafoTrocado2').style.color = 'blue';
            elemento.id = 'paragrafo';
        }
    } else {
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

function subtracao() {
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

function fibonacci() {
    let input1 = document.getElementById('inputFibonacci').value;

    let numeroAtual = 1;
    let numeroAnterior = 1;
    let proximoNumero = 0;

    const resultadoElement = document.getElementById("resultadoFibonacci");
    resultadoElement.textContent = '';

    const termo1Element = document.createElement('div');
    termo1Element.textContent = `Termo 1 = ${numeroAtual}`;
    resultadoElement.appendChild(termo1Element);

    const termo2Element = document.createElement('div');
    termo2Element.textContent = `Termo 2 = ${numeroAnterior}`;
    resultadoElement.appendChild(termo2Element);

    for (let contadora = 3; contadora <= input1; contadora++) {
        proximoNumero = numeroAnterior + numeroAtual;
        const termoElement = document.createElement('div')
        termoElement.textContent = `Termo ${contadora} = ${proximoNumero}`;
        resultadoElement.appendChild(termoElement);
        numeroAnterior = numeroAtual;
        numeroAtual = proximoNumero;
    }

    // Forma mais simplificada: 

    // const resultadoElement = document.getElementById("resultadoFibonacci");
    // resultadoElement.innerHTML = ''; // clear the element

    // resultadoElement.innerHTML += `Termo 1 = ${numeroAtual}<br>`;
    // resultadoElement.innerHTML += `Termo 2 = ${numeroAnterior}<br>`;

    // for (let contadora = 3; contadora <= input1; contadora++) {
    //     proximoNumero = numeroAnterior + numeroAtual;
    //     resultadoElement.innerHTML += `Termo ${contadora} = ${proximoNumero}<br>`;
    //     numeroAnterior = numeroAtual;
    //     numeroAtual = proximoNumero;
    // }


}

function fatorial(){
    let input1 = document.getElementById('inputFatorial').value;

    let fatorial = 1

    const resultadoElement = document.getElementById("resultadoFatorial");
    resultadoElement.textContent = '';

    for (let contadora = 1; contadora <= input1; contadora++) {
        fatorial = fatorial * contadora;
        const termoElement = document.createElement('div');
        termoElement.textContent = `Fatorial de ${contadora} = ${fatorial}`;i
        resultadoElement.appendChild(termoElement);
    }
}