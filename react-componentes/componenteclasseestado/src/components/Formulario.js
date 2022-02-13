import React from "react";

class Formulario extends React.Component {

    state = {
        inputNome: "",
        inputEmail: ""
    }

    OnChangeNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    OnChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    render() {
        return (
            <div>
                <h3>Formulário</h3>
                <input placeholder={"Nome Completo"} value={this.state.inputNome} onChange={this.OnChangeNome}/>
                <br />
                <input placeholder={"Email"} value={this.state.inputEmail} onChange={this.OnChangeEmail}/>
            </div>
        )
    }
}

export default Formulario
