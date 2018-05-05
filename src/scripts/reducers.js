import { combineReducers } from 'redux';
import { FETCH_FILMS_LIST } from './actions';

const films = (state = [], action) => {
  switch (action.type) {
    case FETCH_FILMS_LIST:
      return action.payload.data.results.map(episode => (
        {
          id: episode.episode_id,
          title: episode.title,
          director: episode.director,
          release_date: episode.release_date,
          characters_url: episode.characters,
          planets_url: episode.planets,
        }
      ));
    default:
      return state;
  }
};

const rootReducer = combineReducers({ films });

export default rootReducer;
