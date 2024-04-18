const verificaSeOChutePossuirValorValido = () => {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido<div />';
        return 
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar__novamente" class="btn__jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar__novamente') {
        window.location.reload()
    }
})