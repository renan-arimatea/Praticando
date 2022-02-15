import './App.css';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login'
import Posts from './components/Posts';
import Mensagens from './components/Mensagens';


class App extends  React.Component {

  state = {
    login: false
  }

  logar  = () => {
    this.setState({login : true})
  }

  logout  = () => {
    this.setState({login : false})
  }

  render () {
    let pagina = <h1>Página Erro</h1>

    if (this.state.login) {

      pagina = <Home onClickLogout={this.logout}/>

    } else {

      pagina = <Login onClickLogin={this.logar}/>

    }

    return (
      <div className='App'>
        <h1>Meu site</h1>
        <hr />
        {pagina}

      </div>
    )
  }
}

export default App;
