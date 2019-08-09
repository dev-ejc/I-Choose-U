import React, { useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
const Entry = () => {
  const pokemonContext = useContext(PokemonContext);
  const { getPokemon, pokemon, loading } = pokemonContext;
  useEffect(
    () => {
      getPokemon();
      console.log(pokemon);
    }, //eslint-disable-next-line
    []
  );
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
          {/* <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
        <img src={pokemon.sprites["front_default"]} style={{width:"50%", height:"auto"}} class="card-img-top" alt="sprite"></img>
          <table class="table">
            <tbody>
                {pokemon.stats.map(stat => {
                    return (<tr key={stat.stat.name.toUpperCase()}>
                        <td>{stat.stat.name}</td>
                        <td>{stat["base_stat"]}</td>
                    </tr>)
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default Entry;
