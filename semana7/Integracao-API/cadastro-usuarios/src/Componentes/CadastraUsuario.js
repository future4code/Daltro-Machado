import React from 'react';
import styled from 'styled-components';
import axios from "axios";

const BotaoPadrao = styled.button`
  padding: 1px;
  margin: 2px;
  width: 100px;
  height: 25px;
  border-radius: 20px;
  background-color: lightblue;
  :hover{
    background-color: darkblue;
    color: white;
  };
`;

class CadastraUsuario extends React.Component {
    state = {
      usuarios: [],
    };
  
    CriarUsuario = () => {
      const body = {
        name: this.state.usuarioValue,
        email: this.state.emailValue,
      };
  
      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body,
          {
            headers: {
              Authorization: "daltro-machado-dumont"
            }
          }
        )
        .then((res) => {
          this.setState({ usuarioValue: "" });
          this.setState({ emailValue: "" });
          alert("Usuário criado com sucesso");
        })
        .catch((error) => {
          alert("Erro ao criar Usuário. Verifique com o adminsitrador do Banco de Dados!");
        });
    };
  
    onChangeUsuarioValue = (event) => {
      this.setState({ usuarioValue: event.target.value });
    };
  
    onChangeEmailValue = (event) => {
      this.setState({ emailValue: event.target.value });
    };
  
    render() {
  
      return (
        <div className="App">
          <div>
            <input
              placeholder="Nome do Usuário"
              value={this.state.usuarioValue}
              onChange={this.onChangeUsuarioValue}
            />
            <input
              placeholder="Email do Usuário"
              value={this.state.emailValue}
              onChange={this.onChangeEmailValue}
            />
            <BotaoPadrao onClick={this.CriarUsuario}>Criar Usuário</BotaoPadrao>
          </div>
        </div>
      );
    }
  }
  
  export default CadastraUsuario;