import React from "react";
import { PersonalInfoBox } from "./CardPequenoStyled";

const CardPequeno = (props) => {

    return (
        <PersonalInfoBox>
            
            <img src={props.imagem}/>
            <h4>{props.label}</h4>
            <p>{props.info}</p>
            
        </PersonalInfoBox>
    )
}

export default CardPequeno
