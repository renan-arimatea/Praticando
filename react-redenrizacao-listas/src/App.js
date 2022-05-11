import React from "react";

class App extends React.Component {
  render() {
    const frutas = [<li>Banana</li>, <li>Morango</li>, <li>Uva</li>];

    const frutasString = ["Banana", "Morango", "Uva"];

    const frutasTratadas = frutasString.map((fruta, index) => {
      return <li key={index}>{fruta}</li>;
    });

    return (
      <div>
        <h2>Lista de Frutas</h2>
        {frutas}
        <br />
        {frutasString}
        <br />
        <br />
        {frutasTratadas}
      </div>
    );
  }
}

export default App;
