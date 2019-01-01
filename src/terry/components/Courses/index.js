import MediaQuery from 'react-responsive';
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Col, Row } from 'antd';

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
  PageLink,
  SmallContent,
  Text,
  TextCol,
  Title1,
  Title2,
  TitleText,
} from '../Share';
import { media, notebook } from '../size';

const Blocks = styled.div`
  padding-top: 20vh;
`;

const OtherLink = styled(Col)`
  margin-top: 5vh;
`;

const BackgroundStyleColor = styled(BackgroundColor)`
  ${media.lessThan('notebook')`
    height: 70vh;
  `};
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

const TitleStyleText = styled(TitleText)`
  ${media.lessThan('notebook')`
    font-size: 10vw;
  `};
`;

const IconStyleImage = styled(IconImage)`
  ${media.lessThan('notebook')`
    width: 8vw;
  `};
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
          <a key={id} href={`/courses/${courseId}/contents/${id}`}>
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
          </a>
        ))
      );
    }
  };

  renderLogin = () => {
    const { token } = localStorage;
    if (token) {
      return (
        <PageLink to="/logout">
          <Text color="rgba(0, 0, 0, 0.4)">Sign out</Text>
        </PageLink>
      );
    }
    return (
      <PageLink to="/login">
        <Text color="rgba(0, 0, 0, 0.4)">Sign in</Text>
      </PageLink>
    );
  };

  renderOtherBlock = () => (
    <Row>
      <TextCol span={24}>
        <PageLink to="/about">
          <Text color="rgba(0, 0, 0, 0.4)">About Elsa Lab</Text>
        </PageLink>
      </TextCol>
      <TextCol span={24}>{this.renderLogin()}</TextCol>
    </Row>
  );

  render() {
    return (
      <Row>
        <Col xs={{ span: 24 }} xl={{ span: 9 }}>
          <BackgroundStyleColor color="#f8d188">
            <MainRow type="flex" justify="center">
              <LogoContent xs={{ span: 22 }} xl={{ span: 18 }}>
                <Row type="flex" justify="start" align="middle" gutter={8}>
                  <Col>
                    <IconStyleImage src={IconImg} />
                  </Col>
                  <Col>
                    <Title1>NTHU</Title1>
                    <Title2>ELSA</Title2>
                  </Col>
                  <Col xs={{ span: 10 }} xl={{ span: 0 }} offset={8}>
                    {this.renderOtherBlock()}
                  </Col>
                </Row>
              </LogoContent>
              <SmallContent xs={{ span: 22 }} xl={{ span: 18 }} color="#8c8c8c">
                <Row type="flex" justify="start" align="bottom">
                  <Col span={6}>
                    <Hr color="#8c8c8c" />
                  </Col>
                  <Col span={12} offset={1}>
                    Home
                  </Col>
                </Row>
              </SmallContent>
              <BigTitle xs={{ span: 20 }} xl={{ span: 18 }}>
                <TitleStyleText>Courses</TitleStyleText>
              </BigTitle>
              <MedContent span={12} color="#8c8c8c" />
              <OtherLink xs={{ span: 0 }} xl={{ span: 6 }}>
                {this.renderOtherBlock()}
              </OtherLink>
              <Col span={6} />
            </MainRow>
          </BackgroundStyleColor>
        </Col>
        <Col span={15}>
          <BackgroundColor color="white">
            <MediaQuery query={`(max-width: ${notebook})`}>
              {matches => {
                if (matches) {
                  return <Header fontColor="#9b9b9b" />;
                }
                return <></>;
              }}
            </MediaQuery>

            <Blocks>{this.renderClass()}</Blocks>
          </BackgroundColor>
        </Col>
      </Row>
    );
  }
}

export default Courses;
