import React from "react";
import styled from 'styled-components';
import axios from "axios";
import CadastraUsuario from "./Componentes/CadastraUsuario";
import ExibeListaUsuario from "./Componentes/ExibeListaUsuario";

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
      <div className="App">
        <button onClick={this.trocarTela}>{this.state.botao}</button>
        <div>
        {renderizaTelaCorreta()}
        </div>
      </div>
  )
}}