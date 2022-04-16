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

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={"marques.jopa"}
          fotoUsuario={"https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"}
          fotoPost={"https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"}
        />
        <Post
          nomeUsuario={"monica_barbosa"}
          fotoUsuario={"https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM"}
          fotoPost={"https://i.picsum.photos/id/1083/5472/3648.jpg?hmac=CtOxgXc6Oe3TQvKBXtPsKVT9Z2Yg7SJKWVlgWPeMBUs"}
        />
      </MainContainer>
    );
  }
}

export default App;
