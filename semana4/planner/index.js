
function limparTarefas() {
    const limparClasse = document.getElementsByClassName("tarefas")
    limparClasse.innerHTML = ""
}
let contador = 1
function adicionarTarefa() {
    const tarefa = document.getElementById("tarefa")
    const diasSemana = document.getElementById("dias-semana")

    if (tarefa.value !== "") {
        switch (diasSemana.value) {
            case "domingo":
                const domingoUl = document.getElementById("domingo")
                domingoUl.innerHTML += `<li class="tarefas" id="domingo${contador}" onclick="document.getElementById('domingo${contador}').style.textDecoration = 'line-through'">${tarefa.value}</li>`
                tarefa.value = ""
                contador += 1
                break;
            
            case "segunda":
                const segundaUl = document.getElementById("segunda")
                segundaUl.innerHTML += `<li class="tarefas" id="segunda${contador}" onclick="document.getElementById('segunda${contador}').style.textDecoration = 'line-through'">${tarefa.value}</li>`
                tarefa.value = ""
                contador += 1
                break;

            case "terca":
                const tercaUl = document.getElementById("terca")
                tercaUl.innerHTML += `<li class="tarefas" id="terca${contador}" onclick="document.getElementById('terca${contador}').style.textDecoration = 'line-through'">${tarefa.value}</li>`
                tarefa.value = ""
                contador += 1
                break;
    
            case "quarta":
                const quartaUl = document.getElementById("quarta")
                quartaUl.innerHTML += `<li class="tarefas" id="quarta${contador}" onclick="document.getElementById('quarta${contador}').style.textDecoration = 'line-through'">${tarefa.value}</li>`
                tarefa.value = ""
                contador += 1
                break;

            case "quinta":
                const quintaUl = document.getElementById("quinta")
                quintaUl.innerHTML += `<li class="tarefas" id="quinta${contador}" onclick="document.getElementById('quinta${contador}').style.textDecoration = 'line-through'">${tarefa.value}</li>`
                tarefa.value = ""
                contador += 1
                break;
    
            case "sexta":
                const sextaUl = document.getElementById("sexta")
                sextaUl.innerHTML += `<li class="tarefas" id="sexta${contador}" onclick="document.getElementById('sexta${contador}').style.textDecoration = 'line-through'">${tarefa.value}</li>`
                tarefa.value = ""
                contador += 1
                break;
    
            case "sabado":
                const sabadoUl = document.getElementById("sabado")
                sabadoUl.innerHTML += `<li class="tarefas" id="sabado${contador}" onclick="document.getElementById('sabado${contador}').style.textDecoration = 'line-through'">${tarefa.value}</li>`
                tarefa.value = ""
                contador += 1
                break;

            default:
                break;
        } 
    } else {
        alert("Você precisa digitar uma tarefa!")
    }

}


