let arrayJogadas = Array(9)
let mudanca = true
let numJogadas = 0
let xo = document.querySelector('span#xo')
let alternarJogada = 'X'
let resultado = document.querySelector('#resultado')
let combinacoes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let terminoJogo

document.querySelectorAll('.casa').forEach((casa, n) => {
	xo.innerText = 'X'
	casa.onclick = function(){
		let indice = n + 1
		if(mudanca === true && casa.textContent.length === 0 && numJogadas <= 9){
			arrayJogadas[n] = alternarJogada
			casa.innerText = alternarJogada
			alternarJogada = 'O'
			xo.innerText = 'O'
			mudanca = false
			numJogadas++
		} else if(mudanca === false && casa.textContent.length === 0 && numJogadas <= 9){
			arrayJogadas[n] = alternarJogada
			casa.innerText = alternarJogada
			alternarJogada = 'X'
			xo.innerText = 'X'
			mudanca = true
			numJogadas++
		}
		terminoJogo = combinacoes.filter(comb => {
			let alt = alternarJogada === 'X' ? 'O' : 'X'
			
			return comb.every(el => {
				return arrayJogadas[el] === alt
			})
		})
		if(terminoJogo.length === 1){
			mudanca = null
			let vencedor = alternarJogada === 'X' ? 'O' : 'X'
			jogoFinalizado(vencedor)
		}
		if(terminoJogo.length === 0 && numJogadas === 9){
			mudanca = null
			jogoFinalizado()
		}
	}
})
function jogoFinalizado(vencedor){
	if(vencedor === undefined){
		resultado.innerText = 'Deu Velha!!!'
		reiniciar()
	} else {
		resultado.innerText = `${vencedor} venceu`
		terminoJogo[0].forEach((c, i) => {
			document.querySelector(`.c${c + 1}`).style.color = 'red'
			document.querySelector(`.c${c + 1}`).style.fontSize = '7em'
		})
		reiniciar()
	}
}

function reiniciar(){
	document.querySelectorAll('button').forEach(bt => bt.remove())
	let btn = document.createElement('button')
	btn.innerText = 'Reiniciar Jogo'
	btn.id = 'btnReiniciar'

	document.body.appendChild(btn)
	btn.onclick = function(){
		arrayJogadas = Array(9)
		mudanca = true
		numJogadas = 0
		alternarJogada = 'X'
		resultado.innerText = ''
		xo.innerText = 'X'
		terminoJogo = ''
		document.querySelectorAll('.casa').forEach(el => {
			el.innerText = ''
			el.style.color = '#000'
			el.style.fontSize = '6em'
		})
		this.remove()
	}
}