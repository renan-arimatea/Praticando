import React from "react";
import { CertificationContentBox } from "./CertificationsStyled";

const Certifications = (props) => {

    return (
        <CertificationContentBox>
            <img src={props.icon} alt="Icone" />
            <h4>{props.certificado}</h4>
            <p>{props.info}</p>
            <p><span>Validade: </span>{props.validade}</p>
        </CertificationContentBox>
    )
}

export default Certifications

