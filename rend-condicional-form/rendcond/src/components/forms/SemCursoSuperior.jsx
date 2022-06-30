import React from "react";

class SemCursoSuperior extends React.Component {

    render (){

        return (
            <div>
                <h2>Etapa 02 - Informações Gerais de Ensino</h2>
                <div className="steps">
                    <h3>5 - Por que você não terminou um curso de graduação?</h3>
                    <input type="text" />
                </div>
                <div className="steps">
                    <h3>6 - Você fez algum curso complementar? </h3>
                    <select name="curso-compl" id="curso-compl">
                        <option value="">Selecione</option>
                        <option value="">Curso técnico</option>
                        <option value="">Curso de inglês</option>
                        <option value="">Não fiz curso complementar</option>
                    </select>
                </div>
            </div>
        )

    }
}

export default SemCursoSuperior
