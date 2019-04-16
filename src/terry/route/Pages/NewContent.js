import PropTypes from 'prop-types';
import React, { Component } from 'react';

import EachNewContent from '../../components/News/NewContent';

class NewContent extends Component {
  render() {
    const { params } = this.props;

    return (
      <div>
        <EachNewContent newsId={params.news_id} />
      </div>
    );
  }
}

NewContent.propTypes = {
  params: PropTypes.shape({
    newsId: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewContent;
