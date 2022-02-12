import React from 'react';
import './App.css';
import MeuPrimeiroComponente from './components/MeuPrimeiroComponente';
import {MeuSegundoComponente} from './components/MeuSegundoComponente';
import MeuTerceiroComponente from './components/MeuTerceiroComponente';
import styled from "styled-components"


const BlueTitle = styled.h2`
    color: blue;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: gray;

`

function App() {
  return (
    <div className='App'>

        {/* <h1>Boa noite, Guimarães e Gebru</h1>

        <h2>Preparados para nossa segunda aula de React?</h2> */}

        <MeuPrimeiroComponente/>

        <MeuSegundoComponente/>

        <MeuTerceiroComponente saudacao={"Bom dia"} adjetivoAula={"TOP"}/>

        <MeuTerceiroComponente saudacao={"Boa tarde"} adjetivoAula={"MASSA"}/>

        <MeuTerceiroComponente saudacao={"Boa noite"} adjetivoAula={"SHOW"}/>

        <BlueTitle>Testando Styled Components</BlueTitle>
    </div>
  );
}

export default App;
