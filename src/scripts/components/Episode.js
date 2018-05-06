import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEpisode, fetchEpisodePlanets, fetchEpisodeCharacters } from '../actions';

class Episode extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchEpisode(this.props.id);
  }
  componentDidUpdate() {
    // fetch planets and character after load episode
    const { id, planets, planets_url, characters, characters_url } = this.props.episode;
    if (id === Number(this.props.id)) {
      if (planets.length === 0) {
        planets_url.map((url) => {
          this.props.fetchEpisodePlanets(url);
          return url;
        });
      }
      if (characters.length === 0) {
        characters_url.map((url) => {
          this.props.fetchEpisodeCharacters(url);
          return url;
        });
      }
    }
  }
  render() {
    if (this.props.episode.id !== Number(this.props.id)) return <p>Loading...</p>;
    
    return (
      <div>
        <h2>{this.props.episode.title}</h2>
        <ul>
          <li>director: {this.props.episode.director}</li>
          <li>release: {this.props.episode.release_date}</li>
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ episode }, props) => ({ episode, id: props.match.params.id }),
  dispatch => bindActionCreators({ fetchEpisode, fetchEpisodePlanets, fetchEpisodeCharacters }, dispatch),
)(Episode);
