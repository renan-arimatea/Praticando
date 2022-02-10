import './App.css';
import logo from "./imgs/logo.png"

function App() {

  const onClickBotao = () => {
    alert("o botão funcionou!")
  }
  return (
      <div className='conteudo'>
          <h1>Aprenda React com a Labenu</h1>

          <img src={logo} alt="Logo Labenu" />

          <a href="https://www.labenu.com.br" target="_blank">Site da Labenu</a>

          <button onClick={onClickBotao}>Clique Aqui!</button>
      </div>
  );
}

export default App;
