import React from 'react';
import { useProtectPage } from '../../hooks/useProtectPage';

const PostFeedPage = () => {
    useProtectPage()
    

    return <div>Post Feed Page</div>
}

export default PostFeedPage;