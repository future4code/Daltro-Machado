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
    ]
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
       {listaDePost}
      </div>
    );
  }
}

export default App;