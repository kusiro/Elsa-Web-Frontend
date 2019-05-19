import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AllPdfPage from '../components/Courses/CourseContent/PdfPage';

class PdfPage extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>
        <AllPdfPage
          courseId={params.course_id}
          contentId={params.content_id}
          fileId={params.file_id}
        />
      </div>
    );
  }
}

PdfPage.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PdfPage;
