import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Comment, List } from 'antd';

const ListBlock = styled.div`
  margin-top: -3vh;
`;

const CommentList = ({ comments }) => (
  <ListBlock>
    <List
      dataSource={comments}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  </ListBlock>
);

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
