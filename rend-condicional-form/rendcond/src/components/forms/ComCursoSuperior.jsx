import React from "react";

class ComCursoSuperior extends React.Component {

    render (){

        return (
            <div>
                <h2>Etapa 02 - Informações de Ensino Superior</h2>
                <div className="steps">
                    <h3>5 - Qual curso?</h3>
                    <input type="text" />
                </div>
                <div className="steps">
                    <h3>6 - Qual unidade de ensino?</h3>
                    <input type="text" />
                </div>
            </div>
        )

    }
}

export default ComCursoSuperior
