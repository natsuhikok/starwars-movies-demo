import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Films = ({ films }) => {
  // wait for loading
  if (films.length === 0) return <p>Loading...</p>;

  // after load
  const renderFilmListItem = film => (
    <li key={film.episode_id}>{film.title}</li>
  );
  return (
    <ul>
      {films.map((film => renderFilmListItem(film)))}
    </ul>
  );
};

Films.PropType = {
  films: PropTypes.array.isRequired,
};

export default connect(
  ({ films }) => ({ films }),
)(Films);
