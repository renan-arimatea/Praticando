
import './App.css';

import logoLabenu from './imgs/labenu.png'

function App() {

  const onClickBotao = () => {
    console.log("Botão Funcionando")
  }

  return (
    
    <div className="conteudo">
      <h1>Aprenda React com a Labenu!</h1>
      <h1>teste surge</h1>

      <img src={logoLabenu} alt="logo escrito labenu"/>

      <a href="https://www.labenu.com.br" target="_blank">Site da Labenu</a>

      <button onClick={onClickBotao}>Clique aqui!</button>

    </div>
  );
}

export default App;
