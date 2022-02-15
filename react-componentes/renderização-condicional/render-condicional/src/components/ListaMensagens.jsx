import React from "react";

class ListaMensagens extends React.Component  {

    render () {

        const listaMensagens = this.props.mensagens

        return (
            <div>
                <h3>Lista de Mensagens</h3>
                {listaMensagens.map((mensagens) => <p>{mensagens}</p>)}
            </div>
        )
    }
}

export default ListaMensagens
