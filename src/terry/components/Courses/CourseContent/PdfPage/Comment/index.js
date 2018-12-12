import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import showdown from 'showdown';

import './index.css';

import settings from '../../../../../../settings';

class Comment extends Component {
  state = {
    comments: '',
    content: '', // question content
  };

  componentWillMount() {
    // if login load all comments under this page
    this.loadComment();
    // else render login only message
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.loadComment();
    }
  }

  renderCommentForm = () => {
    const { token } = localStorage;

    // check login or not
    if (token) {
      return (
        <div className="comment-form">
          <div className="comment-input-grpup">
            <textarea
              className="comment-input-textarea"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="你想問什麼呢？"
              value={this.state.content}
              onChange={e => this.handleChange('q_content', e)}
            />
          </div>
          <input
            className="comment-input-submit"
            onClick={this.handleSubmit}
            type="submit"
            value="send"
          />
        </div>
      );
    }
    return (
      <div className="comment-notice">
        <a href={`/login?redirect_url=${window.location.pathname}`}>登入</a>
        後才能留言喔！
      </div>
    );
  };

  // parse @ 被 tag 的人
  parseMetionTagInComment = content => {
    const pattern = /\B@[a-z0-9_-]+/gi;
    return content.match(pattern);
  };

  handleChange = (id, event) => {
    if (id === 'q_content') {
      this.setState({
        content: event.target.value,
        email_notify: {
          link: window.location.href,
          message_type: 'course_file_comment_reply',
          mentions: this.parseMetionTagInComment(event.target.value),
        },
      });
    }
  };

  loadComment = () => {
    // if login load all comments under this page
    const { fileId, nowPage } = this.props;
    const ins = axios.create({
      baseURL: settings.backend_url,
      timeout: 1000,
    });
    ins
      .get(`files/${fileId}/pages/${nowPage}`)
      .then(res => {
        console.log(res);
        this.setState({ comments: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = () => {
    const { fileId, nowPage } = this.props;
    const { token } = localStorage;
    const ins = axios.create({
      baseURL: settings.backend_url,
      timeout: 1000,
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    ins
      .post(`files/${fileId}/pages/${nowPage}`, {
        ...this.state,
        fileId,
        nowPage,
      })
      .then(res => {
        console.log(res);
        this.setState({ content: '' });
        this.loadComment();
      })
      .catch(error => {
        console.log(error);
      });
  };

  timeFormat = timeStr => {
    const t = moment(timeStr);
    const formatted = t.format('YYYY-MM-DD hh:mm');
    return formatted;
  };

  render() {
    let comments;
    const converter = new showdown.Converter();
    if (this.state.comments) {
      comments = this.state.comments.map(comment => (
        <div className="comment">
          <div className="comment-author">
            {comment.author.profile.nick_name} (
            {comment.author.profile.student_id} )
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(comment.content),
            }}
          />
          <div className="comment-time">
            at {this.timeFormat(comment.created_at)}
          </div>
        </div>
      ));
    }

    return (
      <div className="comments">
        <div className="comments-title">Page {this.props.nowPage} - 討論區</div>
        <div className="comment-main">
          {comments}
          {this.renderCommentForm()}
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  fileId: PropTypes.string.isRequired,
  nowPage: PropTypes.string.isRequired,
};

export default Comment;
