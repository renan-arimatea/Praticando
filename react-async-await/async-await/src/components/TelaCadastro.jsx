import React from "react";
import axios from "axios";

class TelaCadastro extends React.Component  {

    state = {
        nome: '',
        email: '',
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    criaUsuario = async () => {

        try {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

            const body = {
                name: this.state.nome,
                email: this.state.email
            }
    
            const headers = {
                headers: {
                    Authorization: "renan-arimatea-guimaraes"
                }
            }

            const response = await axios.post(url, body, headers)
            alert("Usuário criado com sucesso")
        } 
        
        catch(err) {
            alert(err.response.data.message)
        }
    }

    // MÉTODO THEN() E CATCH()

    // criaUsuario = () => {

    //     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    //     const body = {
    //         name: this.state.nome,
    //         email: this.state.email
    //     }

    //     const headers = {
    //         headers: {
    //             Authorization: "renan-arimatea-guimaraes"
    //         }
    //     }

    //     axios.post(url, body, headers)
    //     .then((res) => {
    //        alert("Usuário criado com sucesso")
    //        this.setState({nome: "", email: ""})
    //     })
    //     .catch((err) =>  {
    //         alert(err.response.data.message)
    //     })
    // }

    render() {

        return (
            <div>
               <button onClick={this.props.irParaLista}>Ir para Lista</button>
               <p>TelaCadastro</p> 
               <input 
               placeholder="nome" 
               type="text" 
               value={this.state.nome}
               onChange={this.handleNome}
               />
               <input 
               placeholder="email" 
               type="email"
               value={this.state.email}
               onChange={this.handleEmail}
               />
               <button onClick={this.criaUsuario}>Criar Usuário</button>
            </div>
        )
    }
}

export default TelaCadastro
