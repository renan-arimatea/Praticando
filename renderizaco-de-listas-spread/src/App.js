import React from "react";

class App extends React.Component {
  state = {
    listaDeFrutas: ["Banana", "Maçã", "Uva"]
  };

  adicionarFrutas = () => {
    const novaFruta = [...this.state.listaDeFrutas];
    novaFruta.push("Morango");
    this.setState({ listaDeFrutas: novaFruta });
  };

  render() {
    const listaDeFrutasAtualizado = this.state.listaDeFrutas.map(
      (fruta, index) => {
        return <li key={index}>{fruta}</li>;
      }
    );

    return (
      <div>
        <h2>Lista de Frutas</h2>
        <ol>{listaDeFrutasAtualizado}</ol>
        <button onClick={this.adicionarFrutas}>Adicionar Morango</button>
      </div>
    );
  }
}

export default App;
