import PropTypes from 'prop-types';
import React, { Component } from 'react';

import EachCourseContent from '../../components/Courses/CourseContent';

class CourseContent extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>
        <EachCourseContent
          course_id={params.course_id}
          content_id={params.content_id}
        />
      </div>
    );
  }
}

CourseContent.propTypes = {
  params: PropTypes.shape({
    course_id: PropTypes.string.isRequired,
    content_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseContent;
