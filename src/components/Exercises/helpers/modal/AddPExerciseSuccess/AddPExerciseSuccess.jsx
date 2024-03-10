import Modal from 'react-modal';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Button, CloseBtn, Text, Link } from './AddPExerciseSuccess.styled';
import sprite from '../../../../../assets/sprite.svg';

const AddPExerciseSuccess = () => {
  Modal.setAppElement('#root');
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: isMobileScreen ? '335px' : '430px',
      height: isMobileScreen ? '788px' : '439px',
      padding: isMobileScreen ? '48px 16px' : '64px 134px',
      border: '1px solid rgba(239, 237, 232, 0.2)',
      borderRadius: '12px',
      backgroundColor: '#10100f',
    },
    overlay: {
      backgroundColor: 'rgba(239, 237, 232, 0.2)', // напівпрозорий чорний колір
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div>
        <CloseBtn onClick={() => closeModal(false)}>
          <svg width="16px" height="16px">
            <use xlinkHref={sprite + '#icon-close'} />
          </svg>
        </CloseBtn>

        <img
          src="../../../../../../src/components/Exercises/image/Thumb_up.png"
          alt=""
        />

        <h2>Well done</h2>
        <Text>Your time: {}</Text>

        <Text>Burned calories: {}</Text>
        <Button>Next exercise</Button>
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
