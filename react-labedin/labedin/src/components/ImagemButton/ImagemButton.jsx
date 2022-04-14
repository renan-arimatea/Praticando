import React from 'react';
import { ImagemButtonContent } from './ImagemButtonStyled';

function ImagemButton(props) {
    return (
        <ImagemButtonContent>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemButtonContent>

    )
}

export default ImagemButton;
