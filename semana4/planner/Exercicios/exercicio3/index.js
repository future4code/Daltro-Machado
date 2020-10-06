function adicionaProduto() {
    const meuInput = document.getElementById("meu-input")
    
    if (meuInput.value !== "") {
        const minhaLista = document.getElementById("minha-lista")

        minhaLista.innerHTML += `<li>${meuInput.value}</li>`
        meuInput.value = ""
    }
}