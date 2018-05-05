import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilmsList } from '../actions';
import Films from './Films';
import Episode from './Episode';

class App extends Component {
  componentDidMount() {
    this.props.fetchFilmsList();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>
            <Link to="/">Star Wars Films</Link>
          </h1>
          <Switch>
            <Route exact path="/" component={Films} />
            <Route path="/:id" component={Episode} />
          </Switch>
        </div>
      </BrowserRouter>
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
