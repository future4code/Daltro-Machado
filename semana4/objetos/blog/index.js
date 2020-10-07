let arrayObjetos = []
function apertarBotao() {
    const guardaTitulo = document.getElementById("titulo-post")
    const guardaAutor = document.getElementById("autor-post")
    const guardaConteudo = document.getElementById("conteudo-post")
    const guardaImagem = document.getElementById("imagem-post")
    if ((guardaTitulo.value !== "") && (guardaAutor.value !== "") && (guardaConteudo.value !== "")){
        const post = {
            titulo: guardaTitulo.value,
            autor: guardaAutor.value,
            conteudo: guardaConteudo.value,
            imagem: guardaImagem.value
        }
        arrayObjetos.push(post)
        guardaTitulo.value = ""
        guardaAutor.value = ""
        guardaConteudo.value = ""
        guardaImagem.value = ""
        console.log(arrayObjetos)
        let exibirPost = document.getElementById("container-de-posts")
        exibirPost.innerHTML += `<h1 class="posts">${post.titulo}</h1>`
        exibirPost.innerHTML += `<p class="posts">Autor: ${post.autor}</p><br>`
        exibirPost.innerHTML += `<p class="posts">${post.conteudo}</p><br>`
        exibirPost.innerHTML += `<img class="imagens" src=${post.imagem}>`

    } else {
        window.alert("Preencha todos os campos por favor!")
    }
}



