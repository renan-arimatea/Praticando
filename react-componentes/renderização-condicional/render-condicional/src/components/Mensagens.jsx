import React from "react";
import ListaMensagens from "./ListaMensagens";

class Mensagens extends React.Component  {

    state = {
        mensagens: ["Bom dia", "Boa noite"]
    }

    render () {
        return (
            <div>
                <h1>Mensagens</h1>

                {this.state.mensagens.length ? (<p>Você tem {this.state.mensagens.length} mensagens</p>) : (<p>Você não tem nenhuma nova mensagem.</p>)}

                {this.state.mensagens.length && <ListaMensagens mensagens={this.state.mensagens}/>}
            </div>
        )
    }
}

export default Mensagens
