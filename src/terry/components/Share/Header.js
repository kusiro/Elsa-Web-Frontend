import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const Layout = styled.div`
  width: 100%;
  float: right;
  margin-right: 2vw;
`;

const EachLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none !important;
`;

const LinkCol = styled(Col)`
  font-size: 1vw;
  text-align: center;
  padding-top: 3vh;
  padding-bottom: 1vh;

  ${EachLink}:hover & {
    cursor: pointer;
    color: white;
    background-color: black;
    opacity: 0.5;
  }
`;

const Header = ({ fontColor }) => (
  <Layout>
    <Row type="flex" justify="end" align="middle">
      <Col span={2}>
        <EachLink color={fontColor} to="/">
          <LinkCol>Home</LinkCol>
        </EachLink>
      </Col>
      <Col span={2}>
        <EachLink color={fontColor} to="/courses">
          <LinkCol>Course</LinkCol>
        </EachLink>
      </Col>
      <Col span={3}>
        <EachLink color={fontColor} to="/">
          <LinkCol>Publications</LinkCol>
        </EachLink>
      </Col>
      <Col span={2}>
        <EachLink color={fontColor} to="/projects">
          <LinkCol>Projects</LinkCol>
        </EachLink>
      </Col>
      <Col span={2}>
        <EachLink color={fontColor} to="/">
          <LinkCol>News</LinkCol>
        </EachLink>
      </Col>
      <Col span={2}>
        <EachLink color={fontColor} to="/">
          <LinkCol>Sign in</LinkCol>
        </EachLink>
      </Col>
    </Row>
  </Layout>
);

Header.propTypes = {
  fontColor: PropTypes.string.isRequired,
};

export default Header;
