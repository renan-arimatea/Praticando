import React from "react";
import styled from "styled-components";

const ContainerCartao = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1em;
    width: 26vw;
    height: 25vh;
    margin: auto;
`

const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: .3em;
    }
`

class CartaoCredito extends React.Component {

    state = {
        inputNome: "",
        inputCartao: "",
        inputCvv: "",
    }

    OnChangeNome = (event)  => {
        this.setState({inputNome: event.target.value})
    }

    OnChangeCartao = (event)  => {
        this.setState({inputCartao: event.target.value})
    }

    OnChangeCvv = (event)  => {
        this.setState({inputCvv: event.target.value})
    }

    OnClickEnviar = () => {
        console.log(this.state.inputNome)
        console.log(this.state.inputCartao)
        console.log(this.state.inputCvv)

        this.setState({inputNome: '', inputCartao: '', inputCvv: ''})
    }

    render() {
        return  (
            <div>
                <h2>Exercício Cartão de Crédito</h2>

                <ContainerCartao>
                    <p><strong>Nome: </strong>{this.state.inputNome}</p>

                    <p><strong>Número do Cartão: </strong>{this.state.inputCartao}</p>

                    <p><strong>CVV: </strong>{this.state.inputCvv}</p>
                </ContainerCartao>

                <ContainerInputs>
                    <h4>Inisira as informações do seu cartão de crédito</h4>

                    <input placeholder={"Nome"} value={this.state.inputNome} onChange={this.OnChangeNome}/>

                    <input placeholder={"Número do Cartão"} value={this.state.inputCartao} onChange={this.OnChangeCartao}/>

                    <input placeholder={"cvv"} value={this.state.inputCvv} onChange={this.OnChangeCvv}/>

                    <button onClick={this.OnClickEnviar}>Enviar</button>

                </ContainerInputs>
            </div>
        )
    }

}

export default CartaoCredito
