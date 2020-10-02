/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/*  console.log("Bem vindo ao Blackjak Labenu!")
 if(confirm("Você deseja iniciar uma rodada ?")) {
   const carta1Usuario = comprarCarta();
   const carta2Usuario = comprarCarta();
   const carta1Cpu = comprarCarta();
   const carta2Cpu = comprarCarta();
   const pontosJogador = carta1Usuario.valor + carta2Usuario.valor
   const pontosCpu = carta1Cpu.valor + carta2Cpu.valor
   console.log("Esta foi a primeira carta do usuário:", carta1Usuario.texto)
   console.log("Esta foi a segunda carta do usuário:", carta2Usuario.texto)
   console.log("Pontuação do Usuário:", pontosJogador)
   console.log("Esta foi a primeira carta do Computador:", carta1Cpu.texto)
   console.log("Esta foi a segunda carta do Computador:", carta2Cpu.texto)
   console.log("Pontuação do Usuário:", pontosCpu)
   if (pontosJogador === pontosCpu) {
      console.log("Temos um empate!!!!", pontosJogador, "x", pontosCpu)
   } else {
      if (pontosJogador > pontosCpu) {
         console.log("O usuário ganhou!!!!", pontosJogador, "x", pontosCpu )
      } else {
         console.log("O computador ganhou!!!!", pontosCpu, "x", pontosJogador)
      }
   }
} else {
	console.log("Que pena ! O jogo acabou!")
} */