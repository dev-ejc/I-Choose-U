import React, { useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import Stat from "../entry/Stat";
import Sprite from "../entry/Sprite";
import Form from "../entry/Form"
const Entry = () => {
  const pokemonContext = useContext(PokemonContext);
  const { getPokemon, pokemon, loading } = pokemonContext;
  const onClick = () => {
    getPokemon();
  };
  useEffect(() => {
    getPokemon();
  }, []);
  if (loading || pokemon === null) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{pokemon.species.name}</h5>
          <Sprite />
          <Stat />
          <Form />
        </div>
      </div>
    );
  }
};

export default Entry;
