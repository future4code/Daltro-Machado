import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToPostFeed } from "../routes/coordinator"

export const votePost = (postId, body, getData) => {
    const token = localStorage.getItem("token")
    axios.put(`${BASE_URL}/posts/${postId}/vote`, body, { 
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log(response)
        getData()
    }).catch(error => {
        alert("Erro ao votar no Post!")
        console.log(error.message)
        console.log(body)
    })
}