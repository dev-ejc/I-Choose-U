import { GET_POKEMON, STOP_LOADING, SET_LOADING, SET_CURRENT, SET_ERROR, CLEAR_ERROR } from "./types";

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
    case STOP_LOADING:
        return {
          ...state,
          loading: false
        };
    case SET_ERROR:
        return {...state,
                  error: {type:action.payload.type,
                    msg:action.payload.msg}  }
    case CLEAR_ERROR:
        return {...state, error: null }
    default:
      return state;
  }
};
