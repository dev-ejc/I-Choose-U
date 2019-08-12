import React, { useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const Profile = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemon, loading } = pokemonContext;
  if (loading || pokemon === null) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div class="card-body">
        <h5 class="card-title">Information</h5>
        <h7>Abilities: 
        {pokemon.abilities.forEach(item => (<span>{item.ability.name}</span>))}
        </h7>
        <h7>Types: 
        {pokemon.types.forEach(type => (<span>{type.type.name}</span>))}
        </h7>
      </div>
    );
  }
};

export default Profile;
