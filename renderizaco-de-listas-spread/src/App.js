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

  alterarFruta = () => {
    const novaFruta = [...this.state.listaDeFrutas];
    novaFruta[1] = "Melancia";
    this.setState({ listaDeFrutas: novaFruta });
  };

  removerFruta = () => {
    const novaFruta = this.state.listaDeFrutas.filter((fruta) => {
      return fruta !== "Banana";
    });
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
        <button onClick={this.alterarFruta}>Alterar Maçã</button>
        <button onClick={this.removerFruta}>Remover Banana</button>
      </div>
    );
  }
}

export default App;
