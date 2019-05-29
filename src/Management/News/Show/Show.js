import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

import RichTextEditor from '../../../components/Share/RichTextEditor';
import settings from '../../../settings';
import '../../../../node_modules/sweetalert2/dist/sweetalert2.css';
import './Show.css';

class newsShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  componentWillMount() {
    const {
      params: { news_id },
    } = this.props;
    const { token } = localStorage;
    const ins = axios.create({
      baseURL: settings.backend_url,
      timeout: 1000,
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    ins
      .get(`news/${news_id}`)
      .then(res => {
        console.log(res);
        this.setState(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePublication = () => {
    const {
      params: { news_id },
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
      });

      ins
        .delete(`news/${news_id}`)
        .then(res => {
          console.log(res);
          swal({
            title: 'Deleted!',
            text: 'Your content has been deleted.',
            type: 'success',
          }).then(() => {
            window.location.href = '/management/news';
          });
        })
        .catch(error => {
          console.log(error);
          swal(
            'Deleted Fail',
            'Your publication has not been deleted.',
            'error'
          );
        });
    });
  };

  render() {
    const {
      params: { news_id },
    } = this.props;

    return (
      <div className="content-show-bg">
        <div className="news-show-main">
          <div className="content-show-title">
            <div className="content-show-title-main">{this.state.title}</div>
            <div className="content-show-btn-group">
              <a
                href="#"
                onClick={e => this.deletePublication(e)}
                className="content-show-delete-btn"
              >
                delete
              </a>
              <a href={`./${news_id}/edit`} className="content-show-edit-btn">
                edit
              </a>
            </div>
          </div>
          <div className="news-show-outpage-preview">
            <div className="content-show-main-info">
              <div>description : {this.state.description}</div>
              <div>image url : {this.state.image_url}</div>
            </div>
          </div>
          <div className="news-show-mainpage-preview">
            <div className="news-show-mainpage-preview-content">
              <h3>Content</h3>
              <RichTextEditor content={this.state.content} readOnly />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

newsShow.propTypes = {
  params: PropTypes.shape({
    news_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default newsShow;
