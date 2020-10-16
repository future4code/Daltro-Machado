import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "Vanessa",
        fotoUsuario: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150?random=1"
      },
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50?random=2",
        fotoPost: "https://picsum.photos/200/150?random=2"
      },
      {
        nomeUsuario: "Pedro",
        fotoUsuario: "https://picsum.photos/50/50?random=3",
        fotoPost: "https://picsum.photos/200/150?random=3"
      }
    ],
    valorInputUsuario: "",
    valorInputFoto: "",
    valorInputPost: ""
  };


  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    };
    const novoArrayPosts = [novoPost, ...this.state.posts];
    this.setState({ posts: novoArrayPosts }); // erro talvez aqui
    this.setState({ valorInputUsuario: "" });
    this.setState({ valorInputFoto: "" });
    this.setState({ valorInputPost: "" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };

  render() {
    const listaDePost = this.state.posts.map((post) => {
      return (
        <Post
        nomeUsuario= {post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        >
        </Post>
      );
    });
    return (
     <div className={'app-container'}>
      <div>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuario"}
          />
          <input
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Link da Foto Usuario"}
          />
          <input
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Link da Foto do Post"}
          />
          <button onClick={this.adicionaPost}>Postar</button>
        </div>
      <div>
       {listaDePost}
      </div>
    </div> 
    );
  }
}
export default App;