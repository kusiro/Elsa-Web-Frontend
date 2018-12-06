import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import BackgroundImage from '../static/background_image_invert_vertical.jpg';
import BackgroundImageGreen from '../static/background_image_green.jpg';
import Header from '../Share/Header';
import IconImg from '../static/icon.png';
import project1 from '../Content/VirtualToReal';
import project2 from '../Content/DynamicVideo';
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
`;

const Title = styled.div`
  font-size: 2vw;
`;

const TextArea = styled.div`
  padding-left: 2.5vw;
  padding-right: 4vw;
  padding-top: 2vh;
`;

const ImageArea = styled.div`
  width: 100%;
  height: 20vh;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center center;
`;

const ProjectsContent = [
  { content: project1.topic, image: BackgroundImage },
  { content: project2.topic, image: BackgroundImageGreen },
];

const Projects = () => (
  <Row>
    <Col span={9}>
      <BackgroundColor color="#a1afd8">
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
            <TitleText>Projects</TitleText>
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
          {ProjectsContent.map(({ content, image }) => (
            <EachBlock key={content[1]}>
              <Row>
                <Col span={12}>
                  <TextArea>
                    <Year>{content[0]}</Year>
                    <Title>{content[1]}</Title>
                    <p>{content[2]}</p>
                  </TextArea>
                </Col>
                <Col span={12}>
                  <ImageArea image={image} />
                </Col>
              </Row>
            </EachBlock>
          ))}
        </Blocks>
      </BackgroundColor>
    </Col>
  </Row>
);

export default Projects;
