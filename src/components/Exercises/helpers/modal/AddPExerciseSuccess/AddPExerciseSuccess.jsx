import Modal from 'react-modal';
import { useMediaQuery } from '@mui/material';
import {
  Button,
  CloseBtn,
  Text,
  LinkToDairy,
  Heading,
  Img,
  DoneContainer,
} from './AddPExerciseSuccess.styled';
import sprite from '../../../../../assets/sprite.svg';
import thumb_up from '../../../../../assets/img/Thumb_up-img.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCalories,
  selectSucssesModal,
  selectTimer,
} from '../../../../../redux/exercises/selectors';
import {
  setFormModal,
  setSucssesModal,
} from '../../../../../redux/exercises/exercisesSlise';
import { CaloriesNumber } from '../AddExercisesForm.styled';

const AddPExerciseSuccess = () => {
  const isOpenSucssesModal = useSelector(selectSucssesModal);
  const time = useSelector(selectTimer);
  const calories = useSelector(selectCalories);

  const dispatch = useDispatch();

  Modal.setAppElement('#root');

  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  function closeModal() {}

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
    <Modal
      isOpen={isOpenSucssesModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
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
            <Text>
              Your time: <CaloriesNumber>{time} minutes</CaloriesNumber>
            </Text>
            <Text>
              Burned calories: <CaloriesNumber>{calories}</CaloriesNumber>
            </Text>
          </div>
          <Button
            onClick={() => {
              dispatch(setSucssesModal(false));
              dispatch(setFormModal(false));
            }}
          >
            Next exercise
          </Button>
        </DoneContainer>
        <LinkToDairy to="/diary">
          To the diary{' '}
          <svg width="16px" height="16px">
            <use xlinkHref={sprite + '#icon-gray-arrow'} />
          </svg>
        </LinkToDairy>
      </div>
    </Modal>
  );
};

export default AddPExerciseSuccess;
