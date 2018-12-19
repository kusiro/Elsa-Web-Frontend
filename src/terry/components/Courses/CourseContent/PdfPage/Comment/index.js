import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import showdown from 'showdown';
import styled from 'styled-components';
import { Comment as AntComment, Avatar, Col, Row } from 'antd';

import settings from '../../../../../../settings';

import CommentList from './CommentList';
import Editor from './Editor';

const AllCommentBlock = styled.div`
  width: 100%;
  height: 30vh;
  overflow-y: scroll;
  padding-left: 2vw;
  padding-right: 2vw;
`;

class Comment extends Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      const { comments, value } = this.state;

      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar:
              'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{value}</p>,
            datetime: moment().fromNow(),
          },
          ...comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        <Row type="flex" justify="center" align="top">
          <Col span={16}>
            <AllCommentBlock>
              <AntComment
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                }
                content={
                  <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                }
              />
              {comments.length > 0 && <CommentList comments={comments} />}
            </AllCommentBlock>
          </Col>
        </Row>
      </div>
    );
  }
}

Comment.propTypes = {
  // fileId: PropTypes.string.isRequired,
  // nowPage: PropTypes.string.isRequired,
};

export default Comment;
