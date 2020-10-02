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
 

console.log("Bem vindo ao Blackjak Labenu!")

if(confirm("Você deseja iniciar uma rodada ?")) {
  let cartaUsuario = [comprarCarta(), comprarCarta()]
  let cartaCpu = [comprarCarta(), comprarCarta()]
  let pontosJogador = cartaUsuario[0].valor + cartaUsuario[1].valor
  let pontosCpu = cartaCpu[0].valor + cartaCpu[1].valor
  let textoUsuario = []
  let confirme = true
  let textoCpu = []
  for (const carta of cartaUsuario) {
   textoUsuario.push(carta.texto)
  } 
  while ((pontosJogador === 22) || (pontosCpu === 22)) { // Teste para 2 Ases
      console.log("Um dos jogadores recebeu dois Ases! Iremos sortear novamente!")
      console.log("------------------x------------------")
      cartaUsuario = [comprarCarta(), comprarCarta()]
      cartaCpu = [comprarCarta(), comprarCarta()]
      pontosJogador = cartaUsuario[0].valor + cartaUsuario[1].valor
      pontosCpu = cartaCpu[0].valor + cartaCpu[1].valor  
  }
  while ((pontosJogador <=21) && confirme) { // Teste se não estorou 21
      if (confirm("Suas cartas são " + textoUsuario + ". A carta revelada do computador é " + cartaCpu[0].texto + " Deseja comprar mais uma carta?")) {
         let novaCartaUsuario = comprarCarta()
         textoUsuario.push(novaCartaUsuario.texto)
         pontosJogador += novaCartaUsuario.valor
      } else {
         confirme = false
      }
  }
  for (let carta of cartaCpu) {
  textoCpu.push(carta.texto)
  }
  console.log("Suas cartas são", textoUsuario + ". Sua pontuação é", pontosJogador)
  console.log("As cartas do computador são", textoCpu + ". A pontuação do computador é", pontosCpu)
  console.log("------------------x------------------")
  
  if (pontosJogador <=21) { // Testa se jogador não estourou
   if (pontosJogador === pontosCpu) { // Teste de empate
      console.log("Temos um empate!!!!", pontosJogador, "x", pontosCpu)
   } else { // else do IF empate
      if (pontosJogador > pontosCpu) {
         console.log("O usuário ganhou!!!!", pontosJogador, "x", pontosCpu )
      } else { // Else do IF pontos jogador maior
         console.log("O computador ganhou!!!!", pontosCpu, "x", pontosJogador)
      }
   }
  } else { // Else do do estouro do jogador
      console.log("O computador ganhou! Você ultrapasou 21 pontos!")
            }
      }
       else { // Else do IF Deseja começar uma rodada
    console.log("Que pena ! O jogo acabou!")
}



















  /* if ((pontosJogador <=21) && (pontosCpu <=21)) { // Testa se ambos estão abaixo de 21
   if (pontosJogador === pontosCpu) { // Teste de empate
      console.log("Temos um empate!!!!", pontosJogador, "x", pontosCpu)
   } else { // else do IF empate
      if (pontosJogador > pontosCpu) {
         console.log("O usuário ganhou!!!!", pontosJogador, "x", pontosCpu )
      } else { // Else do IF pontos jogador maior
         console.log("O computador ganhou!!!!", pontosCpu, "x", pontosJogador)
      }
   }
  } else { // Else do Teste abaixo de 21
      if ((pontosJogador >=21) && (pontosCpu >=21)){ // Testa se ambos estouraram
         if (pontosJogador === pontosCpu) { // Teste de empate
            console.log("Temos um empate!!!!", pontosJogador, "x", pontosCpu)
         } else { // else do IF empate
            if (pontosJogador < pontosCpu) {
               console.log("O usuário ganhou!!!!", pontosJogador, "x", pontosCpu )
            } else { // Else do IF pontos jogador maior
               console.log("O computador ganhou!!!!", pontosCpu, "x", pontosJogador)
            }
         }
      } else { // Else do Ambos estouraram
         if (pontosJogador < 21) {
            console.log("O usuário ganhou!!!!", pontosJogador, "x", pontosCpu )
         } else { // Else do IF pontos jogador maior
            console.log("O computador ganhou!!!!", pontosCpu, "x", pontosJogador)
         }
      }
   }
  
} else { // Else do IF Deseja começar uma rodada
    console.log("Que pena ! O jogo acabou!")
}
 */