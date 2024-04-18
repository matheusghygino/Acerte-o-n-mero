const menorValor = 0;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto () {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('O número secreto é: ' + numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;