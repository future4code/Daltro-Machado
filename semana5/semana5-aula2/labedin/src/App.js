import React from 'react';
import './App.css';
import BarraPesquisa from './components/BarraPesquisa/BarraPesquisa';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="header">
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />
        <BarraPesquisa/>
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />  

      </div>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQHbpa2O6ePAKQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=-RlGTeb18vTeTdwDDurCV2Q9AN9TQoaOkGbnsGc2h88" 
          nome="Daltro Machado" 
          descricao="Profissional com mais de 10 anos de experiência em tecnologia atuando em diferentes Áreas de TI. Quero construir histórias de sucesso em ambientes que proporcionem novos desafios e que gerem conhecimento contí­nuo. Sou também Co-fundador do estúdio de jogos digitais Oficina de Games, onde atuo como Produtor e Game Designer."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          icone="https://marciorosaarquitetura.com.br/wp-content/uploads/2014/11/icone-e-mail1-300x300.png"
          tipo="E-mail: "
          info="daltrowilliam@gmail.com"
        />

        <CardPequeno
          icone="https://image.flaticon.com/icons/png/512/1239/1239525.png"
          tipo="Endereço: "
          info="Rua Labenu, 100"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQF0vXIfG2vpKg/company-logo_100_100/0?e=1610582400&v=beta&t=zNwJ7iPffgspx3nrF4d7s0C5m440s6s-AL1LKYncHX8" 
          nome="Capgemini" 
          descricao="Atuava na área de Pré-Vendas da empresa sendo responsável pelo desenho e precificação de soluções de TI para atender as necessidades de clientes privados e exigências de Editais." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGhF5S_rZjL-A/company-logo_100_100/0?e=1610582400&v=beta&t=wgbVGAhYIq9OJ94P8BcsnLxyDbc-dq63W6wPbPR6yho" 
          nome="Projeto Petrobras - Tata Consultancy e Stefanini Brasil" 
          descricao="Responsável pela manutenção dos níveis de serviços dos Sistemas hospedados pela TI da Petrobras, pelo relacionamento com os clientes e proprietários dos Sistemas, assim como com as equipes técnicas da TI, no intuito de solucionar problemas." 
        />

        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFeX2HGPFx1Gw/company-logo_100_100/0?e=1610582400&v=beta&t=7n-RmJxCn3WW6Xb-ycO16kXU4-LOIsBGPlv5BwWRv08" 
          nome="Teledata" 
          descricao="Gerente responsável por clientes do Rio de Janeiro e Espírito Santo. Atuava junto a área Comercial, em visitas à clientes para entender as necessidades do mesmo e identificar novas oportunidades.
          Gerenciava a implantação de novos contratos de serviços e produtos, treinamentos, gestão financeira e de pessoal." 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências Acadêmicas</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_100_100/0?e=1610582400&v=beta&t=BaQxE9KR3JeT79gqyAUC37Tyqw1ip51xVFNPiucjPjg" 
          nome="Labenu"
          descricao="Desenvolvedor Full Stack"
        />
        
        <CardGrande 
          imagem="https://pdjforum.com/uploads/default/original/2X/8/8d55b8d021db0f6fe37f231f20db35888d35e631.png" 
          nome="Academia de Produção de Jogos"
          descricao="Desenvolvimento de Jogos Digitais" 
        />

        <CardGrande 
          imagem="https://www.exin.com/br-pt/app/uploads/sites/3/2018/11/EXIN-Logo.png" 
          nome="Exin"
          descricao="Certificação Itil Foundation V3" 
        />

        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHqTiBwDyyYpQ/company-logo_100_100/0?e=1610582400&v=beta&t=Ce2q_QBFrEMl751YBHncHXDjBkAqc47cB1ezdE68EnM" 
          nome="Wizard"
          descricao="Inglês Avançado"
        />

        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQEH6tGLPA6dgg/company-logo_100_100/0?e=1610582400&v=beta&t=iITMqiopT5H4eC3OUJP8UvZS72_hi61RNGk8oDp8szk" 
          nome="Centro Universitário Celso Lisboa"
          descricao="Ciências da Computação" 
        />

        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFNQKpm0mGKUw/company-logo_100_100/0?e=1610582400&v=beta&t=1i1wsjw8gm1asm2KOlZccuHlAnjLG27i5C5Ttww_rxE" 
          nome="SENAC RJ"
          descricao="Editoração Eletrônica" 
        />



      </div>

      
      
    </div>
  );
}

export default App;
