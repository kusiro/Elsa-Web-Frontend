import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router';

import BackgroundCourses from '../static/home/Courses.jpg';
import BackgroundNews from '../static/home/News.jpg';
import BackgroundProjects from '../static/home/Projects.jpg';
import BackgroundPublications from '../static/home/Publications.jpg';
import { media } from '../size';

import FullPage from './FullPage';

const EntryLink = styled.div`
  position: absolute;
  padding-left: 3.5vw;
  padding-right: 3.5vw;
  top: 70%;
  left: 0;

  ${media.lessThan('notebook')`
    padding: 0;
  `};
`;

const ImageEntry = styled.img`
  width: 100%;
  height: 100%;
  border: 5px white solid;

  ${media.lessThan('notebook')`
    border: 0;
  `};
`;

const LittleTitle = styled.div`
  font-size: 6vw;
  color: white;
`;

const EachTitleEntry = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  height: 100%;
  color: #8c8c8c;
  padding-top: 8vh;
  padding-left: 5vw;
`;

const BlackLayer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Text = styled.div`
  font-size: 1.5vw;
  text-align: center;
  line-height: 20vh;
  margin: auto;
  width: 100%;
  height: 100%;

  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const EachLink = styled(Link)`
  color: rgba(0, 0, 0, 0);
  text-decoration: none !important;

  :hover {
    color: rgba(0, 0, 0, 0);
  }
`;

class Home extends Component {
  state = {
    current: 0,
  };

  changeBackground = index => {
    this.setState({
      current: index,
    });
  };

  render() {
    const { current } = this.state;

    return (
      <Fragment>
        <FullPage current={current} />
        <EntryLink>
          <Row type="flex" justify="space-around">
            <Col xs={{ span: 12 }} xl={{ span: 4 }}>
              <ImageEntry src={BackgroundCourses} />
              <BlackLayer
                onMouseEnter={() => this.changeBackground(1)}
                onMouseLeave={() => this.changeBackground(0)}
              >
                <EachLink to="/courses">
                  <Text>Courses</Text>
                </EachLink>
              </BlackLayer>
            </Col>
            <Col xs={{ span: 12 }} xl={{ span: 0 }}>
              <EachTitleEntry color="#e9ce9b">
                01#
                <LittleTitle>Courses</LittleTitle>
              </EachTitleEntry>
            </Col>
            <Col xs={{ span: 12 }} xl={{ span: 0 }}>
              <EachTitleEntry color="rgba(154, 180, 179, 0.8)">
                02#
                <LittleTitle>Publications</LittleTitle>
              </EachTitleEntry>
            </Col>
            <Col xs={{ span: 12 }} xl={{ span: 4 }}>
              <ImageEntry src={BackgroundPublications} />
              <BlackLayer
                onMouseEnter={() => this.changeBackground(2)}
                onMouseLeave={() => this.changeBackground(0)}
              >
                <EachLink to="/">
                  <Text>Publications</Text>
                </EachLink>
              </BlackLayer>
            </Col>

            <Col xs={{ span: 12 }} xl={{ span: 4 }}>
              <ImageEntry src={BackgroundProjects} />
              <BlackLayer
                onMouseEnter={() => this.changeBackground(3)}
                onMouseLeave={() => this.changeBackground(0)}
              >
                <EachLink to="/projects">
                  <Text>Projects</Text>
                </EachLink>
              </BlackLayer>
            </Col>
            <Col xs={{ span: 12 }} xl={{ span: 0 }}>
              <EachTitleEntry color="rgba(137, 155, 206, 0.8)">
                03#
                <LittleTitle>Projects</LittleTitle>
              </EachTitleEntry>
            </Col>
            <Col xs={{ span: 12 }} xl={{ span: 0 }}>
              <EachTitleEntry color="rgba(160, 137, 169, 0.8)">
                04#
                <LittleTitle>News</LittleTitle>
              </EachTitleEntry>
            </Col>
            <Col xs={{ span: 12 }} xl={{ span: 4 }}>
              <ImageEntry src={BackgroundNews} />
              <BlackLayer
                onMouseEnter={() => this.changeBackground(4)}
                onMouseLeave={() => this.changeBackground(0)}
              >
                <EachLink to="/">
                  <Text>News</Text>
                </EachLink>
              </BlackLayer>
            </Col>
          </Row>
        </EntryLink>
      </Fragment>
    );
  }
}

export default Home;
