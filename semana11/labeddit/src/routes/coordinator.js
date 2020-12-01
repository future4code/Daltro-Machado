export const goToLogin = (history) => {
    history.push('/login')
}
  
export const goToSignUp = (history) => {
    history.push('/cadastro')
}
  
export const goToPostFeed = (history) => {
    history.push('/feed')
}
  
export const goToRecipeDetail = (history, id) => {
    history.push(`/detail/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}