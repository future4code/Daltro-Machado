import React from "react";
import styled from 'styled-components';
import axios from "axios";
import CadastraUsuario from "./Componentes/CadastraUsuario";
import ExibeListaUsuario from "./Componentes/ExibeListaUsuario";


const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lightyellow;
  margin: 0px;
  padding: 5px;
  display: grid;
  grid-template-rows: 1fr 90%;
  justify-items: center;
  `;

const FormContainer = styled.div`
 
  background-color: lightyellow;
  margin: 20px;
  padding: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
   
  `;


const BotaoInterruptor = styled.button`
  padding: 1px;
  margin: 2px;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  background-color: lightblue;
  :hover{
    background-color: darkblue;
    color: white;
  };
`;



export default class App extends React.Component {
  state = {
    telacadastro: true,
    botao: "Exibir Lista de Usuários",
  };

  trocarTela = () => {
    if (this.state.telacadastro) {
      this.setState({telacadastro: false})
      this.setState({botao: "Ir para Cadastro de Usuários"})
    } else {
      this.setState({ telacadastro: true });
      this.setState({botao: "Exibir Lista de Usuários"}); 
    }
  };


  render() {
    const renderizaTelaCorreta = () => {
      if (this.state.telacadastro) {
        return <CadastraUsuario/>;
      } else {
        return <ExibeListaUsuario/>
      }}
      return (
      <MainContainer>
        <BotaoInterruptor onClick={this.trocarTela}>{this.state.botao}</BotaoInterruptor>
        <FormContainer>
        {renderizaTelaCorreta()}
        </FormContainer>
      </MainContainer>
  )
}}