import https from 'https';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';

import settings from '../settings';

import Management from './Management';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { user_id } = localStorage;
    const { token } = localStorage;
    const {
      location: { pathname: path },
    } = this.props;

    if (token) {
      const ins = axios.create({
        baseURL: settings.backend_url,
        timeout: 1000,
        headers: {
          Authorization: `JWT ${token}`,
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      });

      ins
        .get(`user/${user_id}`)
        .then(res => {
          console.log(res);
          // this.setState({ user: res.data, logIn: true });
          // if user not in root_user_types redirect to '/'
          if (
            path.includes('management') &&
            !settings.root_user_types.includes(res.data.profile.studentType)
          ) {
            window.location = '/';
          }
        })
        .catch(error => {
          console.log(error);
          // this.setState({ logIn: false });
        });
    } else if (path.includes('management')) {
      // if user not in root_user_types redirect to '/'
      window.location = '/';
    }
  }

  render() {
    const path = this.props.location.pathname;

    return (
      <div>
        {path.includes('management') && <Management />}
        {this.props.children}
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Template;
