import { combineReducers } from 'redux';
import { FETCH_FILMS_LIST, FETCH_EPISODE, FETCH_EPISODE_PLANETS, FETCH_EPISODE_CHARACTERS } from './actions';

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
        planets: [],
        characters: [],
      };
    case FETCH_EPISODE_PLANETS:
      return Object.assign({}, state, {
        planets: state.planets.concat(action.payload.data.name),
      });
    case FETCH_EPISODE_CHARACTERS:
      return Object.assign({}, state, {
        characters: state.characters.concat(action.payload.data.name),
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({ films, episode });

export default rootReducer;
