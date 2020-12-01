import React from 'react';
import { useProtectPage } from '../../hooks/useProtectPage';

const PostDetailPage = () => {
    useProtectPage()

    return <div>Post Detail Page</div>
}

export default PostDetailPage;