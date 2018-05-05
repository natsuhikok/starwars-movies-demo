import { combineReducers } from 'redux';
import { FETCH_FILMS_LIST } from './actions';

const films = (state = [], action) => {
  switch (action.type) {
    case FETCH_FILMS_LIST:
      console.log(action.payload.data.results);
      return action.payload.data.results;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ films });

export default rootReducer;
