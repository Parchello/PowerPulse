import { useDispatch, useSelector } from 'react-redux';
import exercises from '../../exercises';
import Timer from '../timer/Timer';
import { useEffect } from 'react';
import { Calories } from '../../store';
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

const AddExerciseForm = ({ closeModal }) => {
  const timeTimer = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isBigScreen = useMediaQuery('(min-width: 768px)');

  const item = exercises[0];

  useEffect(() => {
    const item = exercises[0];

    if (timeTimer !== 0) {
      const burnedCalories = Math.round(
        (timeTimer * item.burnedCalories) / 180
      );
      dispatch(Calories(burnedCalories));
    }
  }, [timeTimer, dispatch]);

  return (
    <AddFormContainer>
      <div>
        <div>
          <CloseBtn onClick={() => closeModal(false)}>
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-close'} />
            </svg>
          </CloseBtn>
          <ExercContainer>
            <ImgContainer>
              <Img src={item.gifUrl} alt={item.name} />
              <ImageFon></ImageFon>
            </ImgContainer>
            {isMobileScreen && <Timer />}
            <ListExerc>
              <ItemExerc>
                <TextEl>
                  Name <Span>{item.name}</Span>
                </TextEl>
              </ItemExerc>
              <ItemExerc>
                <TextEl>
                  Target <Span>{item.target}</Span>
                </TextEl>
              </ItemExerc>
              <ItemExerc>
                <TextEl>
                  Body part <Span>{item.bodyPart}</Span>
                </TextEl>
              </ItemExerc>
              <ItemExerc>
                <TextEl>
                  Equipment <Span>{item.equipment}</Span>
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

          <AddDairyButton type="submit">Add to diary</AddDairyButton>
        </ButtonContainerTimer>
      </div>
    </AddFormContainer>
  );
};

export default AddExerciseForm;
