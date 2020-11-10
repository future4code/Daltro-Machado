import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import Matches from "./components/matches";
import Menu from "./components/menu";


const ContainerPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  //box-sizing: border-box;
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
  grid-template-rows: 10% 90%;
  padding: 0px;
  border: none;
  grid-column: 2 / 3;
`
const Header = styled.div`
  padding: 0px;
  border: none;
  grid-row: 1 / 2;
`
const Logo = styled.div`
  padding: 0px;
  border: none;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

export default function App() {
  
  return (
    <ContainerPrincipal>
      <Logo>
        <p>Logo</p>
        <button>Facebook</button>
        <button>Instagram</button>
        <button>Twitter</button>
      </Logo>
      <ContainerCentral>
        <Header>
          <button>Matches</button>
          <button>Apagar</button>
        </Header>
          <Menu/>
      </ContainerCentral>
    </ContainerPrincipal>
  );
}

