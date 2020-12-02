import React from "react"
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionsStyled, CountVoteContainer, CardStyled } from "./styles";
import { goToPostDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';




const PostCard = (props) => {
    const history = useHistory()

    return (
        <Card>
         <CardStyled onClick={() => goToPostDetail(history, props.id)}>
            <CardContent>
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
                    <Button size="small">+</Button>
                    <Typography variant="body2" component="p">
                        {props.votesCount}
                    </Typography>
                    <Button size="small">-</Button>
                </CountVoteContainer>
                <Typography variant="h6" component="h6">
                    {props.commentsCount} Comentários
                </Typography>
            </CardActionsStyled>
         </CardStyled>
        </Card>
    )}

export default PostCard






