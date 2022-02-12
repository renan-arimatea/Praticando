import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MyPhoto from './components/imgs/Eu.png'
import styled from 'styled-components';
import './App.css'

const AppGlobal = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div `
  width: 40vw;
  margin: 10px 0;

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`
const Contato  = styled.div `

`

function App() {
  return (
    <AppGlobal>
      <PageSectionContainer>
        <h2>Dados Pessoais</h2>
        <CardGrande 
          imagem={MyPhoto} 
          nome="Renan Arimatea" 
          descricao="Oi, eu sou o Renan. Faço parte de uma geração hiperconectada, amante da tecnologia e da praticidade. Vejo com brilho nos olhos este mundo de infinitas possibilidades que temos a disposição e quero fazer parte da comunidade que esta disposta a transformar a forma como as pessoas veem a tecnologia!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <Contato>
        <CardPequeno
          email="renanmoraiz@gmail.com"
          endereco="Rua Visconde de Sinimbu, 142 - Ponta Grossa PR"
        />
      </Contato>

      <PageSectionContainer>
        <h2>Experiências Profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQH70IbV_f7_IQ/company-logo_200_200/0/1639261561471?e=1652918400&v=beta&t=GIWnAkp1AmBO_2Nuj0kU6GYLhvG84IH_ZrMMORtn2x4" 
          nome="Bradesco" 
          descricao="Execução de Ações Voltadas a Qualidade no Atendimento e Satisfação das Necessidades dos Clientes, Experiência Hands-on na Conversão de Clientes para o Uso dos Canais Digitais (App, Internet Banking, Net Empresa e afins)" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFksvuJwlPqMg/company-logo_200_200/0/1547049263714?e=1652918400&v=beta&t=gRTGzkvf0SRWV2EUV7JqOCDrL8HskdG-j7G9X0X6BYM" 
          nome="Zero Resíduos" 
          descricao="Elaboração e Gerenciamento de Planilhas de Controle, Bancos de Dados Operacionais e Controle de Equipamentos, Controle de Faturamentos de Clientes e Fornecedores, Medição de Serviços Prestados, Auxílio na Elaboração de Indicadores de Qualidade e Contato com Clientes e Fornecedores." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Minhas Redes Sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppGlobal>
  );
}

export default App;
