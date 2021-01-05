// LETRA A

const posts: Array<object> = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

type post = {
    autor: string,
    texto: string
}

// LETRA B - As entradas da função abaixo são o array de posts e uma variavel tipo string com o nome do autor informado pelo usuário. A função irá retornar um array com todos os post cujo a o conteúdo da chave autor correspondam ao autorInfomado.
function buscarPostsPorAutor(posts, autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }