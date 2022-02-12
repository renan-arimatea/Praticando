import React from "react";
import styled from "styled-components";

const Conteudo = styled.div `
        width: 40vw;
`
const SmallCard = styled.div `
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 10vh;

    img {
        width: 35px;
        margin-right: 10px;
        border-radius: 50%;
    }

    p {
        padding: .5em;
    }
`


const CardPequeno = (props) => {

    return (
        
        <Conteudo>
            <SmallCard>
                <img src="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1644617683~hmac=7137708c9cb13faa400945c5786d399e" alt="" />
                <strong>Email: </strong>
                <p>{props.email}</p>
            </SmallCard>
            
            <SmallCard>
                <img src="https://cdn-icons.flaticon.com/png/512/3178/premium/3178137.png?token=exp=1644617726~hmac=4bec10ed81ff50d349a84b5a366ea1ac" alt="" />
                <strong>Endereço: </strong>
                <p>{props.endereco}</p>
            </SmallCard>
        </Conteudo>
    )
}

export default CardPequeno
