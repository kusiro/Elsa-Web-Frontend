import https from 'https';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

import settings from '../../../../settings';
import '../../../../../node_modules/sweetalert2/dist/sweetalert2.css';

import './Show.css';

class contentShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      season: '',
      course_no: '',
      location: '',
      lectures: [],
    };
  }

  componentWillMount() {
    const {
      params: { course_id, content_id },
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
      .get(`courses/${course_id}/contents/${content_id}`)
      .then(res => {
        console.log(res);
        this.setState(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteContent() {
    const {
      params: { course_id, content_id },
    } = this.props;
    swal({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(() => {
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
        .delete(`courses/${course_id}/contents/${content_id}`)
        .then(res => {
          console.log(res);
          swal({
            title: 'Deleted!',
            text: 'Your content has been deleted.',
            type: 'success',
          }).then(() => {
            window.location.href = `/management/courses/${course_id}`;
          });
        })
        .catch(error => {
          console.log(error);
          swal('Deleted Fail', 'Your content has not been deleted.', 'error');
        });
    });
  }

  renderLectures() {
    const {
      params: { course_id, content_id },
    } = this.props;
    return this.state.lectures.map(item => (
      <div className="content-show-content" key={item.id}>
        <a
          className="content-show-content-link"
          href={`/management/courses/${course_id}/contents/${content_id}/lectures/${
            item.id
          }`}
        >
          <div>Lecture {item.lecture_number}</div>
          <div>title: {item.title}</div>
          <div>description: {item.description}</div>
          <div>......</div>
        </a>
      </div>
    ));
  }

  render() {
    const {
      params: { course_id, content_id },
    } = this.props;
    return (
      <div className="content-show-bg">
        <div className="content-show-main">
          <div className="content-show-title">
            <div className="content-show-title-main">
              {this.state.year} - {this.state.season}
            </div>
            <div className="content-show-btn-group">
              <a
                href="#"
                onClick={e => this.deleteContent(e)}
                className="content-show-delete-btn"
              >
                delete
              </a>
              <a
                href={`./${content_id}/edit`}
                className="content-show-edit-btn"
              >
                edit
              </a>
            </div>
          </div>
          <div className="content-show-main-info">
            <div>course number: {this.state.course_no}</div>
            <div>time: {this.state.time}</div>
            <div>location: {this.state.location}</div>
          </div>
          <div className="content-btn-group">
            <a
              href={`/management/courses/${course_id}/contents/${content_id}/lectures/new`}
              className="content-show-link-url"
            >
              Add Lecture
            </a>
          </div>
          <div className="content-show-lectures">{this.renderLectures()}</div>
        </div>
      </div>
    );
  }
}

contentShow.propTypes = {
  params: PropTypes.shape({
    course_id: PropTypes.string.isRequired,
    content_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default contentShow;
