import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import Matches from "./components/matches";
import Menu from "./components/menu";
import Astromatch from "./img/IconesAstromatch_logo.png";
import LogoDeitado from "./img/IconesAstromatch_logo deitado.png";
import Facebook from "./img/IconesAstromatch_facebook.svg";
import Instagram from "./img/IconesAstromatch_instagram.svg";
import Twitter from "./img/IconesAstromatch_twitter.svg";
import BotaoMatches from "./img/IconesAstromatch_matches.svg";
import BotaoMenu from "./img/IconesAstromatch_menu.svg";
import ApagarHistorico from "./img/IconesAstromatch_apagar.svg";

const ContainerPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 80%;
  column-gap: 0px;
  text-align: center;
  padding: 0px;
  border: none;
  overflow-x: auto;
  color: black;
`
const ContainerCentral = styled.div`
  display: grid;
  grid-template-rows: 15% 85%;
  justify-items: center;
  padding: 0px;
  border: none;
  grid-column: 2 / 3;
`
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  border: none;
  grid-row: 1 / 2;
  background-color: #BC0748;
`
const ContainerLateral = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 10% 90%;
  padding: 10px;
  border: none;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-color: #BC0748;
 `
const RedesSociais = styled.img`
height: 6vh;
width: 6vh;
padding: 5px;
cursor: pointer;
border-style: solid;
border-color: #BC0748;
border-radius: 50%;
:hover {
  border-style: solid;
  border-color: #09FAC0;
  border-radius: 50%;
};
`
const Icones = styled.div`
  grid-row: 1 / 2;
`
const Logomarca = styled.img`
height: 70vh;
padding: 5px;
`
const LogoHorizontal = styled.img`
height: 8vh;
padding: 5px;
`

const BotoesHeader = styled.img`
height: 8vh;
width: 8vh;
padding: 0px;
cursor: pointer;
border-style: solid;
border-color: #BC0748;
border-radius: 50%;
:hover {
  border-style: solid;
  border-color: #09FAC0;
  border-radius: 50%;
};
`


export default function App() {
  const [telaCentral, setTelaCentral] = useState(true);
  const [trocaPagina, setTrocaPagina] = useState(false)
  const [pagina, setPagina] = useState(BotaoMatches)

  const mudaPagina = () => {
    setTelaCentral(!telaCentral)
    setTrocaPagina(!trocaPagina)
    if (trocaPagina) {
      setPagina(BotaoMatches)
    } else {
      setPagina(BotaoMenu)
    }
  } 

  const apagaHistorico = () => {
    const confirma = window.confirm("Tem certeza que deseja apagar todo o histórico de curtidas e matches ?")
    if (confirma) {
      axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daltro/clear")
      .then(response => {
        alert("Histórico apagado!")
        if (!telaCentral) {
          setTelaCentral(!telaCentral)
        }
      })
      .catch(err => {
        alert("Erro ao apagar histórico")
      })
    }
  }
  return (
    <ContainerPrincipal>
      <ContainerLateral>
        <Icones>
        <a href="https://www.facebook.com/" target="blank">
          <RedesSociais src={Facebook}></RedesSociais>
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <RedesSociais src={Instagram}></RedesSociais>
        </a>
        <a href="https://www.twitter.com/" target="blank">
          <RedesSociais src={Twitter}></RedesSociais>
        </a>
        </Icones>
        <Logomarca src={Astromatch}></Logomarca>
      </ContainerLateral>
      <ContainerCentral>
        <Header>
          <BotoesHeader src={pagina} alt="Ver Matches" onClick={mudaPagina}></BotoesHeader>
          <LogoHorizontal src={LogoDeitado}></LogoHorizontal>
          <BotoesHeader src={ApagarHistorico} alt="Apagar Histórico" onClick={apagaHistorico}></BotoesHeader>
        </Header>
          {telaCentral ? <Menu/> : <Matches/>}
      </ContainerCentral>
    </ContainerPrincipal>
  );
}

