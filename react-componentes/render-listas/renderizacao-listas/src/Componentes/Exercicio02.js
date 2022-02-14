import React from "react";
import styled from "styled-components";

class Exercicio02 extends React.Component {

    state = {
        frutasString: [
            "Banana",
            "Laranja",
            "Maçã"
        ]
    }

    adicionarFruta1 = () => {
        const novasFrutas = [...this.state.frutasString]
        novasFrutas.push("Abacate")
        this.setState({frutasString: novasFrutas})
    }

    adicionarFruta2 = () => {
        const novasFrutas = [...this.state.frutasString, "Uva"]
        this.setState({frutasString: novasFrutas})
    }

    adicionarFruta3 = () => {
        this.setState({frutasString: [...this.state.frutasString, "Morango"] })
    }

    alterarLaranjaParaMaracuja = () => {
        const novasFrutas = [...this.state.frutasString]
        novasFrutas[1] = "Maracujá"
        this.setState({frutasString: novasFrutas})
    }

    removerBanana  = () => {
        const novasFrutas = this.state.frutasString.filter((fruta) => {
            return fruta !== "Banana"
        })
        this.setState({frutasString: novasFrutas})

    }

    render ()  {

        const  frutasComponente = this.state.frutasString.map((fruta, index) => {
            return <li key={index}>{fruta}</li> })

        return (
            <div>
                <h1>Exercício 02</h1>
                <ol>
                    {frutasComponente}
                </ol>

                <button onClick={this.adicionarFruta1}>Adicionar Abacate</button>
                <button onClick={this.adicionarFruta2}>Adicionar Uva</button>
                <button onClick={this.adicionarFruta3}>Adicionar Morango</button>
                <br />
                <button onClick={this.alterarLaranjaParaMaracuja}>Laranja vira Maracujá</button>
                <button onClick={this.removerBanana}>Remover Banana</button>
            </div>
        )
    }
}

export default Exercicio02
