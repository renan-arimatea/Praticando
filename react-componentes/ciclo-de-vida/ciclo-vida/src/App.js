import './App.css';
import React from 'react';
import styled from 'styled-components';

class App extends React.Component {

  state = {
    nome: "",
    email: "",
    idade: ""
  }

  onChangeNome = (event) => {
    this.setState({nome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  onChangeIdade = (event) => {
    this.setState({idade: event.target.value})
  }

  guardarDados = () => {
    const usuario = {
      nome: this.state.nome,
      email: this.state.email,
      idade: this.state.idade,
    }

    localStorage.setItem("usuario", JSON.stringify(usuario))
  }

  pegarDados = () => {
    const usuarioString = localStorage.getItem("usuario")
    const usuario = JSON.parse(usuarioString)

    this.setState ({
      nome: usuario.nome,
      email: usuario.email,
      idade: usuario.idade
    })
  }

  render () {
    console.log(this.state.nome, this.state.email, this.state.idade)

    return (
      <div className="App">
        <h1>Exercício Ciclo de Vida</h1>
  
        <form onSubmit={this.guardarDados}>
          <label>
            Nome:
            <input type="text" onChange={this.onChangeNome} value={this.state.nome}/>
          </label>

          <label>
            Email:
            <input type="text" onChange={this.onChangeEmail} value={this.state.email}/>
          </label>

          <label>
            Idade:
            <input type="text" onChange={this.onChangeIdade} value={this.state.idade}/>
          </label>

          <input type="submit" value="Enviar" />
        </form>
        <br />
        <button onClick={this.pegarDados}>Pegar Dados</button>
      </div>
    );
  }
  
}

export default App;
