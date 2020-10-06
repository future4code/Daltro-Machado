let cliques = 0

function atualizaCliques() {
    cliques++
    const minhaDiv = document.getElementById("minha-div")
    minhaDiv.innerHTML = `<p>Quantidade de cliques: ${cliques}</p>`
}