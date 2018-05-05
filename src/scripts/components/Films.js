import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Films extends Component {
  handleOnClick(id) {
    this.props.history.push(`/${id}`);
  }

  renderFilmListItem(episode) {
    return (
      <tr role="gridcell" onClick={() => this.handleOnClick(episode.id)} key={episode.id}>
        <td>{episode.title}</td>
        <td>{episode.director}</td>
        <td>{episode.release_date}</td>
      </tr>
    );
  }

  render() {
    // wait for loading
    if (this.props.films.length === 0) return <p>Loading...</p>;
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
          {this.props.films.map((episode => this.renderFilmListItem(episode)))}
        </tbody>
      </table>
    );
  }
}

Films.PropType = {
  films: PropTypes.array.isRequired,
  history: PropTypes.array.isRequired,
};

export default withRouter(connect(({ films }) => ({ films }))(Films));
