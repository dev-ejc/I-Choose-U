import React, { useContext, useState } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const Form = props => {
    const pokemonContext = useContext(PokemonContext);
    const { randomPokemon, setCurrent } = pokemonContext;
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
        <form className="form-inline mx-auto" onSubmit={onSubmit}>
            <input onChange={onChange} type='text' className="form-control" type="text" placeholder="Search" />
            <button type="submit" class="btn btn-primary btn-block">{name.length > 0 ? "Submit" : "Random"}</button>
        </form>
    )
}

export default Form
