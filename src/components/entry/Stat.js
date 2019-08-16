import React, { useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const Stat = () => {
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
          <div class="container m-2">
              <table class="table">
                <tbody>
                    {pokemon.stats.map(stat => {
                        return (<tr key={stat.stat.name.toUpperCase()}>
                            <td>{stat.stat.name.replace("-", " ")[0]}</td>
                            <td>{stat["base_stat"]}</td>
                        </tr>)
                    })}
                </tbody>
              </table>
            </div>
        );
      }
}

export default Stat
