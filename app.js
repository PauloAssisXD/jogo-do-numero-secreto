// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// Principal


let listaDeNumerosSorteados = [];

let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroLimite}`);    
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(`O número secreto é ${numeroSecreto}`);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }

    else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.'); 
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior.'); 
        }
        tentativas++;
        limparCampo ();
        

    }

    
    //console.log(chute == numeroSecreto);
}


function gerarNumeroAleatorio() {
    console.log(listaDeNumerosSorteados);
    //console.log(numeroSecreto);
    let numeroEscolhido = parseInt( (Math.random() * numeroLimite ) + 1);

    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        gerarNumeroAleatorio();
    }

    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}




// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

/*

// Exercício 01

//01
function exibirOlaMundo (){
    console.log("Olá, mundo!");
}

//02
function exibirSaudacaoComNome (nome){
    console.log(`Olá, ${nome}`);
}

//03
function dobroDoNumero  (numero){
    return (2 * numero);
}

//04
function mediaTresNumeros (numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}

//05
function maiorDeDoisNumeros (numero1, numero2){
    return (numero1 > numero2 ? numero1 : numero2);
}

//06
function numeroAoQuadrado (numero){
    return (numero * numero);
}

// Testes

console.log("Testando Funções");
exibirOlaMundo();
exibirSaudacaoComNome("Paulo");
console.log(dobroDoNumero(20));
console.log(mediaTresNumeros(290, 90, 70));
console.log(maiorDeDoisNumeros(54710, 400));
console.log(numeroAoQuadrado(13));

*/

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

/*

// Exercício 01

// 01

function calularIMC(peso, altura){
    return (peso / (altura * altura));
}

console.log("O IMC: "+calularIMC(108, 1.75));

//02
function calcularFatorial (numero){
    let fatorial = 1;
    let multiplicador = 1;
    while(multiplicador<numero){
        multiplicador++;
        fatorial = fatorial * multiplicador;
    }

    return fatorial;
}

console.log("Fatorial de 1 :"+calcularFatorial(1));
console.log("Fatorial de 2 :"+calcularFatorial(2));
console.log("Fatorial de 3 :"+calcularFatorial(3));
console.log("Fatorial de 4 :"+calcularFatorial(4));
console.log("Fatorial de 5 :"+calcularFatorial(5));

// 03

function converteDolarParaReal (valor){
    return valor * (4.8);
}

console.log("10 dólares em reais vale: "+ converteDolarParaReal(10));
console.log("15 dólares em reais vale: "+ converteDolarParaReal(15));

// 04
function calcularAreaPerimetroSala (altura, largura){
    let perimetro = (altura * 2) + (largura * 2);
    let area = altura * largura;
    alert(`O perímetro da sala é ${perimetro} e a área é ${area}`);
}


calcularAreaPerimetroSala(10, 18);

//05

function calcularAreaPerimetroCirculo (raio){
    let perimetro = 2 * (raio) * (3.14);
    let area = (3.14) * (raio) * (raio);
    alert(`O perímetro da sala circular é ${perimetro} e a área é ${area}`);
}

calcularAreaPerimetroCirculo(10);

// 06

function mostrarTabuada (numero){
    let contador = 0;
    let multiplicacao = 1;
    while (contador < 10){
        contador++;
        multiplicacao = numero * contador
        console.log(`${numero} X ${contador} = ${multiplicacao}`);
    }

}

mostrarTabuada(5);

*/

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------