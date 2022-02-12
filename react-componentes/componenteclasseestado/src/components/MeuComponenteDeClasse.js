import React from "react";

class MeuComponenteDeClasse extends React.Component {

    OnClickBotao = () => {
        alert("O Botão foi clicado!")
    }

    render () {
        return (
            <div>
                <h3>Nome da Turma: {this.props.nomeDaTurma}</h3>
                <button onClick={this.OnClickBotao}>Clique Aqui!</button>
            </div>
        )
    }
}

export default MeuComponenteDeClasse
