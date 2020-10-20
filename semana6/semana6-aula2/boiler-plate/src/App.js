import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: 'Texto da tarefa',
        completa: false // Indica se a tarefa está completa (true ou false)
      }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

   /*  const guardaTarefas = {
        idTarefa: this.state.id,
        textoTarefa: this.state.texto,
        status: this.state.completa
    } */
    localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas))

/*     this.setState({
      id: "",
      texto: "",
      completa: ""
  }) */
  };

  componentDidMount() {
    const guardaString = localStorage.getItem("tarefa")
    const transformaObjeto = JSON.parse(guardaString)
    this.setState({tarefas: transformaObjeto})
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const tarefaNova = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novasTarefas = [...this.state.tarefas, tarefaNova]
    this.setState({tarefas: novasTarefas})
  }

  selectTarefa = (id) => {
    const novasTarefas = this.state.tarefas.map((tarefa) =>{
      if (id === tarefa.id) {
        const tarefaNova = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return tarefaNova
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: novasTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
