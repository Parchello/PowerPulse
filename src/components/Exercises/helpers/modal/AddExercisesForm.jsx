// import { useDispatch, useSelector } from 'react-redux';
// import exercises from '../../exercises';
import Timer from '../timer/Timer';
// import { useEffect } from 'react';
import sprite from '../../../../assets/sprite.svg';
import {
  AddFormContainer,
  Img,
  ImageFon,
  ImgContainer,
  ListExerc,
  ItemExerc,
  ExercContainer,
  Span,
  TextEl,
  ButtonContainerTimer,
  AddDairyButton,
  CloseBtn,
} from './AddExercisesForm.styled';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFormModal,
  selectSelectedItem,
} from '../../../../redux/exercises/selectors';
import {
  setFormModal,
  setSucssesModal,
} from '../../../../redux/exercises/exercisesSlise';

const AddExerciseForm = () => {
  const selectedItem = useSelector(selectSelectedItem);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(setFormModal(false));
  }

  // const timeTimer = useSelector((state) => state.timer);
  // const dispatch = useDispatch();
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isBigScreen = useMediaQuery('(min-width: 768px)');

  // useEffect(() => {
  //   const item = exercises[0];

  //   if (timeTimer !== 0) {
  //     const burnedCalories = Math.round(
  //       (timeTimer * item.burnedCalories) / 180
  //     );
  //     dispatch(Calories(burnedCalories));
  //   }
  // }, [timeTimer, dispatch]);

  return (
    <AddFormContainer>
      <div>
        <div>
          <CloseBtn onClick={() => closeModal()}>
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-close'} />
            </svg>
          </CloseBtn>
          <ExercContainer>
            <ImgContainer>
              <Img src={selectedItem.gifUrl} alt={selectedItem.name} />
              <ImageFon></ImageFon>
            </ImgContainer>
            {isMobileScreen && <Timer />}
            <ListExerc>
              <ItemExerc>
                <TextEl>
                  Name <Span>{selectedItem.name}</Span>
                </TextEl>
              </ItemExerc>
              <ItemExerc>
                <TextEl>
                  Target <Span>{selectedItem.target}</Span>
                </TextEl>
              </ItemExerc>
              <ItemExerc>
                <TextEl>
                  Body part <Span>{selectedItem.bodyPart}</Span>
                </TextEl>
              </ItemExerc>
              <ItemExerc>
                <TextEl>
                  Equipment <Span>{selectedItem.equipment}</Span>
                </TextEl>
              </ItemExerc>
            </ListExerc>
          </ExercContainer>
        </div>
        <ButtonContainerTimer>
          {/* <TimerContainer>
            <Time>Time</Time>
            <Timer />
            <CaloriesBurn>
              Burned calories: <CaloriesNumber>{calories}</CaloriesNumber>
            </CaloriesBurn>
          </TimerContainer> */}

          {isBigScreen && <Timer />}

          <AddDairyButton
            type="submit"
            onClick={() => dispatch(setSucssesModal(true))}
          >
            Add to diary
          </AddDairyButton>
        </ButtonContainerTimer>
      </div>
    </AddFormContainer>
  );
};

export default AddExerciseForm;
