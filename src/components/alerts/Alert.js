import React, { useContext } from 'react'
import PokemonContext from '../../context/pokemon/pokemonContext'

const Alert = props => {
    const pokemonContext = useContext(PokemonContext)
    const { error } = pokemonContext
    return (error !== null && (
        <div className="alert alert-danger mt-2" role="alert">
            {error.msg}
        </div>
      )
    ); 
};

export default Alert