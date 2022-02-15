import React from "react";
import Mensagens from "../components/Mensagens";
import Posts from "../components/Posts";

class Home extends React.Component {

    state = {
        pagina: ""
    }

    irParaPosts = () => {
        this.setState({pagina : "posts"})
    }

    irParaMensagens = () => {
        this.setState({pagina : "mensagens"})
    }

    render () {

        let secao 

        switch (this.state.pagina) {
            case "posts":
                secao = <Posts/>
                break;
            case "mensagens":
                secao = <Mensagens/>
                break;
            default:
                secao = <p>Nenhuma seção selecionada</p>
                break;
        }

        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.irParaPosts}>Posts</button>
                <button onClick={this.irParaMensagens}>Mensagens</button>
                <button onClick={this.props.onClickLogout}>Logout</button>
                {secao}
            </div>
        )
    }
}

export default Home
