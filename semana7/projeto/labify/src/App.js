import axios from "axios";
import React from "react";
import styled from "styled-components";

const DeleteButton = styled.button`
  color: red;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 15% 15% 70%;
`;

const ListaMusicas = styled.p`
  grid-column-start: 2; 
  grid-column-end: 3; 
  grid-row-start: 3; 
  grid-row-end: 4;
`;

const CriarPlaylistContainer = styled.div`
  grid-column-start: 1; 
  grid-column-end: 2; 
  grid-row-start: 2; 
  grid-row-end: 3; 
`;

const ListContainer = styled.div`
  grid-column-start: 1; 
  grid-column-end: 2; 
  grid-row-start: 3; 
  grid-row-end: 4; 
`;

const DetalhesPlaylist = styled.div`
  grid-column-start: 2; 
  grid-column-end: 3; 
  grid-row-start: 3; 
  grid-row-end: 4; 
`;

const axiosConfig = {
  headers: {
    Authorization: "daltro-machado-dumont"
  }
};

let nomePlaylist = "";
let addMusic = "";

class App extends React.Component {
  state = {
    playlists: [],
    playlistValue: "",
    selectedPlaylist: []
  };

  componentDidMount = () => {
    this.pegarPlaylists();
  };

  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.playlistValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body, axiosConfig)
      .then((res) => {
        this.setState({ playlistValue: "" });
        this.pegarPlaylists();
      })
      .catch((error) => {
        alert("Digite um nome de playlist válido ou inexistente!")
        console.log(error.message);
      });
  };

  onChangePlaylistValue = (event) => {
    this.setState({ playlistValue: event.target.value });
  };

  deletePlaylist = (playlistId) => {
    if (window.confirm("Tem certeza que quer deletar esta playlist ?")) {
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, axiosConfig)
      .then((response) => {
        alert("Playlist deletada com sucesso!");
        this.pegarPlaylists();
      })
      .catch((error) => {
        alert("Erro ao deletar a Playlist!");
        console.log(error.message);
      });    
    }      
  
  };

  detalhePlaylist = (playlistId, playlistName) => {
    nomePlaylist = playlistName
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, axiosConfig)
      .then((response) => {
        this.setState({ selectedPlaylist: response.data.result.tracks });
        console.log(response.data.result)
      })
      .catch((error) => {
        alert("Erro ao selecionar Playlist!");
        console.log(error.message);
      });
      
      };

  render() {
    console.log(this.state.selectedPlaylist)
    const renderedPlaylists = this.state.playlists.map((playlist) => {
      return <p key={playlist.id} onClick={() => this.detalhePlaylist(playlist.id, playlist.name)}>{playlist.name}<DeleteButton onClick={() => this.deletePlaylist(playlist.id)}>
      x</DeleteButton></p>
    });

    
    const detailPlaylists = this.state.selectedPlaylist.map((playlist) => {
    return <ListaMusicas key={playlist.id}>{playlist.name}<br />{playlist.artist}<br /><audio src= {playlist.url} controls></audio></ListaMusicas>
    });
    console.log(detailPlaylists)
    return (
      <MainContainer>
        <CriarPlaylistContainer>
          <input
            placeholder="Nome da Playlist"
            value={this.state.playlistValue}
            onChange={this.onChangePlaylistValue}
          />
          <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </CriarPlaylistContainer>
        <ListContainer>
          {renderedPlaylists}  
        </ListContainer>
        <DetalhesPlaylist>
          <h3>{nomePlaylist}</h3>
          {detailPlaylists}
        </DetalhesPlaylist>
      </MainContainer>
    );
  }
}

export default App;
