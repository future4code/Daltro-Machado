import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});  
  

  useEffect(() => {
    pegaPokemon(props.pokemon);
      }, [props.pokemon]);

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  
  
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

    const mostraPokemon = pokemon;

    return (
      <div>
        <p>{mostraPokemon.name}</p>
        <p>{mostraPokemon.weight} Kg</p>
        {mostraPokemon.types && <p>{mostraPokemon.types[0].type.name}</p>}
        {mostraPokemon.sprites && (
          <img src={mostraPokemon.sprites.front_default} alt={mostraPokemon.name} />
        )}
      </div>
    );
}


