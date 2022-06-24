import React from "react";
import Agradecimentos from "../forms/Agradecimentos";
import ComCursoSuperior from "../forms/ComCursoSuperior";
import DadosGerais from "../forms/DadosGerais";
import SemCursoSuperior from "../forms/SemCursoSuperior";

class FormularioInscricao extends React.Component {

    state = {
        etapa: "Geral",
    }

    renderizaEtapa = () => {
        switch (this.state.etapa) {

            case "Geral":
                return <DadosGerais/> 
            
            case "Ensino Superior":
                return <ComCursoSuperior/>
            
            case "Ensino Médio":
                return <SemCursoSuperior/>
            
            case "Final":
                return <Agradecimentos/>
        }
    }


    render (){

        return (
            <div>
                <h1>Formulário</h1>
                
                {this.renderizaEtapa()}

                <button>Próxima Etapa</button>
            </div>
        )

    }
}

export default FormularioInscricao
