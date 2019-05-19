import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';

import settings from '../../../settings';
// import './show.css';

class userShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  componentWillMount() {
    // initial data
    const {
      params: { user_id },
    } = this.props;
    const { token } = localStorage;
    const ins = axios.create({
      baseURL: settings.backend_url,
      timeout: 1000,
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    ins
      .get(`user/${user_id}`)
      .then(res => {
        console.log(res);
        this.setState({ username: res.data.username });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <div>username: {this.state.username}</div>;
  }
}

userShow.propTypes = {
  params: PropTypes.shape({
    user_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default userShow;
