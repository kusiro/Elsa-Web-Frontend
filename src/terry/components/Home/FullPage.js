import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

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

import {
  backgroundColorInvertMap,
  backgroundColorMap,
  backgroundImageMap,
  bigTitleMap,
  medColorMap,
  medContentMap,
  otherColorMap,
  smallContentMap,
} from './StyleMap';

const BackgroundImage = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const OtherLink = styled(Col)`
  margin-top: 5vh;
`;

const TextCol = styled.div`
  float: right;
  font-size: 1vw;
  color: white;
`;

const Text = styled.div`
  background-color: ${props => props.color};
  margin: 3px;
  padding-left: 3px;
  padding-right: 3px;

  :hover {
    background-color: white;
  }
`;

const PageLink = styled(Link)`
  color: white;

  :hover {
    color: black;
  }
`;

class FullPage extends Component {
  render() {
    const { current } = this.props;

    return (
      <Row>
        <Col span={9}>
          <BackgroundColor color={backgroundColorMap[current]}>
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
              <SmallContent span={18} color={backgroundColorInvertMap[current]}>
                <Row type="flex" justify="start" align="bottom">
                  <Col span={6}>
                    <Hr color={backgroundColorInvertMap[current]} />
                  </Col>
                  <Col span={12} offset={1}>
                    {smallContentMap[current]}
                  </Col>
                </Row>
              </SmallContent>
              <BigTitle span={18}>
                <TitleText>
                  {current !== 0 ? <br /> : ''}
                  {bigTitleMap[current]}
                </TitleText>
              </BigTitle>
              <MedContent span={12} color={medColorMap[current]}>
                {medContentMap[current]}
              </MedContent>
              <OtherLink span={6}>
                <Row>
                  <TextCol span={24}>
                    <PageLink to="/about">
                      <Text color={otherColorMap[current]}>About Elsa Lab</Text>
                    </PageLink>
                  </TextCol>
                  <TextCol span={24}>
                    <PageLink to="/about">
                      <Text color={otherColorMap[current]}>Sign in</Text>
                    </PageLink>
                  </TextCol>
                </Row>
              </OtherLink>
            </MainRow>
          </BackgroundColor>
        </Col>
        <Col span={15}>
          <BackgroundImage image={backgroundImageMap[current]} />
        </Col>
      </Row>
    );
  }
}

FullPage.propTypes = {
  current: PropTypes.number.isRequired,
};

export default FullPage;
