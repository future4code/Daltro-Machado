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
        getData()
    }).catch(error => {
        alert("Erro ao votar no Post!")
        
    })
}