import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

import BackgroundImage from '../static/background_image_invert_vertical_2.jpg';
import BackgroundImageGreen from '../static/background_image_green.jpg';
import MethodImage1 from '../static/Method1.jpg';
import MethodImage2 from '../static/Method2.jpg';
import MethodImage3 from '../static/Method3.jpg';
import ResultImage11 from '../static/Result11.jpg';
import ResultImage12 from '../static/Result12.jpg';
import ResultImage2 from '../static/Result2.jpg';
import ResultImage31 from '../static/Result31.jpg';
import ResultImage32 from '../static/Result32.jpg';
import ResultImage41 from '../static/Result41.jpg';
import ResultImage42 from '../static/Result42.jpg';
import { media } from '../size';

import {
  Method1,
  Method2,
  Method3,
  Result1,
  Result2,
  Result3,
  Result4,
} from './Modal/DynamicVideo';

const BodyCSS = {
  height: '80vmin',
  padding: '0',
};

const width = '180vmin';

const Background = styled.div`
  background: url(${props => props.background});
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

const Title = styled.div`
  color: white;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 10vmin;
  font-size: 4vmin;
  padding: 2vmin 2vmin 2vmin 3vmin;

  ${media.lessThan('notebook')`
    width: 90vmin;
  `};
`;

const backgroundMap = {
  'Virtual-to-Real': BackgroundImage,
  'Dynamic-Video-Segmentation-Network': BackgroundImageGreen,
};

class ResultsModal extends Component {
  renderModalContent = modalId => {
    switch (modalId) {
      case 1:
        return <Method1 image={MethodImage1} />;
      case 2:
        return <Method2 image={MethodImage2} />;
      case 3:
        return <Method3 image={MethodImage3} />;
      case 4:
        return <Result1 image={[ResultImage11, ResultImage12]} />;
      case 5:
        return <Result2 image={ResultImage2} />;
      case 6:
        return <Result3 image={[ResultImage31, ResultImage32]} />;
      case 7:
        return <Result4 image={[ResultImage41, ResultImage42]} />;
      default:
        return <></>;
    }
  };

  render() {
    const { visible, title, modalId, closeModal, projectName } = this.props;

    return (
      <Modal
        visible={visible}
        centered
        bodyStyle={BodyCSS}
        width={width}
        onCancel={closeModal}
        footer={null}
        wrapClassName="block"
      >
        <Background background={backgroundMap[projectName]}>
          <Title>{title}</Title>
          {this.renderModalContent(modalId)}
        </Background>
      </Modal>
    );
  }
}

ResultsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalId: PropTypes.number.isRequired,
  projectName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default ResultsModal;
