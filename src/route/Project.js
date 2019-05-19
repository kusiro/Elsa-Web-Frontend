import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SingleProjectPage from '../components/SingleProjectPage';

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
  params: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
