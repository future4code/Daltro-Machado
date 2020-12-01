import React from 'react'

import {ButtonsContainer} from "./styles"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom'
import { goToPostFeed, goToLogin } from '../../routes/coordinator'

const MainAppBar = () => {
    const history = useHistory()
    /* const token = window.localStorage.getItem("token")
    const username = window.localStorage.getItem("username")
    let goToFunction = ""
    let labelButton = ""
    if (token) {
      goToFunction = ""
      labelButton = ""
    } else {
      
    } */
    return (
        <AppBar className={'appbar'}>
          <Toolbar>
            <ButtonsContainer>
              <Button color="inherit" onClick={() => goToPostFeed(history)}>Posts Recentes</Button>
              <Button color="inherit" onClick={() => goToLogin(history)}>Logout</Button>
            </ButtonsContainer>
          </Toolbar>
        </AppBar>
    )
}

export default MainAppBar