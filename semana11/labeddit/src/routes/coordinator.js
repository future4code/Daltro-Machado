export const goToLogin = (history) => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        history.push('/login')
}
  
export const goToSignUp = (history) => {
    history.push('/cadastro')
}
  
export const goToPostFeed = (history) => {
    const token = window.localStorage.getItem("token")
    if (!token) {
        alert("Por favor faça o seu login!")
    } else {
        history.push('/feed')
    }
}
  
export const goToPostDetail = (history, id) => {
    history.push(`/detail/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}

