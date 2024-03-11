import Modal from 'react-modal';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import {
  Button,
  CloseBtn,
  Text,
  Link,
  Heading,
  Img,
  DoneContainer,
} from './AddPExerciseSuccess.styled';
import sprite from '../../../../../assets/sprite.svg';
import thumb_up from '../../../../../assets/img/Thumb_up-img.png';

const AddPExerciseSuccess = ({ isOpen, closeModal }) => {
  Modal.setAppElement('#root');
  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: isMobileScreen ? '335px' : '430px',
      height: isMobileScreen ? '384px' : '439px',
      padding: isMobileScreen ? '48px 89px' : '64px 134px',
      border: '1px solid rgba(239, 237, 232, 0.2)',
      borderRadius: '12px',
      backgroundColor: '#10100f',
    },
    overlay: {
      backgroundColor: 'rgba(239, 237, 232, 0.2)', // напівпрозорий чорний колір
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div>
        <CloseBtn onClick={() => closeModal()}>
          <svg width="16px" height="16px">
            <use xlinkHref={sprite + '#icon-close'} />
          </svg>
        </CloseBtn>

        <DoneContainer>
          <Img src={thumb_up} alt="thumb up" />
          <div>
            <Heading>Well done</Heading>
            <Text>Your time: {}</Text>
            <Text>Burned calories: {}</Text>
          </div>
          <Button>Next exercise</Button>
        </DoneContainer>
        <Link href="#">
          To the diary{' '}
          <svg width="16px" height="16px">
            <use xlinkHref={sprite + '#icon-gray-arrow'} />
          </svg>
        </Link>
      </div>
    </Modal>
  );
};

export default AddPExerciseSuccess;
