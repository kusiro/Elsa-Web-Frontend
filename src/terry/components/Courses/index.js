import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router';

import BackgroundImage from '../static/background_image_invert_vertical.jpg';
import Header from '../Share/Header';
import IconImg from '../static/icon.png';
import settings from '../../../settings';
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
} from '../Share';

const Blocks = styled.div`
  padding-top: 20vh;
`;

const EachBlock = styled.div`
  width: 100%;
  height: 20vh;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 5vh;
  color: white;
  font-size: 1.2vw;
`;

const Year = styled.div`
  margin-bottom: -1vh;
  font-weight: bold;
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

class Courses extends Component {
  state = {
    courses: '',
  };

  componentWillMount() {
    const ins = axios.create({
      baseURL: settings.backend_url,
      timeout: 1000,
    });

    ins
      .get('/courses')
      .then(res => {
        console.log(res.data);
        this.setState({ courses: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderClass = () => {
    if (this.state.courses) {
      return this.state.courses.map(({ id: courseId, title, contents }) =>
        contents.map(({ id, season, year }) => (
          <Link key={id} to={`courses/${courseId}/contents/${id}`}>
            <EachBlock>
              <Row>
                <Col span={12}>
                  <TextArea>
                    <Year>
                      {year} {season}
                    </Year>
                    <Title>{title}</Title>
                  </TextArea>
                </Col>
                <Col span={12}>
                  <ImageArea image={BackgroundImage} />
                </Col>
              </Row>
            </EachBlock>
          </Link>
        ))
      );
    }
  };

  render() {
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
                    Home
                  </Col>
                </Row>
              </SmallContent>
              <BigTitle span={18}>
                <TitleText>Courses</TitleText>
              </BigTitle>
              <MedContent span={12} color="#8c8c8c" />
              <Col span={6} />
            </MainRow>
          </BackgroundColor>
        </Col>
        <Col span={15}>
          <BackgroundColor color="white">
            <Header fontColor="#9b9b9b" />
            <Blocks>{this.renderClass()}</Blocks>
          </BackgroundColor>
        </Col>
      </Row>
    );
  }
}

export default Courses;
