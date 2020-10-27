import React from 'react';
import styled from 'styled-components';
import axios from "axios";

class ExibeListaUsuario extends React.Component {
    state = {
        usuarios: [],
      };

componentDidMount = () => {
    this.ExibirUsuarios();
    console.log("oi")
};

ExibirUsuarios = () => {
    axios
    .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "daltro-machado-dumont"
          }
        }
      )
      .then((resposta) => {
        this.setState({ usuarios: resposta.data });
        console.log(resposta) 
      })
      .catch((err) => {
        alert("Desculpe, não foi possível exibir a lista de usuários!");
      });
  };

  render() {
    const renderedusuarios = this.state.usuarios.map((usuario) => {
      return <p key={usuario.id}>{usuario.name}</p>;
    });

    return (
      <div className="App">
       {renderedusuarios}
      </div>
    );
  }
}

export default ExibeListaUsuario;