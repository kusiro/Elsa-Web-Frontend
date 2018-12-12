import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Col, Row } from 'antd';
// import { Element } from 'react-scroll';

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

const Blocks = styled.div`
  padding-top: 20vh;
`;

const EachPage = styled.img`
  width: 10vw;
  margin-right: 1vw;
`;

const PagesBlock = styled.div`
  margin-top: 5vh;
  height: 30%;
  overflow-y: scroll;
`;

const ImageShow = styled.img`
  width: 60%;
  height: 50%;
  margin: auto;
`;

const LeftArrow = styled.button`
  width: 5vw;
`;

const RightArrow = styled.button`
  width: 5vw;
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
    const { title, year, season, imageRootUrl, current } = this.state;

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
                  <PagesBlock span={24}>{this.state.allSlides}</PagesBlock>
                </Row>
              </SmallContent>
            </MainRow>
          </BackgroundColor>
        </Col>
        <Col span={15}>
          <BackgroundColor color="white">
            <Header fontColor="#9b9b9b" />
            <Blocks>
              <LeftArrow
                onClick={() => this.setState({ current: current - 1 })}
              >
                Left
              </LeftArrow>
              <ImageShow src={`${imageRootUrl}/page-${current}.jpeg`} />
              <RightArrow
                onClick={() => this.setState({ current: current + 1 })}
              >
                Right
              </RightArrow>
            </Blocks>
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
