import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 1em;
`
const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`
const arrayPosts = [
  {
    nomeUsuario:'paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150',
  },

  {
    nomeUsuario:"marques.jopa",
    fotoUsuario:"https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
    fotoPost:"https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
  },

  {
    nomeUsuario:"monica_barbosa",
    fotoUsuario:"https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM",
    fotoPost:"https://i.picsum.photos/id/1083/5472/3648.jpg?hmac=CtOxgXc6Oe3TQvKBXtPsKVT9Z2Yg7SJKWVlgWPeMBUs"
  }
]

class App extends React.Component {

  state = {
    posts: arrayPosts,
    userName: "",
    userPhoto: "",
    postPhoto: ""
  }

  changeUserName = (event) => {
    this.setState({ userName: event.target.value })
  }

  changeUserPhoto = (event) => {
    this.setState({ userPhoto: event.target.value })
  }

  changePostPhoto = (event) => {
    this.setState({ postPhoto: event.target.value })
  }

  addNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.userName,
      fotoUsuario: this.state.userPhoto,
      fotoPost: this.state.postPhoto
    }

    this.setState({
      posts: [...this.state.posts, newPost],
      userName: "",
      userPhoto: "",
      postPhoto: ""
    })
  }

  render() {

    const componentesPost = this.state.posts.map((p) => {
      return (
        <Post
          nomeUsuario={p.nomeUsuario}
          fotoUsuario={p.fotoUsuario}
          fotoPost={p.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        <FormContainer>
          <input
            placeholder={"Nome do Usuário"}
            value={this.state.userName}
            onChange={this.changeUserName}
          />
          <input
            placeholder={"Foto do Usuário"}
            value={this.state.userPhoto}
            onChange={this.changeUserPhoto}
          />
          <input
            placeholder={"Foto do Post"}
            value={this.state.postPhoto}
            onChange={this.changePostPhoto}
          />
          <button onClick={this.addNewPost}>Criar Post</button>
        </FormContainer>
        {componentesPost}
      </MainContainer>
    )
  }
}

export default App;
