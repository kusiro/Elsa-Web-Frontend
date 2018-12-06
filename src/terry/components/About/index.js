import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

import Header from '../Share/Header';
import IconImg from '../static/icon.png';
import TeacherImageSrc from '../static/home/teacher.png';
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

const TeachBlock = styled.div`
  width: 100%;
  float: right;
  margin-top: 10vh;
  padding-left: 5vw;
`;

const TeacherImage = styled.img`
  width: 13vw;
  border-radius: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Profile = styled.div`
  font-size: 1vw;
  color: white;
  text-align: center;
  margin-top: 2vh;
`;

const ExperienceAndEducation = styled.div`
  font-size: 1vw;
  line-height: 140%;
  color: white;
`;

const About = () => (
  <Row>
    <Col span={9}>
      <BackgroundColor color="#ffbb87">
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
                Professor : Chun-Yi Lee
              </Col>
            </Row>
          </SmallContent>
          <BigTitle span={18}>
            <TitleText>
              About
              <br />
              ELSA Lab
            </TitleText>
          </BigTitle>
          <MedContent span={12} color="#8c8c8c">
            <b>Address</b>
            <br />
            Department of Computer Science, National Tsing Hua University,
            No.101, Sec .2, Kuang-Fu Road, Hsinchu, 30013, Taiwan
            <br />
            <br />
            <b>Office</b>
            <br />
            Phone: +886-3-5731308 Email: cylee@cs.nthu.edu.tw Address: Delta
            Building 606
          </MedContent>
          <Col span={6} />
        </MainRow>
      </BackgroundColor>
    </Col>
    <Col span={15}>
      <BackgroundColor color="#9c8370">
        <Header fontColor="white" />
        <TeachBlock>
          <Row type="flex" justify="center" align="top">
            <Col span={10}>
              <TeacherImage src={TeacherImageSrc} />
              <Profile>
                <b>
                  Professor - <br />
                  Chun-Yi Lee ( 李濬屹 ) <br />
                  Ph.D. <br />
                  cylee@cs.nthu.edu.tw
                </b>
              </Profile>
            </Col>
            <Col span={12}>
              <ExperienceAndEducation>
                <div>
                  <b>Work Experience</b>
                </div>
                <br />
                <div>
                  <b>2015 ~ </b>
                </div>
                <div>Assistant Professor</div>
                <div>Department of Computer Science</div>
                <div>National Tsing Hua University</div>
                <br />
                <div>
                  <b>2012 ~ 2015</b>
                </div>
                <div>Senior Hardware Engineer,</div>
                <div> Oracle America, Inc. </div>
                <br />
                <div> _ </div>
                <br />
                <div>
                  <b>Education</b>
                </div>
                <br />
                <div>
                  <b>2007 ~ 2012</b>
                </div>
                <div>Ph.D., Department of Electrical Engineering,</div>
                <div>Princeton University</div>
                <br />
                <div>
                  <b>2003 ~ 2005</b>
                </div>
                <div>M.S., Department of Electrical Engineering,</div>
                <div>National Taiwan University</div>
                <br />
                <div>
                  <b>1999 ~ 2003</b>
                </div>
                <div>B.S., Department of Electrical Engineering,</div>
                <div>National Taiwan University</div>
                <br />
              </ExperienceAndEducation>
            </Col>
          </Row>
        </TeachBlock>
      </BackgroundColor>
    </Col>
  </Row>
);

export default About;
