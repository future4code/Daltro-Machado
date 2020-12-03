import React from "react"
import { votePost } from '../../services/votePost';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionsStyled, CountVoteContainer, CardStyled, VoteIcon } from "./styles";
import { goToPostDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import positivo from '../../assets/positivo.png'
import negativo from '../../assets/negativo.png'




const PostCard = (props) => {
    const history = useHistory()
    const bodyUp = {direction: 1}
    const bodyDown = {direction: -1}

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
                    <VoteIcon src={positivo} onClick={() => votePost(props.id, bodyUp, props.getData)}></VoteIcon>
                    <Typography variant="body2" component="p">
                        {props.votesCount}
                    </Typography>
                    <VoteIcon src={negativo} onClick={() => votePost(props.id, bodyDown, props.getData)}></VoteIcon>
                </CountVoteContainer>
                <Typography variant="h6" component="h6">
                    {props.commentsCount} Comentários
                </Typography>
            </CardActionsStyled>
         </CardStyled>
    )}

export default PostCard






