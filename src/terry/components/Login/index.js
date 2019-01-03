import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button, Col, Input, Row } from 'antd';

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

const TeachBlock = styled.div`
  width: 100%;
  float: right;
  margin-top: 20vh;
  padding-left: 5vw;
`;

const UserInput = styled(Input)`
  background-color: #cfcfcf;
  width: 100%;
  height: 4vh;
  box-shadow: 0 0 0 100px white inset;
  -webkit-box-shadow: 0 0 0 100px white inset;
`;

const Text = styled.div`
  font-weight: bold;
  color: white;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const SubmitButton = styled(Button)`
  float: right;
  margin-top: 2vh;
`;

class Login extends Component {
  state = {
    account: '',
    password: '',
    message: '',
  };

  renderMessage = () => {
    if (this.state.message) {
      return <div className="message">{this.state.message}</div>;
    }
  };

  handleChange = (id, event) => {
    if (id === 'account') {
      this.setState({ account: event.target.value });
    } else if (id === 'password') {
      this.setState({ password: event.target.value });
    }
  };

  handleSubmit = event => {
    const reactIns = this;
    axios
      .post(`${settings.backend_url}/api-token-auth/`, {
        username: this.state.account,
        password: this.state.password,
      })
      .then(response => {
        console.log(response);
        const userId = response.data.user.id;
        localStorage.token = response.data.token;
        localStorage.user_id = userId;
        // redirect to user page
        if (
          settings.root_user_types.includes(
            response.data.user.profile.studentType
          )
        ) {
          window.location = `${settings.root_url}/management/users`;
        } else {
          const url = new URL(window.location.href);
          const redirectUrl = url.searchParams.get('redirect_url');
          if (redirectUrl) {
            window.location = redirectUrl;
          } else {
            window.location = '/';
          }
        }
      })
      .catch(error => {
        console.log(error.response);
        // handle login error
        if (error) {
          // set error message or fade out after 2s.
          reactIns.setState({ message: 'Account or Password error.' }, () =>
            setTimeout(() => reactIns.setState({ message: '' }), 2000)
          );
        }
      });
    event.preventDefault();
  };

  render() {
    return (
      <Row>
        <Col span={9}>
          <BackgroundColor color="#aac2ff">
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
                <TitleText>Sign In</TitleText>
              </BigTitle>
              <MedContent span={12} color="#8c8c8c">
                Sign in to get more informations
              </MedContent>
              <Col span={6} />
            </MainRow>
          </BackgroundColor>
        </Col>
        <Col span={15}>
          <BackgroundColor color="#6e7794">
            <Header fontColor="white" />
            <TeachBlock>
              <Row type="flex" justify="start" align="top">
                <Col span={8}>
                  {this.renderMessage()}
                  <Text>Account</Text>
                  <UserInput
                    size="large"
                    type="text"
                    value={this.state.account}
                    onChange={e => this.handleChange('account', e)}
                  />
                  <Text>Password</Text>
                  <UserInput
                    size="large"
                    type="password"
                    value={this.state.password}
                    onChange={e => this.handleChange('password', e)}
                  />
                  <SubmitButton onClick={e => this.handleSubmit(e)} href="#">
                    Submit
                  </SubmitButton>
                </Col>
              </Row>
            </TeachBlock>
          </BackgroundColor>
        </Col>
      </Row>
    );
  }
}

export default Login;
