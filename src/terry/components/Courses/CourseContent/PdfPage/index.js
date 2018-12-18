import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Header from '../../../Share/Header';
import IconImg from '../../../static/icon.png';
import settings from '../../../../../settings';
import {
  BackgroundColor,
  Hr,
  IconImage,
  LogoContent,
  MainRow,
  SmallContent,
  Title1,
  Title2,
} from '../../../Share';

import Comment from './Comment';

const Blocks = styled.div`
  padding-top: 15vh;
`;

const EachPage = styled.img`
  width: 45%;
`;

const PagesBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 5vh;
  margin-left: -1vw;
  padding-left: 0.5vw;
  padding-top: 0.5vh;
  height: 60vh;
  overflow-y: scroll;
`;

const ImageShow = styled.img`
  width: 100%;
  height: 50%;
  margin: auto;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  margin-left: 40%;
  cursor: pointer;
`;

const CountPages = styled.div`
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 1vh;
`;

class PdfPage extends Component {
  state = {
    title: '',
    imageRootUrl: '',
    page_size: '',
    allSlides: [],
    current: 0,
  };

  componentDidMount() {
    const { courseId, contentId, fileId } = this.props;

    const ins = axios.create({
      baseURL: settings.backend_url,
      timeout: 1000,
    });

    ins
      .get(`courses/${courseId}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          title: res.data.title,
        });
      })
      .catch(error => {
        console.log(error);
      });

    ins
      .get(`courses/${courseId}/contents/${contentId}`)
      .then(res => {
        console.log(res.data);
        this.setState(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    ins
      .get(`files/${fileId}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          imageRootUrl: res.data.image_root_url,
          page_size: res.data.page_size,
        });
        this.displaySlides();
      })
      .catch(error => {
        console.log(error);
      });
  }

  displaySlides = () => {
    const slides = [];
    for (let i = 0; i < this.state.page_size; i++) {
      slides.push(
        <EachPage
          alt="/page"
          className="slide-thumbnail"
          src={`${this.state.imageRootUrl}/page-${i}.jpeg`}
        />
      );
    }

    this.setState({ allSlides: slides });
  };

  render() {
    const {
      title,
      year,
      season,
      imageRootUrl,
      current,
      allSlides,
    } = this.state;

    return (
      <Row>
        <Col span={9}>
          <BackgroundColor color="#f8d188">
            <MainRow type="flex" justify="center">
              <LogoContent span={18}>
                <Row type="flex" justify="start" align="middle" gutter={8}>
                  <Col>
                    <IconImage src={IconImg} />
                  </Col>
                  <Col>
                    <Title1>NTHU</Title1>
                    <Title2>ELSA</Title2>
                  </Col>
                </Row>
              </LogoContent>
              <SmallContent span={18} color="#8c8c8c">
                <Row type="flex" justify="start" align="bottom">
                  <Col span={6}>
                    <Hr color="#8c8c8c" />
                  </Col>
                  <Col span={12} offset={1}>
                    Home / Courses / {year} {season} - {title}
                  </Col>
                  <PagesBlock span={24}>{allSlides}</PagesBlock>
                </Row>
              </SmallContent>
            </MainRow>
          </BackgroundColor>
        </Col>
        <Col span={15}>
          <BackgroundColor color="white">
            <Header fontColor="#9b9b9b" />
            <Blocks>
              <Row type="flex" justify="center" align="middle">
                <Col span={4}>
                  <ArrowIcon
                    icon={faAngleLeft}
                    size="5x"
                    onClick={() => this.setState({ current: current - 1 })}
                  />
                </Col>
                <Col span={16}>
                  <ImageShow src={`${imageRootUrl}/page-${current}.jpeg`} />
                </Col>
                <Col span={4}>
                  <ArrowIcon
                    icon={faAngleRight}
                    size="5x"
                    onClick={() => this.setState({ current: current + 1 })}
                  />
                </Col>
              </Row>
            </Blocks>
            <Row type="flex" justify="center" align="middle">
              <Col span={8}>
                <CountPages>
                  Pages {current + 1}/{allSlides.length}
                </CountPages>
              </Col>
            </Row>
            <Comment fileId={this.props.fileId} nowPage={current} />
          </BackgroundColor>
        </Col>
      </Row>
    );
  }
}

PdfPage.propTypes = {
  contentId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
  fileId: PropTypes.string.isRequired,
};

export default PdfPage;
