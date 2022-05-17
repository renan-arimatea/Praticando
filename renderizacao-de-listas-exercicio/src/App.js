import React from "react";
import styled from "styled-components";

const CardProfessores = styled.div`
  display: flex;
  border: 1px solid black;
  width: 20em;
  justify-content: space-between;
  padding: 0 2em;
  margin: 1em;
  align-items: center;
`;
const ColorYellow = styled.p`
  color: yellow;
`;

class App extends React.Component {
  state = {
    professores: [
      { id: 1, nome: "João", idade: 25 },
      { id: 2, nome: "Pedro", idade: 29 },
      { id: 3, nome: "Maria", idade: 26 }
    ],
    inputNome: "",
    inputIdade: ""
  };

  guardaNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  guardaIdade = (event) => {
    this.setState({ inputIdade: event.target.value });
  };

  adicionarProfessor = () => {
    const addProf = {
      id: Math.random(),
      nome: this.state.inputNome,
      idade: this.state.inputIdade
    };

    const novoProfs = [...this.state.professores];
    novoProfs.push(addProf);
    this.setState({ professores: novoProfs });
    this.setState({ inputNome: "", inputIdade: "" });
  };

  removerProfessor = (idARemover) => {
    const rmvProf = this.state.professores.filter((prof) => {
      return prof.id !== idARemover;
    });

    this.setState({ professores: rmvProf });
  };

  render() {
    const professor = this.state.professores.map((prof, index) => {
      return (
        <CardProfessores key={index}>
          <p>{prof.nome}</p>
          <ColorYellow>{prof.idade}</ColorYellow>
          <button onClick={() => this.removerProfessor(prof.id)}>X</button>
        </CardProfessores>
      );
    });

    return (
      <div>
        <h2>Lista Professores</h2>
        <input
          value={this.state.inputNome}
          onChange={this.guardaNome}
          placeholder="Nome"
        />
        <input
          value={this.state.inputIdade}
          onChange={this.guardaIdade}
          placeholder="Idade"
        />
        <button onClick={this.adicionarProfessor}>Adicionar Professor</button>
        {professor}
      </div>
    );
  }
}

export default App;
