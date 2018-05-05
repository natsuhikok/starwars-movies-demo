import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilmsList } from '../actions';
import Films from './Films';

class App extends Component {
  componentDidMount() {
    this.props.fetchFilmsList();
  }
  render() {
    return (
      <div className="container">
        <h1>Star Wars Films</h1>
        <Films />
      </div>
    );
  }
}

App.propTypes = {
  fetchFilmsList: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => bindActionCreators({ fetchFilmsList }, dispatch),
)(App);
