import react from "react";
import React from "react";
import styled from "styled-components";

const CardProf = styled.div`
    display: flex;
    border: 1px solid black;
    width: 20vw;
    justify-content: space-between;
    padding: 0 2em;
    margin: .5em 0;
`

const TextoLaranja = styled.p`
    color: orange;
`

class Exercicio01 extends react.Component {

    state = {

        professores: [
            {nome: "Bruno", idade: 24},
            {nome: "Renan", idade: 26},
            {nome: "Juliana", idade: 28},
            {nome: "Marina", idade: 31}
        ]
    }

    render () {

        const professoresComponente  = this.state.professores.map((prof, index) => {
            return (
                <CardProf key={index}>
                    <p>{prof.nome}</p>
                    <TextoLaranja>{prof.idade}</TextoLaranja>
                </CardProf>
            )
        })
        
        return (
            <div>
                <h1>Exercício 01</h1>
                <h2>Pessoas Instrutoras</h2>
                {professoresComponente}
            </div>
        )
    }
}

export default Exercicio01
