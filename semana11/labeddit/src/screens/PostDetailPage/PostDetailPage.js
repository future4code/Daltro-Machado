import React from 'react';
import { useParams } from 'react-router-dom';
import {useForm} from "../../hooks/useForm"
import logo from '../../assets/logo_labeddit.png'
import { votePost } from '../../services/votePost';
import { voteComment } from '../../services/voteComment';
import { createComment } from '../../services/comment';
import { useProtectPage } from '../../hooks/useProtectPage';
import {useRequestData} from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/apiConstants"
import { Typography } from '@material-ui/core';
import {VoteIcon, TextFieldStyled, ButtonStyled, FormContainer, Logomarca, LogoContainer, PostDetailPageContainer, CardActionsStyled, CountVoteContainer, CardStyled} from "./styles"
import CardContent from '@material-ui/core/CardContent';
import CommentCard from '../../components/CommentCard/CommentCard';
import positivo from '../../assets/positivo.png'
import negativo from '../../assets/negativo.png'
import { useHistory } from "react-router-dom";


const PostDetailPage = () => {
    const history = useHistory()
    useProtectPage()
    const params = useParams()
    const {data, getData} = useRequestData(`${BASE_URL}/posts/${params.id}`, [])
    const postDetails = data.post
    const postComments = postDetails && postDetails.comments
    console.log("Post Comments:", postComments) 
    const bodyUp = {direction: 1}
    const bodyDown = {direction: -1}
        
    

    const {form, onChange} = useForm({text: ""})
   
    const handleInputChange = (event) => {
        const {value, name} = event.target
        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createComment(postDetails.id, form, history)
        console.log("teste, testandoooo")
    }
 

    return (
        <PostDetailPageContainer>
        {postDetails &&
            <>
                <LogoContainer>
                    <Logomarca src={logo} />
                </LogoContainer>
                <CardStyled>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {postDetails.username}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {postDetails.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {postDetails.text}
                            </Typography>
                        </CardContent>
                        <CardActionsStyled>
                            <CountVoteContainer>
                                <VoteIcon src={positivo} onClick={() => votePost(postDetails.id, bodyUp, history)}></VoteIcon>
                                <Typography variant="body2" component="p">
                                    {postDetails.votesCount}
                                </Typography>
                                <VoteIcon src={negativo} onClick={() => votePost(postDetails.id, bodyDown, history)}></VoteIcon>
                            </CountVoteContainer>
                            <Typography variant="h6" component="h6">
                                {postDetails.commentsCount} Comentários
                            </Typography>
                        </CardActionsStyled>
                </CardStyled>
                <FormContainer onSubmit={handleSubmission} >
                    <TextFieldStyled 
                        label="Faça seu comentário!"
                        variant="outlined"
                        required
                        name="text"
                        value={form.text}
                        onChange={handleInputChange}
                    />
                    <ButtonStyled
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Postar
                    </ButtonStyled>
                </FormContainer>
                
                <CardStyled>
                   {postComments &&
                        postComments.map(comment => {
                        return <CommentCard 
                            key={comment.id}
                            id={comment.id}
                            text={comment.text}
                            username={comment.username}
                            userId={postDetails.id}
                            votesCount={comment.votesCount}
                            getData={getData}
                            />
                        })
                   }
                </CardStyled>
            </>
        }</PostDetailPageContainer>
        )
}

export default PostDetailPage;