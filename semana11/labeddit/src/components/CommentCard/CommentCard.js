import React from "react"
import { voteComment } from '../../services/voteComment';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionsStyled, CountVoteContainer, CardStyled, VoteIcon } from "./styles";
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import positivo from '../../assets/positivo.png'
import negativo from '../../assets/negativo.png'

const PostCard = (props) => {
    const history = useHistory()
    const commentBodyUp = {userVoteDirection: 1}
    const commentBodyDown = {userVoteDirection: -1}

    return (
        <>
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
                        <VoteIcon src={positivo} onClick={() => voteComment(props.userId, commentBodyUp, props.id, history)}></VoteIcon>
                        <Typography variant="body2" component="p">
                            {props.votesCount}
                        </Typography>
                        <VoteIcon src={negativo} onClick={() => voteComment(props.userId, commentBodyDown, props.id, history)}></VoteIcon>
                    </CountVoteContainer>
                </CardActionsStyled>
            </CardStyled>
        </>
    )}

export default PostCard