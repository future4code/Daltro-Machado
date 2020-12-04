import {useContext} from 'react'
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import {ButtonsContainer} from "./styles"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom'
import { goToPostFeed } from '../../routes/coordinator'

const MainAppBar = () => {
    const history = useHistory()
    const {labelLog, setLabelLog } = useContext(GlobalStateContext);

    const goToLogin = (history) => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setLabelLog("Olá Visitante! Faça o seu Login")
      history.push('/login')
}

    return (
        <AppBar className={'appbar'}>
          <Toolbar>
            <ButtonsContainer>
              <Button color="inherit" onClick={() => goToPostFeed(history)}>Posts Recentes</Button>
              <Button color="inherit" onClick={() => goToLogin(history)}>{labelLog}</Button>
            </ButtonsContainer>
          </Toolbar>
        </AppBar>
    )
}

export default MainAppBar