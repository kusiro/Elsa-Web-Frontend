import https from 'https';

import Dropzone from 'react-dropzone';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';

import settings from '../../../../../settings';

import './Edit.css';

class lectureEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      files: [],
    };
  }

  componentWillMount() {
    const {
      params: { course_id, content_id, lecture_id },
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
      .get(`courses/${course_id}/contents/${content_id}/lectures/${lecture_id}`)
      .then(res => {
        console.log(res);
        this.setState(res.data);
      })
      .catch(error => {
        console.log(error);
      });
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

  handleSubmit = () => {
    const {
      params: { course_id, content_id, lecture_id },
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
      .put(
        `courses/${course_id}/contents/${content_id}/lectures/${lecture_id}`,
        this.state
      )
      .then(res => {
        console.log(res);
        window.location.href = `/management/courses/${course_id}/contents/${content_id}`;
      })
      .catch(error => {
        alert('請確認資料格式正確!');
        console.log(error);
      });
  };

  handleChange = (id, event) => {
    if (id === 'title') {
      this.setState({ title: event.target.value });
    } else if (id === 'description') {
      this.setState({ description: event.target.value });
    }
  };

  delFile(index) {
    let file_id;
    const { files } = this.state;
    // delete file from backend
    if (files[index].id) {
      file_id = files[index].id;
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
        .delete(`files/${file_id}`)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
    // delete file from react state
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
          <FontAwesome className="lecture-new-file-icon" name="file-o" />
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
              value={this.state.title}
              className="content-new-input"
              type="text"
              onChange={e => this.handleChange('title', e)}
            />
            <div className="input-label">description</div>
            <textarea
              value={this.state.description}
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

lectureEdit.propTypes = {
  params: PropTypes.shape({
    course_id: PropTypes.string.isRequired,
    content_id: PropTypes.string.isRequired,
    lecture_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default lectureEdit;
