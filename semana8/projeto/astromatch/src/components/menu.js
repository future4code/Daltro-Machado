import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import BotaoCurtir from "../img/IconesAstromatch_curtir.svg";
import BotaoDispensar from "../img/IconesAstromatch_dispensar.svg";

const ContainerMenu = styled.div`
  width: 50vw;
  height: 60vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 80% 20%;
  column-gap: 10px;
  text-align: center;
  padding: 0px;
  border: none;
`
const Fotos = styled.div`
  padding: 0px;
  border: none;
  color: black;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`
const Bio = styled.div`
  background-color: #BC0748;
  border-radius: 5%;
  width: 25vw;
  height: 40vh;
  color: white;
  font-weight: bold;
  padding: 10px;
  border: none;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`
const Botoes = styled.div`
  padding: 0px;
  border: none;
  color: black;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`
const FotoPerfil = styled.img`
  height: 60vh;
  width: 25vw;
  border-radius: 5%;
`
const NomePerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BC0748;
  width: 25vw;
  height: 10vh;
  color: white;
  font-weight: bold;
  border: none;
`

const BotoesMenu = styled.img`
height: 10vh;
width: 10vh;
padding: 0px;
cursor: pointer;
border-style: solid;
border-color: white;
border-radius: 50%;
:hover {
  border-style: solid;
  border-color: #09FAC0;
  border-radius: 50%;
};
`

export default function Menu() {
    const [perfil, setPerfil] = useState({});

    useEffect(() => {
      pegaPerfil();
    }, []);

    const pegaPerfil = () => {
      axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daltro/person")
        .then(response => {
         if (response.data.profile === null) {
           alert("Por hoje é só pessoal! Volte depois para ver novos perfis!");
         } else {
           setPerfil(response.data.profile);  
         } 
        })
        .catch(err => {
          console.log("Erro")

        })
    }
    
    const darMatch = () => {
      axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daltro/choose-person",
        {
          "id": perfil.id,
          "choice": true
        })
        .then(response => {
          pegaPerfil()
        })
        .catch(err => {
          alert("Erro ao curtir o perfil")
        })
    }
  
    const dispensar = () => {
      axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daltro/choose-person",
        {
          "id": perfil.id,
          "choice": false
        })
        .then(response => {
          pegaPerfil()
        })
        .catch(err => {
          alert("Erro ao dispensar o perfil")
        })
    }

    return (
        <ContainerMenu>
            <Fotos>
               <FotoPerfil src={perfil.photo}></FotoPerfil> 
               <NomePerfil>{perfil.name}, {perfil.age}</NomePerfil>
            </Fotos>
            <Bio>
               <p>{perfil.bio}</p>
            </Bio>
            <Botoes>
                <BotoesMenu src={BotaoDispensar} alt="Dispensar" onClick={dispensar}></BotoesMenu>
                <BotoesMenu src={BotaoCurtir} alt="Curtir!" onClick={darMatch}></BotoesMenu>
            </Botoes>
        </ContainerMenu>
      );
    }