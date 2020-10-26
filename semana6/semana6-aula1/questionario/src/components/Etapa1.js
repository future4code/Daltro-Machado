import React from 'react';


class Etapa1 extends React.Component {
state = {
    escolaridade: 'superior completo',
}

onChangeEscolaridade = (event) =>{
    let novaEscolaridade = event.target.value
    //console.log(novaEscolaridade)
    this.setState({escolaridade: novaEscolaridade})
    //console.log(Etapa1.escolaridade)
}

render() {

return (
<div>
<h3>ETAPA 1 - DADOS GERAIS</h3>
<p>1. Qual o seu nome?</p>
<input></input>
<p>2. Qual a sua idade?</p>
<input></input>
<p>3. Qual o seu email?</p>
<input></input>
<p>4. Qual a sua escolaridade?</p>
<select onChange={this.onChangeEscolaridade}>
    <option value='medio incompleto'>Ensino Médio Incompleto</option>
    <option value='medio completo'>Ensino Médio Completo</option>
    <option value='superior incompleto'>Ensino Superior Incompleto</option>
    <option value='superior completo'>Ensino Superior Completo</option>
</select>

</div>
)
}

}
export default Etapa1;