import { useMediaQuery } from '@mui/material';
import AddExerciseForm from './AddExercisesForm';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFormModal } from '../../../../redux/exercises/selectors';
import { setFormModal } from '../../../../redux/exercises/exercisesSlise';

const BasicModalWindow = () => {
  Modal.setAppElement('#root');
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const osOpenFormModal = useSelector(selectFormModal);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(setFormModal(false));
  }

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
      <Modal
        isOpen={osOpenFormModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <AddExerciseForm />
      </Modal>
    </div>
  );
};

export default BasicModalWindow;
