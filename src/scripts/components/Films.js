import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Films = ({ films }) => {
  // wait for loading
  if (films.length === 0) return <p>Loading...</p>;

  // after load
  const handleOnClick = () => {
    console.log('go to episode page');
  };

  const renderFilmListItem = episode => (
    <tr role="gridcell" onClick={handleOnClick} key={episode.id}>
      <td>{episode.title}</td>
      <td>{episode.director}</td>
      <td>{episode.release_date}</td>
    </tr>
  );
  return (
    <table role="grid" className="table table-hover table-responsive-sm table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>Title</th>
          <th>director</th>
          <th>release date</th>
        </tr>
      </thead>
      <tbody>
        {films.map((episode => renderFilmListItem(episode)))}
      </tbody>
    </table>
  );
};

Films.PropType = {
  films: PropTypes.array.isRequired,
};

export default connect(
  ({ films }) => ({ films }),
)(Films);
