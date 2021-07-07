	let numjogadas = 0
	let player = 'X'
	let mudanca = true
	let jogadas = Array()

	function jogo(casa){

		let numero = document.querySelector('.c' + casa).textContent
		let c = casa

		if (mudanca === true){
			if (numero.length > 0){
				console.log('Excedeu')
			} else {
				// Contador para contar o número de jogadas
				numjogadas++

				mudanca = false
				document.querySelector('.c' + casa).innerText = 'X'
				document.querySelector('#xo').innerText = 'O'
				jogadasTotais('X', c)
			}

		} else if(mudanca === false){
			if (numero.length > 0){
				console.log('Excedeu')
			} else {
				numjogadas++

				mudanca = true
				document.querySelector('.c' + casa).innerText = 'O'
				document.querySelector('#xo').innerText = 'X'
				jogadasTotais('O', c)
			}

		} else if(mudanca === 'venceu') {

			document.querySelector('#resultado').innerText = 'JOGO TERMINADO'
		}

		function jogadasTotais(n, c){

			jogadas[c-1] = n
			console.log(jogadas)

		}


		// Jogos em linha
		for(let i = 0; i <= 6; i+=3){

			if(jogadas[i] + jogadas[i + 1] + jogadas[i + 2] === 'XXX' || jogadas[i] + jogadas[i + 1] + jogadas[i + 2] === 'OOO'){

				resultadoJogo()
				mudanca = 'venceu'
				break
			}
		}

		// Jogos em coluna
		for(let i = 0; i <= 2; i++){

			if(jogadas[i] + jogadas[i + 3] + jogadas[i + 6] === 'XXX' || jogadas[i] + jogadas[i + 3] + jogadas[i + 6] === 'OOO'){

				resultadoJogo()
				mudanca = 'venceu'
				break
			}
		}

		// Jogos em diagonal
		if(jogadas[0] + jogadas[4] + jogadas[8] === 'XXX' || jogadas[0] + jogadas[4] + jogadas[8] === 'OOO'){
			mudanca = 'venceu'
			console.log(`O jogador ${player} venceu`)
			resultadoJogo()
		}
		if(jogadas[2] + jogadas[4] + jogadas[6] === 'XXX' || jogadas[2] + jogadas[4] + jogadas[6] === 'OOO'){
			mudanca = 'venceu'
			console.log(`O jogador ${player} venceu`)
			resultadoJogo()
		}


		function resultadoJogo(){
			document.querySelector('#resultado').innerText = 'JOGO TERMINADO'
		}

		if(numjogadas === 9 && mudanca !== 'venceu'){
			document.querySelector('#resultado').innerText = 'DEU VELHA!!!'
		}


	}