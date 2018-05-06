import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEpisode, fetchEpisodePlanets, fetchEpisodeCharacters } from '../actions';

class Episode extends Component {
  componentDidMount() {
    if (this.props.episode.id !== Number(this.props.id)) this.props.fetchEpisode(this.props.id);
  }
  componentDidUpdate() {
    // fetch planets and character after load episode
    const { id, planets, planets_url, characters, characters_url } = this.props.episode;
    if (id === Number(this.props.id) && planets.length === 0 && characters.length === 0) {
      planets_url.map((url) => {
        this.props.fetchEpisodePlanets(url);
        return url;
      });
      characters_url.map((url) => {
        this.props.fetchEpisodeCharacters(url);
        return url;
      });
    }
  }

  render() {
    if (this.props.episode.id !== Number(this.props.id)) return <p>Loading...</p>;
    const {title, director, release_date, planets, planets_url, characters, characters_url } = this.props.episode;
    const renderList = (name, url) => {
      if (name.length !== url.length) return 'Loading...';
      return (
        <ul>
          {name.map(item => (<li key={item}>{item}</li>))}
        </ul>
      );
    };
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          <li>director: {director}</li>
          <li>release: {release_date}</li>
          <li>characters: {renderList(characters, characters_url)}</li>
          <li>planets: {renderList(planets, planets_url)}</li>
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ episode }, props) => ({ episode, id: props.match.params.id }),
  dispatch => bindActionCreators({ fetchEpisode, fetchEpisodePlanets, fetchEpisodeCharacters }, dispatch),
)(Episode);
