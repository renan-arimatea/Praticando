import React from 'react';
import './App.css';

class App extends React.Component  {

  state = {
    valorContador: 0
  }

  OnClickSoma = () => {
    // NÃO PODE //
    // this.state.valorContador = this.state.valorContador + 1


    // MANEIRA PADRÃO
    // const valorAtual = this.state.valorContador
    // const valorFinal = valorAtual + 1
    // this.setState({valorContador: valorFinal})

    //MANEIRA RDUZIDA OU REFATORADA
    this.setState({valorContador: this.state.valorContador + 1})
  }

  OnClickSubtrai = () => {
    // NÃO PODE //
    // this.state.valorContador = this.state.valorContador - 1


    // MANEIRA PADRÃO
    // const valorAtual = this.state.valorContador
    // const valorFinal =  valorAtual  - 1
    // this.setState({valorContador: valorFinal})

    //MANEIRA RDUZIDA OU REFATORADA
    this.setState({valorContador: this.state.valorContador - 1})
  }

  render() {
    return (

      <div className='App'>
          <h1>Contador</h1>
          <h2>{this.state.valorContador}</h2>
          <button onClick={this.OnClickSubtrai}>Subtrai</button>
          <button onClick={this.OnClickSoma}>Soma</button>
      </div>
    );
  }
}

  export default App;
