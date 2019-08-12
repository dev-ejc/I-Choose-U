import React, { useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import Sprite from "../entry/Sprite";
// import Form from "../entry/Form";
import Info from "../entry/Info";
import Alert from '../alerts/Alert.js'
const Entry = () => {
  const pokemonContext = useContext(PokemonContext);
  const { getPokemon, pokemon, loading, current } = pokemonContext;
  useEffect(() => {
    getPokemon();
  }, [current]);
    return (
      <div class="card">
        <div class="card-body">{loading || pokemon === null ?  (<div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
        </div>) : (
          <div>
            <Alert />
          <h1 class="card-title">{pokemon.species.name}</h1>
          <Sprite sprites={pokemon.sprites} />
          <Info pokemon={pokemon}/>
          </div>
        )}
        {/* <Form /> */}
        </div>
    </div>
    );
};

export default Entry;
