import React, { useReducer, createContext, useEffect } from 'react';
import axios from '../fetch';
import { GENRE_CODE } from '../constants';
import {
  GET_ACTION_MOVIES,
  GET_SEARCH_MOVIE_FAIL,
  GET_TOP_RATED,
  GET_TRENDING,
  GET_COMEDY_MOVIES,
  GET_HORROR_MOVIES,
  GET_ROMANCE_MOVIES,
  GET_DOCUMENTARIES,
} from './actions';

import initialState from './initialState';
import reducer from './reducer';

export const AppContext = createContext();

const apiKey = process.env.REACT_APP_API_KEY;

const actionGenereByCode = {
  28: GET_ACTION_MOVIES,
  35: GET_COMEDY_MOVIES,
  27: GET_HORROR_MOVIES,
  10749: GET_ROMANCE_MOVIES,
  99: GET_DOCUMENTARIES,
};

export const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const sections = [
    {
      title: 'Trending',
      movies: state.trending,
    },
    {
      title: 'Top Rated',
      movies: state.topRated,
    },
    {
      title: 'Action Movies',
      movies: state.action,
    },
    {
      title: 'Comedy',
      movies: state.comedy,
    },
    {
      title: 'Horror Movies',
      movies: state.horror,
    },
    {
      title: 'Romance',
      movies: state.romance,
    },
    {
      title: 'Documentaries',
      movies: state.documentary,
    },
  ];

  const fetchTrending = async () => {
    try {
      const request = await axios.get(
        `/trending/all/week?api_key=${apiKey}&language=en-US`
      );
      dispatch({
        type: GET_TRENDING,
        payload: request.data.results,
      });
    } catch (error) {
      dispatch({ type: GET_SEARCH_MOVIE_FAIL });
    }
  };

  const fetchTopRated = async () => {
    try {
      const request = await axios.get(
        `/movie/top_rated?api_key=${apiKey}&language=en-US`
      );
      dispatch({
        type: GET_TOP_RATED,
        payload: request.data.results,
      });
    } catch (error) {
      dispatch({ type: GET_SEARCH_MOVIE_FAIL });
    }
  };

  const fetchByGenre = async genre => {
    try {
      const request = await axios.get(
        `/discover/movie?api_key=${apiKey}&with_genres=${genre}`
      );
      dispatch({
        type: actionGenereByCode[genre],
        payload: request.data.results,
      });
    } catch (error) {
      dispatch({ type: GET_SEARCH_MOVIE_FAIL });
    }
  };

  useEffect(() => {
    fetchTrending();
    fetchTopRated();
    fetchByGenre(GENRE_CODE.Action);
    fetchByGenre(GENRE_CODE.Comedy);
    fetchByGenre(GENRE_CODE.Documentaries);
    fetchByGenre(GENRE_CODE.Horror);
    fetchByGenre(GENRE_CODE.Romance);
  }, [dispatch]);

  return (
    <AppContext.Provider value={[state, dispatch, sections]}>
      {props.children}
    </AppContext.Provider>
  );
};
