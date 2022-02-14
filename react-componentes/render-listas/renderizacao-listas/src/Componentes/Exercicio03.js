import React from "react";
import styled from "styled-components";

const CardProf = styled.div`
    display: flex;
    border: 1px solid black;
    width: 20vw;
    justify-content: space-between;
    padding: 0 2em;
    margin: .5em 0;
    align-items: center;
`

const TextoLaranja = styled.p`
    color: orange;
`

class Exercicio03 extends React.Component {

    state = {

        professores: [
            {id: 1, nome: "Bruno", idade: 24},
            {id: 2, nome: "Renan", idade: 26},
            {id: 3, nome: "Juliana", idade: 28},
            {id: 4, nome: "Marina", idade: 31}
        ],

        inputNome: "",
        inputIdade: ""
    }

    gurdaNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    guardaIdade = (event) => {
        this.setState({inputIdade: event.target.value})
    }

    adicionarInstrutor = () => {
        const novoInstrutor = {
            id: Math.random(),
            nome: this.state.inputNome,
            idade: this.state.inputIdade
        }

        const novosIntrutores = [...this.state.professores]
        novosIntrutores.push(novoInstrutor)
        this.setState({professores: novosIntrutores})
        this.setState({inputNome: "", inputIdade: ""})
    }

    deletaInstrutor = (idARemover) => {
        const novosIntrutores = this.state.professores.filter((prof) => {
            return prof.id  !== idARemover
        })

        this.setState({professores: novosIntrutores})
    }

    render () {

        const professoresComponente  = this.state.professores.map((prof, index) => {
            return (
                <CardProf key={index}>
                    <p>{prof.nome}</p>
                    <TextoLaranja>{prof.idade}</TextoLaranja>
                    <button onClick={()=> this.deletaInstrutor(prof.id)}>x</button>
                </CardProf>
            )
        })
        
        return (
            <div>
                <h1>Exercício 03</h1>

                <h2>Pessoas Instrutoras</h2>

                <input 
                    value={this.state.inputNome}
                    onChange={this.gurdaNome}
                    placeholder="Nome"
                 />

                <input 
                    value={this.state.inputIdade}
                    onChange={this.guardaIdade}
                    placeholder="Idade"
                 />

                 <button onClick={this.adicionarInstrutor}>Adicionarr Instrutor(a)</button>
                
                {professoresComponente}
            </div>
        )
    }
}

export default Exercicio03
