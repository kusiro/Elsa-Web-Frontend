import styled from 'styled-components';
import { Col, Row } from 'antd';

export const BackgroundColor = styled.div`
  background-color: ${props => props.color};
  height: 100vh;
  width: 100%;
`;

export const MainRow = styled(Row)`
  padding-left: 3vw;
`;

export const IconImage = styled.img`
  width: 2vw;
`;

export const Title1 = styled.p`
  font-size: 0.75vw;
  margin: 0;
`;

export const Title2 = styled.p`
  font-size: 1vw;
  margin: 0;
`;

export const LogoContent = styled(Col)`
  color: white;
  margin-top: 8vh;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 2px;
  border: 0;
`;

export const SmallContent = styled(Col)`
  color: ${props => props.color};
  font-size: 1vw;
  margin-top: 5vh;
`;

export const BigTitle = styled(Col)`
  font-size: 4vw;
  color: white;
  margin-top: 6vh;
  font-weight: bold;
`;

export const TitleText = styled.div`
  line-height: 1.2;
`;

export const MedContent = styled(Col)`
  color: ${props => props.color};
  font-size: 1vw;
  margin-top: 5vh;
`;
