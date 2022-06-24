import React from "react";

class DadosGerais extends React.Component {

    render (){

        return (
            <div>
                <h2>Etapa 01 - Dados Gerais</h2>
                <div className="steps">
                    <h3>1 - Qual o seu nome?</h3>
                    <input type="text" />
                </div>
                <div className="steps">
                    <h3>2 - Qual a sua idade?</h3>
                    <input type="text" />
                </div>
                <div className="steps">
                    <h3>3 - Qual o seu email?</h3>
                    <input type="text"/>
                </div>
                <div className="steps">
                    <h3>4 - Qual a sua escolaridade?</h3>
                    <select name="ensino" id="ensino">
                        <option value="">selecione</option>
                        <option value="">Ensino médio incompleto</option>
                        <option value="">Ensino médio completo</option>
                        <option value="">Ensino superior incompleto</option>
                        <option value="">Ensino superior completo</option>
                    </select>
                </div>
            </div>
        )

    }
}

export default DadosGerais
