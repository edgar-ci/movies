import {
  GET_ACTION_MOVIES,
  GET_COMEDY_MOVIES,
  GET_DOCUMENTARIES,
  GET_HORROR_MOVIES,
  GET_ROMANCE_MOVIES,
  GET_SEARCH_MOVIE_FAIL,
  GET_TOP_RATED,
  GET_TRENDING,
} from './actions';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ACTION_MOVIES:
      return { ...state, action: payload };
    case GET_COMEDY_MOVIES:
      return { ...state, comedy: payload };
    case GET_DOCUMENTARIES:
      return { ...state, documentary: payload };
    case GET_HORROR_MOVIES:
      return { ...state, horror: payload };
    case GET_ROMANCE_MOVIES:
      return { ...state, romance: payload };
    case GET_SEARCH_MOVIE_FAIL:
      return { ...state, isLoading: false };
    case GET_TOP_RATED:
      return { ...state, topRated: payload };
    case GET_TRENDING:
      return { ...state, trending: payload };
    default:
      throw new Error();
  }
};

export default reducer;
