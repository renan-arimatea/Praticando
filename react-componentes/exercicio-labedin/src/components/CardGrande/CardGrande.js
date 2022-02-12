import React from 'react';
import styled from 'styled-components';


const BigCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    font-weight: 100;
`

const BigImg = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigDiv = styled.p `
    margin-top: 15px;
    font-weight: 400;
    padding: .3em;

    h4 {
        text-transform: uppercase;
        padding-bottom: .5em;
    }
`


function CardGrande(props) {
    return (
        <BigCard>
            <BigImg src={ props.imagem } />
            <BigDiv>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </BigDiv>
        </BigCard>
    )
}

export default CardGrande;