import { useState } from "react"
import axios from "axios"
import {BASE_URL} from "../../constants/apiConstants"
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionsStyled, CountVoteContainer, CardStyled, VoteIcon } from "./styles";
import { goToPostDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import positivo from '../../assets/positivo.png'
import negativo from '../../assets/negativo.png'
import positivo_BW from '../../assets/positivo_pb.png'
import negativo_BW from '../../assets/negativo_pb.png'




const PostCard = (props) => {
    const history = useHistory()
    const [buttonUp, setButtonUp] = useState(false)
    const [buttonDown, setButtonDown] = useState(false)
    const [buttonUpIcon, setButtonUpIcon] = useState(positivo_BW)
    const [buttonDownIcon, setButtonDownIcon] = useState(negativo_BW)

    const voteUpPost = (postId, button, getData) => {
        const token = localStorage.getItem("token")
        let body = {direction: 0}
        
        if (button) {
            setButtonUp(!buttonUp)
            body = {direction: 0}
            setButtonUpIcon(positivo_BW)

        } else {
            if (buttonDown) {
                setButtonUp(!buttonUp)
                body = {direction: 1}
                setButtonUpIcon(positivo)
                setButtonDownIcon(negativo_BW)
                setButtonDown(false)
            } else {
                setButtonUp(!buttonUp)
                body = {direction: 1}
                setButtonUpIcon(positivo)
            }
        }

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

    const voteDownPost = (postId, button, getData) => {
        const token = localStorage.getItem("token")
        let body = {direction: 0}
        
        if (button) {
            setButtonDown(!buttonDown)
            body = {direction: 0}
            setButtonDownIcon(negativo_BW)

        } else {
            if (buttonUp) {
                setButtonDown(!buttonDown)
                body = {direction: -1}
                setButtonDownIcon(negativo)
                setButtonUpIcon(positivo_BW)
                setButtonUp(false)
            } else {
                setButtonDown(!buttonDown)
                body = {direction: -1}
                setButtonDownIcon(negativo) 
            }
        }

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



    return (
         <CardStyled>
            <CardContent onClick={() => goToPostDetail(history, props.id)}>
                <Typography color="textSecondary" gutterBottom>
                    {props.username}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.text}
                </Typography>
            </CardContent>
            <CardActionsStyled>
                <CountVoteContainer>
                    <VoteIcon src={buttonUpIcon} onClick={() => voteUpPost(props.id, buttonUp, props.getData)}></VoteIcon>
                    <Typography variant="body2" component="p">
                        {props.votesCount}
                    </Typography>
                    <VoteIcon src={buttonDownIcon} onClick={() => voteDownPost(props.id, buttonDown, props.getData)}></VoteIcon>
                </CountVoteContainer>
                <Typography variant="h6" component="h6">
                    {props.commentsCount} Comentários
                </Typography>
            </CardActionsStyled>
         </CardStyled>
    )}

export default PostCard






