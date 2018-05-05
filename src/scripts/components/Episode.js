import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Episode = ({ films, id }) => {
  console.log(id);
  return (
    <h2>{id}</h2>
  );
};

Episode.PropType = {};

export default connect(
  ({ films }, props) => ({ films, id: props.match.params.id }),
)(Episode);
