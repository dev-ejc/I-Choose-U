import React, { useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const Sprite = () => {
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
      <div className="container m-2">
        <img
          src={pokemon.sprites["front_default"]}
          style={{ width: "50%", height: "auto" }}
          class="card-img-top"
          alt="sprite"
        />
      </div>
    );
  }
};

export default Sprite;
