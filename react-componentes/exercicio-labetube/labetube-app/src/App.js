import "./App.css";
import React from "react"

function App() {

  const titulo = "Titulo do Vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div className="tela-inteira">
      <header>
          <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/73/73534.png" alt="icone do labetube"/>
            <h1>LabeTube</h1>
          </div>

          <div class="pesquisa">
            <input type="text" placeholder="Buscar..."/>
          </div>
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>

        <section className="painel-de-videos" onClick={reproduzVideo}>
          <div className="box-pagina-principal media1" onclick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{titulo}</h4>
          </div>

          <div className="box-pagina-principal media2" onclick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=2 " alt="" />
            <h4>{titulo}</h4>
          </div>

          <div className="box-pagina-principal media3" onclick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=3 " alt="" />
            <h4>{titulo}</h4>
          </div>

          <div className="box-pagina-principal media4" onclick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=4 " alt="" />
            <h4>{titulo}</h4>
          </div>

          <div className="box-pagina-principal media5" onclick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=5 " alt="" />
            <h4>{titulo}</h4>
          </div>

          <div className="box-pagina-principal media6" onclick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=6 " alt="" />
            <h4>{titulo}</h4>
          </div>

          <div className="box-pagina-principal media7" onclick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=7 " alt="" />
            <h4>{titulo}</h4>
          </div>

          <div className="box-pagina-principal media8" onclick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=8 " alt="" />
            <h4>{titulo}</h4>
          </div>
        </section>
      </main>

      <footer>
        <p>Press play for life</p>
      </footer>
    </div>
  );
}

export default App;
