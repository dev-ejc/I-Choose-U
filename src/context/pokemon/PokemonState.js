import React, { useReducer } from "react";
import axios from "axios";
import PokemonContext from "./pokemonContext";
import pokemonReducer from "./pokemonReducer";
import { GET_POKEMON, SET_LOADING, SET_CURRENT, SET_ERROR, CLEAR_ERROR, STOP_LOADING } from "./types";

const PokemonState = props => {
  const initialState = {
    current: "breloom",
    pokemon: null,
    error:null,
    loading: false
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const getPokemon = () => {
    setLoading();
    console.log(state.current);
    const abortController = new AbortController();
    const signal = abortController.signal;
    const config = {
      signal
    };
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${state.current.toString()}/`,
        config
      )
      .then(res => {
        dispatch({
          type: GET_POKEMON,
          payload: res.data
        });
        abortController.abort();
      })
      .catch(err => {
        setError("danger", "Pokemon does not exist"
        );
        stopLoading()
        abortController.abort();
      });
  };

  const randomPokemon = () => {
    const n = Math.floor(Math.random() * Math.floor(809));
    setCurrent(n)
  };

  const setCurrent = current => {
    dispatch({
      type: SET_CURRENT,
      payload: current
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  const stopLoading = () => {
    dispatch({
      type: STOP_LOADING
    });
  };


  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  const setError = (type, msg) => {
    dispatch({ type: SET_ERROR, payload: { type, msg } });
    setTimeout(() => {
      clearError();
    }, 5000);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemon: state.pokemon,
        loading: state.loading,
        current: state.current,
        error: state.error,
        setCurrent,
        getPokemon,
        randomPokemon
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
export default PokemonState;
