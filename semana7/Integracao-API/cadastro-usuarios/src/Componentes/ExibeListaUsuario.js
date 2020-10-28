import React from 'react';
import styled from 'styled-components';
import axios from "axios";

const DeleteButton = styled.span`
  color: red;
  margin-left: 10px;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "daltro-machado-dumont"
  }
};


class ExibeListaUsuario extends React.Component {
    state = {
        usuarios: [],
      };

componentDidMount = () => {
    this.ExibirUsuarios();
};

ExibirUsuarios = () => {
    axios
    .get(`${baseUrl}`, axiosConfig)
      .then((resposta) => {
        this.setState({ usuarios: resposta.data });
        console.log(resposta) 
      })
      .catch((err) => {
        alert("Desculpe, não foi possível exibir a lista de usuários!");
      });
  };

  deleteUser = (userId) => {
    if (window.confirm("Tem certeza que deseja deletar este usuário?")) {
      axios
      .delete(`${baseUrl}/${userId}`, axiosConfig)
      .then((response) => {
        alert("Usuário deletado com sucesso!");
        this.ExibirUsuarios();
      })
      .catch((error) => {
        alert("Erro ao deletar Usuário. Verifique com o adminsitrador do Banco de Dados!");
      });
    }
  };

  render() {
    const renderedusuarios = this.state.usuarios.map((usuario) => {
      return <p key={usuario.id}>{usuario.name}<DeleteButton onClick={() => this.deleteUser(usuario.id)}>
      X
    </DeleteButton></p>;
    });

    return (
      <div className="App">
       {renderedusuarios}
      </div>
    );
  }
}

export default ExibeListaUsuario;