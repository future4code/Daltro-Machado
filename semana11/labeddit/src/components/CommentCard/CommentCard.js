import { useState } from "react"
import axios from "axios"
import {BASE_URL} from "../../constants/apiConstants"
//import { voteComment } from '../../services/voteComment';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionsStyled, CountVoteContainer, CardStyled, VoteIcon } from "./styles";
import { useHistory } from "react-router-dom";
import positivo from '../../assets/positivo.png'
import negativo from '../../assets/negativo.png'
import positivo_BW from '../../assets/positivo_pb.png'
import negativo_BW from '../../assets/negativo_pb.png'

const CommentCard = (props) => {
    const history = useHistory()
    const [buttonUp, setButtonUp] = useState(false)
    const [buttonDown, setButtonDown] = useState(false)
    const [buttonUpIcon, setButtonUpIcon] = useState(positivo_BW)
    const [buttonDownIcon, setButtonDownIcon] = useState(negativo_BW)

    const voteUpComment = (postId, button, commentId, getData) => {
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

        axios.put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, { 
            headers: {
                Authorization: token
            }
        }).then((response) => {
            getData()
        }).catch(error => {
            alert("Erro ao votar no comentário!")
            
        })
    }

    const voteDownComment = (postId, button, commentId, getData) => {
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

        axios.put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, { 
            headers: {
                Authorization: token
            }
        }).then((response) => {
            getData()
        }).catch(error => {
            alert("Erro ao votar no comentário!")
            
        })
    }

    return (
            <CardStyled>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {props.username}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.text}
                    </Typography>
                </CardContent>
                <CardActionsStyled>
                    <CountVoteContainer>
                        <VoteIcon src={buttonUpIcon} onClick={() => voteUpComment(props.userId, buttonUp, props.id, props.getData)}></VoteIcon>
                        <Typography variant="body2" component="p">
                            {props.votesCount}
                        </Typography>
                        <VoteIcon src={buttonDownIcon} onClick={() => voteDownComment(props.userId, buttonDown, props.id, props.getData)}></VoteIcon>
                    </CountVoteContainer>
                </CardActionsStyled>
            </CardStyled>
        
    )}

export default CommentCard