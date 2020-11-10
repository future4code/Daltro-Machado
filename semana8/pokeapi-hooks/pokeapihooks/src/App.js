import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState([]);
  
  const changePokeName = (event) => {
    setPokeName(event.target.value);
    };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      })});

    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value="">Nenhum</option>
            {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );

}

