import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

const ContainerMatches = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 25px;
  row-gap: 15px;
  text-align: center;
  padding: 2px;
  margin: 20px;
  border: none;
  font-weight: bold;
`
const FotoMatch = styled.img`
  height: 12vh;
  width: 12vh;
  border-radius: 50%;
`
const NomePerfil = styled.p`
  background-color: #BC0748;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #09FAC0;
    color: black;
  };
`
export default function Matches() {
    const [matches, setMatches] = useState([]);
  
    useEffect(() => {
        pegaMatches();
      }, []);

    const pegaMatches = () => {
      axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daltro/matches")
        .then(response => {
          setMatches(response.data.matches);
        })
        .catch(err => {
          alert("Erro ao pegar os matches");
        })
    }
    
    const listaMatches = matches.map((profile =>{
        return (
            <div>
            <FotoMatch src= {profile.photo}></FotoMatch>
            <NomePerfil>{profile.name}</NomePerfil>
            </div>
        )
    }))
    
    return (
            <ContainerMatches>
                {listaMatches}
            </ContainerMatches>
          );

} 