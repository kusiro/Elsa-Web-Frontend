import https from 'https';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';

import settings from '../../../settings';
import './Edit.css';

class courseEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  componentWillMount() {
    const {
      params: { course_id },
    } = this.props;
    const { token } = localStorage;
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
      .get(`courses/${course_id}`)
      .then(res => {
        console.log(res);
        delete res.data.contents;
        delete res.data.id;
        this.setState(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = (id, event) => {
    if (id === 'title') {
      this.setState({ title: event.target.value });
    } else if (id === 'description') {
      this.setState({ description: event.target.value });
    }
  };

  handleSubmit = event => {
    this.checkForm(event);
    const {
      params: { course_id },
    } = this.props;
    const { token } = localStorage;
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
      .put(`courses/${course_id}`, this.state)
      .then(res => {
        console.log(res);
        window.location.href = `/management/courses/${course_id}`;
      })
      .catch(error => {
        alert('請確認資料格式正確!');
        console.log(error);
      });
  };

  checkForm = () => {
    let reqCol = '';
    if (!this.state.title) {
      reqCol += 'title ';
    }
    if (!this.state.description) {
      reqCol += 'description ';
    }
    if (reqCol) {
      reqCol += 'is required.';
      window.alert(reqCol);
    }
  };

  render() {
    return (
      <div className="course-new-bg">
        <div className="course-new-main">
          <div className="course-new-title">Update A Course</div>
          <div className="course-new-form">
            <div className="input-label">title</div>
            <input
              className="form-input"
              type="text"
              value={this.state.title}
              onChange={e => this.handleChange('title', e)}
            />
            <div className="input-label">description</div>
            <textarea
              className="input-textarea"
              value={this.state.description}
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={e => this.handleChange('description', e)}
            />
            <input
              className="course-new-submit-btn"
              type="submit"
              onClick={this.handleSubmit}
              value="更新"
            />
          </div>
        </div>
      </div>
    );
  }
}

courseEdit.propTypes = {
  params: PropTypes.shape({
    course_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default courseEdit;
