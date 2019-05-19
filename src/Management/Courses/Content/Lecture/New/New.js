import https from 'https';

import Dropzone from 'react-dropzone';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';

import settings from '../../../../../settings';
import './New.css';

class lectureNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      files: [],
    };
  }

  onDrop(file) {
    const { files } = this.state;
    const reader = new FileReader();
    const rea = this;
    reader.onload = () => {
      files.push({
        title: file[0].name,
        preview: file[0].preview,
        size: file[0].size,
        type: file[0].type,
        data: reader.result,
      });
      rea.setState({
        files,
      });
    };
    reader.readAsDataURL(file[0]);
  }

  handleChange = (id, event) => {
    if (id === 'title') {
      this.setState({ title: event.target.value });
    } else if (id === 'description') {
      this.setState({ description: event.target.value });
    }
  };

  handleSubmit = () => {
    const {
      params: { course_id, content_id },
    } = this.props;
    const { token } = localStorage;
    const ins = axios.create({
      baseURL: settings.backend_url,
      timeout: 10000,
      headers: {
        Authorization: `JWT ${token}`,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    ins
      .post(`courses/${course_id}/contents/${content_id}/lectures`, this.state)
      .then(res => {
        console.log(res);
        window.location.href = `/management/courses/${course_id}/contents/${content_id}`;
      })
      .catch(error => {
        alert('請確認資料格式正確!');
        console.log(error);
      });
  };

  delFile(index) {
    const { files } = this.state;
    files.splice(index, 1);
    this.setState({
      files,
    });
  }

  renderFileInfo() {
    return this.state.files.map((f, index) => (
      <div key={index} className="lecture-new-file-block">
        <div className="lecture-new-file-icon-group">
          <FontAwesome
            className="lecture-new-file-delete-icon"
            name="times-circle-o"
            onClick={e => this.delFile(index, e)}
          />
          <FontAwesome
            className="lecture-new-file-icon"
            name="file-o"
            onClick={e => this.delFile(index, e)}
          />
        </div>
        <div className="lecture-new-file-info">{f.title}</div>
      </div>
    ));
  }

  render() {
    return (
      <div className="lecture-new-bg">
        <div className="lecture-new-main">
          <div className="lecture-new-title">New A Lecture</div>
          <div className="lecture-new-form">
            <div className="input-label">title</div>
            <input
              className="content-new-input"
              type="text"
              onChange={e => this.handleChange('title', e)}
            />
            <div className="input-label">description</div>
            <textarea
              className="input-textarea"
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={e => this.handleChange('description', e)}
            />
            {/* TODO: 要改成每個 Lecture 只有一個 File */}
            <div className="input-label">
              ( One File Please ! ) Upload File: by dropping file into the block
              or clicking button
            </div>
            <div className="lecture-new-upload">
              <Dropzone
                className="lecture-new-upload-area-main"
                onDrop={this.onDrop.bind(this)}
              />
              <Dropzone
                className="lecture-new-upload-area-icon"
                onDrop={this.onDrop.bind(this)}
              />
              <div className="lecture-new-uploaded-files">
                {this.renderFileInfo()}
              </div>
            </div>
            <div>
              <input
                onClick={this.handleSubmit}
                className="lecture-new-submit-btn"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

lectureNew.propTypes = {
  params: PropTypes.shape({
    course_id: PropTypes.string.isRequired,
    content_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default lectureNew;
