import axios from 'axios';

const ROOT_URL = 'https://swapi.co/api/';

export const FETCH_FILMS_LIST = 'FETCH_FILMS_LIST';
export const FETCH_EPISODE = 'FETCH_EPISODE';
export const FETCH_EPISODE_PLANETS = 'FETCH_EPISODE_PLANETS';
export const FETCH_EPISODE_CHARACTERS = 'FETCH_EPISODE_CHARACTERS';

export const fetchFilmsList = () => {
  const url = `${ROOT_URL}films/`;
  const request = axios.get(url);
  return {
    type: FETCH_FILMS_LIST,
    payload: request,
  };
};

export const fetchEpisode = (id) => {
  const url = `${ROOT_URL}films/${id}`;
  const request = axios.get(url);
  return {
    type: FETCH_EPISODE,
    payload: request,
  };
};

export const fetchEpisodePlanets = (url) => {
  const request = axios.get(url);
  return {
    type: FETCH_EPISODE_PLANETS,
    payload: request,
  };
};

export const fetchEpisodeCharacters = (url) => {
  const request = axios.get(url);
  return {
    type: FETCH_EPISODE_CHARACTERS,
    payload: request,
  };
};

