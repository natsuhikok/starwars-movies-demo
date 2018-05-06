import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEpisode } from '../actions';

class Episode extends Component {
  componentDidMount() {
    this.props.fetchEpisode(this.props.id);
  }

  render() {
    // wait for loading
    if (
      !Object.keys(this.props.episode).length
      ||
      this.props.episode.id !== Number(this.props.id)
    ) return <p>Loading...</p>;

    return (
      <div>
        <h2>{this.props.episode.title}</h2>
        <ul>
          <li>directer: {this.props.episode.directer}</li>
          <li>release: {this.props.episode.release_date}</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(connect(
  ({ episode }, props) => ({ episode, id: props.match.params.id }),
  dispatch => bindActionCreators({ fetchEpisode }, dispatch),
)(Episode));
