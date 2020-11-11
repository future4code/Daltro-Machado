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
  background-color: red;
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
          console.log(matches)
          alert("Executou PegaMAtches")
        })
        .catch(err => {
          alert("Erro ao pegar os matches");
        })

        return (
            <ContainerMatches>
                <p>Teste</p>
            </ContainerMatches>
          );
    }
} 