import React, { useReducer, createContext, useEffect } from 'react';
import axios from '../fetch';
import { URLS } from '../constants';
import {
  GET_ACTION_MOVIES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAIL,
  GET_NETFLIX_ORIGINALS,
  GET_SEARCH_MOVIE,
  GET_SEARCH_MOVIE_FAIL,
  GET_SEARCH_MOVIE_SUCCESS,
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

const MEDIA_TYPE = {
  tv: 'tv',
  movie: 'movie',
};

const actionGenereByCode = {
  28: GET_ACTION_MOVIES,
  35: GET_COMEDY_MOVIES,
  27: GET_HORROR_MOVIES,
  10749: GET_ROMANCE_MOVIES,
  99: GET_DOCUMENTARIES,
};

export const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {}, [state]);

  const fetchMovieDetails = async (mediaType, mediaId) => {
    try {
      dispatch({ type: GET_MOVIE_DETAILS });
      let urlPath;
      if (mediaType === MEDIA_TYPE.movie) {
        urlPath = `/movie/${mediaId}?api_key=${apiKey}`;
      }
      if (mediaType === MEDIA_TYPE.tv) {
        urlPath = `/tv/${mediaId}?api_key=${apiKey}`;
      }

      const request = await axios.get(urlPath);
      dispatch({
        type: GET_MOVIE_DETAILS_SUCCESS,
        payload: request,
      });
    } catch (error) {
      dispatch({ type: GET_MOVIE_DETAILS_FAIL });
    }
  };

  const fetchSearchMovie = async searchTerm => {
    try {
      dispatch({ type: GET_SEARCH_MOVIE });
      const request = await axios.get(URLS.urlSearch(apiKey, searchTerm));
      dispatch({
        type: GET_SEARCH_MOVIE_SUCCESS,
        payload: request.data.results,
      });
    } catch (error) {
      dispatch({ type: GET_SEARCH_MOVIE_FAIL });
    }
  };

  const fetchNetflixOriginals = async () => {
    try {
      const request = await axios.get(URLS.urlDiscover(apiKey, '123'));
      dispatch({
        type: GET_NETFLIX_ORIGINALS,
        payload: request.data.results,
      });
    } catch (error) {
      dispatch({ type: GET_SEARCH_MOVIE_FAIL });
    }
  };

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

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        fetchMovieDetails,
        fetchSearchMovie,
        fetchNetflixOriginals,
        fetchTrending,
        fetchTopRated,
        fetchByGenre,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
