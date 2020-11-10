import React from 'react';
import styled from 'styled-components';
import axios from "axios";

const DeleteButton = styled.button`
  color: red;
  background-color: white;
  margin-left: 10px;
  font-size: 12px;
  border-radius: 20%;
  :hover {
    background-color: red;
    color: white;
    font-size: 14px;
  };
`;

const InfoUsuario = styled.p`
  color: darkblue;

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

  infoUser = (userId) => {
    const renderedusuarios = this.state.usuarios.filter((usuario) => {
      return <InfoUsuario key={userId}>Nome: {usuario.name} Email: {usuario.email}<DeleteButton onClick={() => this.deleteUser(usuario.id)}>
      X
    </DeleteButton></InfoUsuario>
    })
    console.log(renderedusuarios)
  }

  render() {
    const renderedusuarios = this.state.usuarios.map((usuario) => {
      return <InfoUsuario key={usuario.id} onClick={() => this.infoUser(usuario.id)}>{usuario.name}<DeleteButton onClick={() => this.deleteUser(usuario.id)}>
      X
    </DeleteButton></InfoUsuario>;
    });

    return (
      <div className="App">
       {renderedusuarios}
      </div>
    );
  }
}

export default ExibeListaUsuario;