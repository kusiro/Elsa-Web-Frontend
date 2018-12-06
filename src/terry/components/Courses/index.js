import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import BackgroundImage from '../static/background_image_invert_vertical.jpg';
import BackgroundImageGreen from '../static/background_image_green.jpg';
import Header from '../Share/Header';
import IconImg from '../static/icon.png';
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

const CoursesContent = [
  {
    content: { year: '2018 Fall', name: 'Hardware Design and lab' },
    image: BackgroundImage,
    link: '/course/Hardware_Design_And_Lab',
  },
  {
    content: { year: '2018 Fall', name: 'Hardware Design and lab 2' },
    image: BackgroundImageGreen,
    link: '/course/Hardware_Design_And_Lab_2',
  },
];

const Courses = () => (
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
        <Blocks>
          {CoursesContent.map(({ content, image, link }) => (
            <Link key={content.name} to={link}>
              <EachBlock>
                <Row>
                  <Col span={12}>
                    <TextArea>
                      <Year>{content.year}</Year>
                      <Title>{content.name}</Title>
                    </TextArea>
                  </Col>
                  <Col span={12}>
                    <ImageArea image={image} />
                  </Col>
                </Row>
              </EachBlock>
            </Link>
          ))}
        </Blocks>
      </BackgroundColor>
    </Col>
  </Row>
);

export default Courses;
