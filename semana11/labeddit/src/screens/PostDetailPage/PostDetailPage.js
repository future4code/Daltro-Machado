import React from 'react';
import { useParams } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage';
import {useRequestData} from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/apiConstants"
import { Typography } from '@material-ui/core';
import {PostDetailPageContainer} from "./styles"

const PostDetailPage = () => {
    useProtectPage()
    const params = useParams()
    const post = useRequestData(`${BASE_URL}/posts/${params.id}`, []) 
    //const post = data[0]

    return (
        // verificar API e layout
        <>
            {post && <PostDetailPageContainer>
                <Typography variant="h5" color="primary" align="center">
                    {post.title} 
                </Typography>
                <Typography align="center">
                    {post.textn}
                </Typography>
            </PostDetailPageContainer>}
        </>
    )
}

export default PostDetailPage;