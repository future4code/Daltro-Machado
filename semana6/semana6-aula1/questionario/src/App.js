import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import './components/Etapa1';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';

class App extends React.Component {

state = {
  valorEtapa: 1,
};


onClickBotao = () => {
  if (Etapa1.escolaridade === "superior completo") {
    const etapa = 2
    this.setState({valorEtapa: etapa})
  } else {
    const etapa = 3
    this.setState({valorEtapa: etapa})
  }
}

render() {

  let imprimeEtapa = () => {
    switch (this.state.valorEtapa) {
      case 1:
        return <Etapa1 />
        break;
      case 2:
        return <Etapa2 />
        break;
      case 3:
        return <Etapa3 />
        break;          
      default:
        return <div></div>
        break;
    }
  };
  
  return (
  <div className="App">
    <div>{imprimeEtapa()}</div>
    <button onClick={this.onClickBotao}>Próxima Etapa</button>
  </div>
  );
}
}
export default App;
