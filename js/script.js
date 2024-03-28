let randomNumber = parseInt(Math.random()*100+1)


// constantes para manipular os elementos html
const submit = document.querySelector('#jogar')
const jogada = document.querySelector('#txtNumero')
const jogadaAnterior = document.querySelector('.vezes')
const jogadasRestantes = document.querySelector('.numChances')
const recomecar = document.querySelector('.resutados')
const avisos = document.querySelector('.avisos')

//criando um paragrafo no JavaScript
const p = document.createElement('p')

//criando vetor para receber números jogados
let numerosJogados = []
//criando um computador para as jogadas
let minhasJogadas = 1
//variavel que permite o usuario jogar
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()

        let tentativa = parseInt(jogada.value) //armazenado o conteudo da caixa de texto em uma variavel
        validaChances(tentativa) //função que irá validar o conteudo jogado
    })
}

function validaChances(tentativa){
    if(isNaN(tentativa)){
        alert('Atenção, para jogar informe um valor númerico, entre 1 a 100!')
        jogada.value = '' //limpando o conteudo da caixa de texto
        jogada.focus() //setando o foco na caixa de texto
    }

    else if(tentativa < 1 || tentativa > 100){
        alert('Atenção, favor informar um valor, entre 1 a 100!')
    }

    else{
        numerosJogados.push(tentativa) //empurando um elemento para o vetor
        if(minhasJogadas === 6 && tentativa !== randomNumber){
            displayTentativas(tentativa) //função
            msg(`Game Over !! <br> O número correto era ${randomNumber} `)
            fimJogo() //função
        }

        else{
            displayTentativas(tentativa)
            checarTentativas(tentativa)
        }
    }
}

function checarTentativas(tentativa){
    if(tentativa === randomNumber){
        msg(`Parabéns, você acertou. O número era ${randomNumber}`)
        fimJogo()
    }

    else if(tentativa < randomNumber){
        msg('Palpite baixo. Tente novamente.')
    }

    else if(tentativa > randomNumber){
        msg('Palpite alto. Tente novamente.')
    }
}

/*
    vamos limpar a caixa para proxima jogada
*/

function displayTentativas(tentativa){
    jogada.value = ''
    jogada.focus()
    jogadaAnterior.innerHTML += `${tentativa} `
    minhasJogadas++
    jogadasRestantes.innerHTML = `${7 - minhasJogadas}`
}

function msg(texto){
    avisos.innerHTML = `<h1>${texto}</h1>`
}

