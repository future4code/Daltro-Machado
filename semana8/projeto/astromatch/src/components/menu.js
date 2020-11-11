import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

const ContainerMenu = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 80% 20%;
  column-gap: 0px;
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
  width: 35vw;
  height: 50vh;
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
  height: 80vh;
  width: 35vw;
  border-radius: 5%;
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
               <p>{perfil.name}</p>
            </Fotos>
            <Bio>
               <p>{perfil.bio}</p>
            </Bio>
            <Botoes>
                <button onClick={dispensar}>Dispensar</button>
                <button onClick={darMatch}>Curtir</button>
            </Botoes>
        </ContainerMenu>
      );
    }