import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Gallery from '../../components/Gallery';
import SingleProjectPage from '../../components/SingleProjectPage';

class Project extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>
        <SingleProjectPage name={params.name} />
      </div>
    );
  }
}

Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Project;
