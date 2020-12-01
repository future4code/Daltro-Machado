import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import PostFeedPage from '../screens/RecipesFeedPage/RecipesFeedPage'
import PostDetailPage from '../screens/RecipeDetailPage/RecipeDetailPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'

const Router = () => {
    return (
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage/>
                </Route>
                <Route exact path={'/cadastro'}>
                    <SignUpPage/>
                </Route>
                <Route exact path={['/feed', '/']}>
                    <PostFeedPage/>
                </Route>
                <Route exact path={'/detail/:id'}>
                    <PostDetailPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>    
            </Switch>
    )
}

export default Router;