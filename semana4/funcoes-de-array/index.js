let arrDespesas = []
let despesasFiltradas = []
console.log(despesasFiltradas)
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    
    // AQUI VEM A IMPLEMENTAÇÃO
    
    despesas.forEach((elemento, indice, array) => {
        divDespesas.innerHTML += `<p>Valor: R$ ${elemento.valor} | Tipo: ${elemento.tipo} | Descrição: ${elemento.descricao}</p>`
    })
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0

    // AQUI VEM A IMPLEMENTAÇÃO

    arrDespesas.forEach((elemento, indice, array) => {
        switch (elemento.tipo) {
            case "alimentação":
                gastoAlimentacao += Number(elemento.valor)
                break;
            case "viagem":
                gastoViagem += Number(elemento.valor)
                break;
            case "utilidades":
                gastoUtilidades += Number(elemento.valor)
                break;
            default:
                break;
        }
        gastoTotal += Number(elemento.valor)
    });

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)
      
    if ((valorMin > 0) && (valorMax > 0) && (valorMin <= valorMax)) {
        
        switch (tipoFiltro) {
            case "alimentação":
                despesasFiltradas = arrDespesas.filter((elemento, indice, array) => {
                if ((elemento.tipo === "alimentação") && (elemento.valor > valorMin) && (elemento.valor < valorMax)){
                   return true 
                }
                return false
                })
                break;
            case "viagem":
                despesasFiltradas = arrDespesas.filter((elemento, indice, array) => {
                    if ((elemento.tipo === "viagem") && (elemento.valor > valorMin) && (elemento.valor < valorMax)){
                   return true 
                }
                return false
                })
                break;
            case "utilidades":
                despesasFiltradas = arrDespesas.filter((elemento, indice, array) => {
                    if ((elemento.tipo === "utilidades") && (elemento.valor > valorMin) && (elemento.valor < valorMax)){
                   return true 
                }
                return false
                })
                break;
            case "todos":
                despesasFiltradas = arrDespesas.filter((elemento, indice, array) => {
                    if ((elemento.valor > valorMin) && (elemento.valor < valorMax)){
                   return true 
                }
                return false
                })
                break;
            default:
                window.alert("Escolha o tipo de desepsas a ser filtrada!")
                return false
                break;
        } // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    
        imprimirDespesas(despesasFiltradas)

    } else {
        window.alert("Por favor, digite valores mínimo e máximos válidos!")
    }
}
function ordenarDespesas(){
    if (despesasFiltradas.length === 0) {
        arrDespesas.sort(function (a, b) {
            return b.valor - a.valor;
        })
        imprimirDespesas(arrDespesas)
    } else {
        despesasFiltradas.sort(function (a, b) {
            return b.valor - a.valor;
        })
        imprimirDespesas(despesasFiltradas)
    }
   
}






// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}