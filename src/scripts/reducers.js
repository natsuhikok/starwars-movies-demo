import { combineReducers } from 'redux';
import { FETCH_FILMS_LIST, FETCH_EPISODE } from './actions';

const films = (state = [], action) => {
  switch (action.type) {
    case FETCH_FILMS_LIST:
      return action.payload.data.results.map(episode => (
        {
          id: Number(episode.url.split('/')[episode.url.split('/').length - 2]),
          title: episode.title,
          director: episode.director,
          release_date: episode.release_date,
        }
      ));
    default:
      return state;
  }
};

const episode = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EPISODE:
      return {
        id: Number(action.payload.data.url.split('/')[action.payload.data.url.split('/').length - 2]),
        title: action.payload.data.title,
        director: action.payload.data.director,
        release_date: action.payload.data.release_date,
        characters_url: action.payload.data.characters,
        planets_url: action.payload.data.planets,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ films, episode });

export default rootReducer;
