import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToPostFeed } from "../routes/coordinator"

export const login = (body, history) => {
    
    axios.post(`${BASE_URL}/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("username", response.data.user.username)
        goToPostFeed(history)
    }).catch(error => {
        alert("Email ou senha inválidos!")
        console.log(error.message)
    })
}

export const signup = (body, history) => {
    
    axios.post(`${BASE_URL}/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("username", response.data.user.username)
        goToPostFeed(history)
    }).catch(error => {
        console.log(error.message)
    })
}