import {useState} from 'react'
import GlobalStateContext from "./globalContext/GlobalStateContext";
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'

import { ThemeProvider } from '@material-ui/core/styles'

import theme from './constants/theme';
import MainAppBar from './components/MainAppBar/MainAppBar'

const Container = styled.div`
  padding-top: 64px;
`

const App = () => {
  const [labelLog, setLabelLog] = useState("Olá Visitante! Faça o seu Login")
  const data = {labelLog, setLabelLog};

  return (
    <GlobalStateContext.Provider value={data}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainAppBar />
          <Container>
            <Router />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalStateContext.Provider>
  );
}

export default App;
