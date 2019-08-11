import React, { useReducer } from 'react'
import axios from 'axios'
import PokemonContext from './pokemonContext'
import pokemonReducer from './pokemonReducer'
import { GET_POKEMON, SET_LOADING, SEARCH_POKEMON } from './types'

const PokemonState = (props) => {
    const initialState = {
        pokemon:null,
        loading:false
    }

    const [state,dispatch] = useReducer(pokemonReducer,initialState)

    const getPokemon = () => {
        setLoading()
        const abortController = new AbortController();
        const signal = abortController.signal
        const entry = Math.floor(Math.random() * Math.floor(828));
        const config = {
            signal
        }
        axios.get(`https://pokeapi.co/api/v2/pokemon/${entry}/`,config)
        .then(
            res => {
                dispatch({
                type: GET_POKEMON,
                payload: res.data
            })
            abortController.abort();
        }
        ).catch(err => {
            console.log(err.message)
            abortController.abort()
        })
    }

    const searchPokemon = name => {
        setLoading()
        const abortController = new AbortController();
        const signal = abortController.signal
        const config = {
            signal
        }
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`,config)
        .then(
            res => {
                dispatch({
                type: SEARCH_POKEMON,
                payload: res.data
            })
            abortController.abort();
        }
        ).catch(err => {
            console.log(err.message)
            abortController.abort()
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return (
        <PokemonContext.Provider
        value={{
            pokemon: state.pokemon,
            loading: state.loading,
            getPokemon,
            searchPokemon
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}
export default PokemonState
