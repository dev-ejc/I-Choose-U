import React, { useContext, useState } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const Form = props => {
    const pokemonContext = useContext(PokemonContext);
    const { getPokemon, randomPokemon, setCurrent } = pokemonContext;
    const [name,setName] = useState('');
    const onChange = (e) => {
        setName(e.target.value)
    }
    const onSubmit= (e) => {
        e.preventDefault()
        if(name.length > 0) {
            setCurrent(name.toLowerCase())
        } else {
            randomPokemon()
        }
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div class="form-group mx-auto mt-3">
                <input onChange={onChange} type='text' class="form-control" type="text" placeholder="Pokemon Name" />
            </div>
            <button type="submit" class="btn btn-primary form-control">{name.length > 0 ? "Submit" : "Random"}</button>
        </form>
    )
}

export default Form
