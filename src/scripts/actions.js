import axios from 'axios';

const ROOT_URL = 'https://swapi.co/api/';

export const FETCH_FILMS_LIST = 'FETCH_FILMS_LIST';

export const fetchFilmsList = () => {
  const url = `${ROOT_URL}films/`;
  const request = axios.get(url);
  return {
    type: FETCH_FILMS_LIST,
    payload: request,
  };
};

