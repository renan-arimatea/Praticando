import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Certifications from './components/Certifications/Certifications';

import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQEG4WMoGB_Juw/profile-displayphoto-shrink_400_400/0/1637696224318?e=1655337600&v=beta&t=V8DmUBfhsqoHSAZWhAFdPHP5XTPHofwzZcRMecVbGuY" 
          nome="Renan Arimatea" 
          descricao="Faço parte de uma geração hiperconectada, amante da tecnologia e da praticidade. Vejo com brilho nos olhos este mundo de infinitas possibilidades que temos a disposição e quero fazer parte da comunidade que esta disposta a transformar a forma como as pessoas veem a tecnologia! Atualmente tenho uma base de conhecimentos em Desenvolvimento Web (HTML, CSS, JavaScript, React) e Data Analytics (Python, R, SQL)."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/2985/premium/2985150.png?token=exp=1649894621~hmac=a82cf0f9de9bcf363dbe5183f7baa7ad" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
            imagem="https://cdn-icons.flaticon.com/png/512/2504/premium/2504727.png?token=exp=1649897487~hmac=c99c5a2c9c9d39710f9776723eeff515"
            label="Email: "
            info="renanmoraiz@gmail.com"
        />
        <CardPequeno
            imagem="https://cdn-icons-png.flaticon.com/512/2991/2991231.png"
            label="Endereço: "
            info="Ponta Grossa / PR"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQEO6vZu1hwZqQ/company-logo_100_100/0/1647961422159?e=2147483647&v=beta&t=t3hdsO60Z8k198niN15nOYLY2AmiJHbk-nsy8ubCBy4" 
          nome="Bradesco" 
          descricao="Execução de Ações Voltadas a Qualidade no Atendimento e Satisfação das Necessidades dos Clientes, Experiência Hands-on na Conversão de Clientes para o Uso dos Canais Digitais (App, Internet Banking, Net Empresa e afins), Habilidade de Ouvir e Responder às Necessidades e Preocupações dos Clientes (lidando com devoluções e reclamações de forma eficaz), Oferta de Produtos e Serviços Bancários." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFksvuJwlPqMg/company-logo_100_100/0/1547049263714?e=2147483647&v=beta&t=hSQqQGOV0h1SJSHcjMZXSzwjVditTQyvEBXYfVCNp0I" 
          nome="Zero Resíduos" 
          descricao="Elaboração e Gerenciamento de Planilhas de Controle, Bancos de Dados Operacionais e Controle de Equipamentos, Controle de Faturamentos de Clientes e Fornecedores, Medição de Serviços Prestados, Auxílio na Elaboração de Indicadores de Qualidade e Contato com Clientes e Fornecedores." 
        />
      </div>

      <div>
        <h2>Certificações</h2>
        <Certifications
          icon="https://cdn-icons-png.flaticon.com/512/4157/4157036.png"
          certificado="Anbima: "
          info="CPA-10"
          validade=" Junho / 2023"
        
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
