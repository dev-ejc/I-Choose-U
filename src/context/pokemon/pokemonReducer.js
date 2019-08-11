import { GET_POKEMON, SET_LOADING, SEARCH_POKEMON } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_POKEMON:
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
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
