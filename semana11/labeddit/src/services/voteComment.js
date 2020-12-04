import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToPostFeed } from "../routes/coordinator"

export const voteComment = (postId, body, commentId, getData) => {
    const token = localStorage.getItem("token")
    console.log("PostID:", postId)
    console.log("Body:", body)
    console.log("CommentID:", commentId)
    console.log("GetData:", getData)  

     axios.put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, { 
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