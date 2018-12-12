import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import BackgroundImage from '../../static/background_image_invert_vertical.jpg';
import Header from '../../Share/Header';
import IconImg from '../../static/icon.png';
import settings from '../../../../settings';
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
} from '../../Share';

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
  line-height: 120%;
`;

const TextArea = styled.div`
  padding-left: 2.5vw;
  padding-right: 4vw;
  padding-top: 3vh;
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

class CourseContent extends Component {
  state = {
    title: '',
    description: '',
    year: '',
    season: '',
    lectures: [],
  };

  componentWillMount() {
    const { courseId, contentId } = this.props;
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
          description: res.data.description,
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
  }

  render() {
    const { contentId } = this.props;

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
                    Home / Courses
                  </Col>
                </Row>
              </SmallContent>
              <BigTitle span={18}>
                <TitleText>
                  {this.state.year} {this.state.season}
                </TitleText>
                <MidText>{this.state.title}</MidText>
              </BigTitle>
              <MedContent span={12} color="#8c8c8c">
                {this.state.description}
              </MedContent>
              <Col span={6} />
            </MainRow>
          </BackgroundColor>
        </Col>
        <Col span={15}>
          <BackgroundColor color="white">
            <Header fontColor="#9b9b9b" />
            <Blocks>
              {this.state.lectures.map(
                ({
                  id: lectureId,
                  title,
                  lecture_number: lectureNumber,
                  files,
                }) => (
                  <a
                    key={lectureId}
                    href={`${contentId}/lectures/${lectureId}/files/${
                      files[0].id
                    }`}
                  >
                    <EachBlock>
                      <Row>
                        <Col span={8}>
                          <ImageArea image={BackgroundImage} />
                        </Col>
                        <Col span={16}>
                          <TextArea>
                            <div>
                              material #{lectureNumber} <Date>2019/01/01</Date>
                            </div>
                            <Title>{title}</Title>
                          </TextArea>
                        </Col>
                      </Row>
                    </EachBlock>
                  </a>
                )
              )}
            </Blocks>
          </BackgroundColor>
        </Col>
      </Row>
    );
  }
}

CourseContent.propTypes = {
  contentId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default CourseContent;
