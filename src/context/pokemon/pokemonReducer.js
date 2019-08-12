import { GET_POKEMON, SET_LOADING, SET_CURRENT } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
