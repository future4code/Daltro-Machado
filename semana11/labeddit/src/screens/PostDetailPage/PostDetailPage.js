import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useForm} from "../../hooks/useForm"
import logo from '../../assets/logo_labeddit.png'
import { votePost } from '../../services/votePost';
import { createComment } from '../../services/comment';
import { useProtectPage } from '../../hooks/useProtectPage';
import {useRequestData} from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/apiConstants"
import axios from "axios"
import { Typography } from '@material-ui/core';
import {VoteIcon, TextFieldStyled, ButtonStyled, FormContainer, Logomarca, LogoContainer, PostDetailPageContainer, CardActionsStyled, CountVoteContainer, CardStyled} from "./styles"
import CardContent from '@material-ui/core/CardContent';
import CommentCard from '../../components/CommentCard/CommentCard';
import positivo from '../../assets/positivo.png'
import negativo from '../../assets/negativo.png'
import positivo_BW from '../../assets/positivo_pb.png'
import negativo_BW from '../../assets/negativo_pb.png'
import { useHistory } from "react-router-dom";


const PostDetailPage = () => {
    const history = useHistory()
    useProtectPage()
    const params = useParams()
    const {data, getData} = useRequestData(`${BASE_URL}/posts/${params.id}`, [])
    const postDetails = data.post
    const postComments = postDetails && postDetails.comments
    const orderPostsComments = postComments && postComments.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)
    //const voteDirection = orderPostsComments && orderPostsComments.userVoteDirection
    const [buttonUp, setButtonUp] = useState(false)
    const [buttonDown, setButtonDown] = useState(false)
    const [buttonUpIcon, setButtonUpIcon] = useState(positivo_BW)
    const [buttonDownIcon, setButtonDownIcon] = useState(negativo_BW)
    

/*     useEffect(() => {
        if (voteDirection === 1) {
            setButtonUp(true)
        } else {
            if (voteDirection === -1) {
              setButtonDown(true)
            }
        }
    }, [voteDirection, setButtonUp, setButtonDown]) */


    const {form, onChange, resetForm} = useForm({text: ""})
   
    const handleInputChange = (event) => {
        const {value, name} = event.target
        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createComment(postDetails.id, form, getData, history)
        resetForm()
        getData()

    }
 
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
            getData()
        }).catch(error => {
            alert("Erro ao votar no Post!")
            
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
            getData()
        }).catch(error => {
            alert("Erro ao votar no Post!")
            

        })
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
                                <VoteIcon src={buttonUpIcon} onClick={() => voteUpPost(params.id, buttonUp, getData)}></VoteIcon>
                                <Typography variant="body2" component="p">
                                    {postDetails.votesCount}
                                </Typography>
                                <VoteIcon src={buttonDownIcon} onClick={() => voteDownPost(params.id, buttonDown, getData)}></VoteIcon>
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
                        orderPostsComments.map(comment => {
                        return <CommentCard 
                            key={comment.id}
                            id={comment.id}
                            text={comment.text}
                            username={comment.username}
                            userId={params.id}
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