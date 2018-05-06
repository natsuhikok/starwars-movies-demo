import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilmsList } from '../actions';

class Films extends Component {
  componentDidMount() {
    this.props.fetchFilmsList();
  }
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

export default withRouter(connect(
  ({ films }) => ({ films }),
  dispatch => bindActionCreators({ fetchFilmsList }, dispatch),
)(Films));
