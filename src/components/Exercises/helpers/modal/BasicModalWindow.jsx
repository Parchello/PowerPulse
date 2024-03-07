import { useMediaQuery } from '@mui/material';
import AddExerciseForm from './AddExercisesForm';
import Modal from 'react-modal';

const BasicModalWindow = ({ isOpen, closeModal }) => {
  Modal.setAppElement('#root');
  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      // marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: isMobileScreen ? '335px' : '694px',
      height: isMobileScreen ? '788px' : '550px',
      padding: isMobileScreen ? '48px 16px' : '48px 32px',
      border: '1px solid rgba(239, 237, 232, 0.2)',
      borderRadius: '12px',
      backgroundColor: '#10100f',
    },
    overlay: {
      backgroundColor: 'rgba(239, 237, 232, 0.2)', // напівпрозорий чорний колір
    },
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <AddExerciseForm closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default BasicModalWindow;
