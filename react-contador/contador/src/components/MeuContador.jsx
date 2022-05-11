import React from "react";

class MeuContador extends React.Component {

    state = {
        ValorAtual : 0,
    }

    onClickSoma = () => {
        this.setState({ValorAtual : this.state.ValorAtual + 1})
    }

    onClickSubtrai = () => {
        this.setState({ValorAtual : this.state.ValorAtual - 1})
    }

    render () {

        return (
            <div>
                <h1>Olá, este é um {this.props.name}</h1>
                <p>{this.state.ValorAtual}</p>
                <button onClick={this.onClickSubtrai}>Subtrai</button>
                <button onClick={this.onClickSoma}>Soma</button>
            </div>
        )
    }
}

export default MeuContador
