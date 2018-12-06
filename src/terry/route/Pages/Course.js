import PropTypes from 'prop-types';
import React, { Component } from 'react';

import EachCourse from '../../components/Courses/Course';

class Course extends Component {
  render() {
    const {
      match: { params },
    } = this.props;

    return (
      <div>
        <EachCourse courseName={params.name} />
      </div>
    );
  }
}

Course.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Course;
