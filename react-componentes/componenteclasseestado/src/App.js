import './App.css';
import React from 'react';
import MeuComponente from './components/MeuComponente';
import MeuComponenteDeClasse from './components/MeuComponenteDeClasse';


function App() {
  return (
    <div className="App">
        <h1>Boa noite, Guimarães</h1>

        <h2>Componentes de Classe e Estado</h2>

        <MeuComponente nomeDaTurma={"Guimarães"}/>
        <MeuComponente nomeDaTurma={"Gebru"}/>
        <MeuComponente nomeDaTurma={"Hooks"}/>
        <MeuComponente nomeDaTurma={"Hooper"}/>

        <MeuComponenteDeClasse nomeDaTurma={"Gates"}/>
    </div>
  );
}

export default App;
