console.log('Jogo carregado!')

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Aula 02
// Função com parâmetros
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  // Aula 11
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

/* Função sem retorno */
function verificarChute() {
  // Aula 04
  let chute = document.querySelector('input').value;
  //Aula 05
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    // Aula 06
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    // Aula 07
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('h1', 'Errou!');
      exibirTextoNaTela('p', 'O número secreto é menor!');
    } else {
      exibirTextoNaTela('h1', 'Errou!');
      exibirTextoNaTela('p', 'O número secreto é maior!');
    }
    tentativas++;
    limparCampo();
  }
}

// Aula 03
// Função com retorno
function gerarNumeroAleatorio() {
  // Aula 09
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosNaListas = listaDeNumerosSorteados.length;

  //Aula 10
  if (quantidadeElementosNaListas == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }
}

// Aula 07
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

// Aula 08
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}