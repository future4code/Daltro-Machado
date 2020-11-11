import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

const ContainerMatches = styled.div`
/*   display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 80% 20%;
  column-gap: 0px;
  text-align: center; */
  padding: 0px;
  border: none;
`
const FotoMatch = styled.img`
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
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
            <p>{profile.name}</p>
            </div>
        )
    }))
    
    return (
            <ContainerMatches>
                {listaMatches}
            </ContainerMatches>
          );

} 