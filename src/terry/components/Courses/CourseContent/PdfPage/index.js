import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Col, Row } from 'antd';
// import { Element } from 'react-scroll';
import { Link } from 'react-router';

import BackgroundImage from '../../../static/background_image_invert_vertical.jpg';
import Header from '../../../Share/Header';
import IconImg from '../../../static/icon.png';
import settings from '../../../../../settings';
import {
  BackgroundColor,
  BigTitle,
  Hr,
  IconImage,
  LogoContent,
  MainRow,
  MedContent,
  SmallContent,
  Title1,
  Title2,
  TitleText,
} from '../../../Share';

const Blocks = styled.div`
  padding-top: 20vh;
`;

const EachBlock = styled.div`
  width: 80%;
  height: 20vh;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;
  color: white;
  font-size: 1.5vw;
`;

const Date = styled.span`
  font-size: 0.8vw;
  padding-left: 0.25vw;
`;

const Title = styled.div`
  font-size: 2vw;
`;

const TextArea = styled.div`
  padding-left: 2.5vw;
  padding-right: 4vw;
  padding-top: 4.5vh;
`;

const ImageArea = styled.div`
  width: 100%;
  height: 20vh;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center center;
`;

const MidText = styled.div`
  font-size: 80%;
  font-style: italic;
  margin-top: 3vh;
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

class PdfPage extends Component {
  state = {
    title: '',
    image_root_url: '',
    page_size: '',
    lectures: [],
    allSlides: [],
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
          image_root_url: res.data.image_root_url,
          page_size: res.data.page_size,
        });
        this.displaySlides();
      })
      .catch(error => {
        console.log(error);
      });
  }

  displaySlides = () => {
    const { fileId } = this.props;

    const slides = [];
    for (let i = 0; i < this.state.page_size; i++) {
      slides.push(
        <a href={`${fileId}/pages/${i}`}>
          <EachPage
            alt="/page"
            className="slide-thumbnail"
            src={`${this.state.image_root_url}/page-${i}.jpeg`}
          />
        </a>
      );
    }

    this.setState({ allSlides: slides });
  };

  render() {
    const { title, year, season } = this.state;

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
              {/* {PdfContent[this.props.pdfName].pdfs.map((temp, index) => (
                <Link key={temp} to="/">
                  <EachBlock>
                    <Row>
                      <Col span={8}>
                        <ImageArea image={BackgroundImage} />
                      </Col>
                      <Col span={16}>
                        <TextArea>
                          <div>
                            material #{index} <Date>2019/02/17</Date>
                          </div>
                          <Title>{PdfContent[this.props.pdfName].name}</Title>
                        </TextArea>
                      </Col>
                    </Row>
                  </EachBlock>
                </Link>
              ))} */}
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
