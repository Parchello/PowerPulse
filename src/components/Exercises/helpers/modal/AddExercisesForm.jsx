import { useDispatch, useSelector } from 'react-redux';
import exercises from '../../exercises';
import Timer from '../timer/Timer';
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
  Time,
  CaloriesBurn,
  CaloriesNumber,
  TimerContainer,
  ButtonContainerTimer,
  AddDairyButton,
} from './AddExercisesForm.styled';
import { useEffect } from 'react';
import { Calories } from '../../store';

const AddExerciseForm = () => {
  const timeTimer = useSelector((state) => state.timer);
  const calories = useSelector((state) => state.calories);

  const dispatch = useDispatch();

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
          <ExercContainer>
            <ImgContainer>
              <Img src={item.gifUrl} alt={item.name} />
              <ImageFon></ImageFon>
            </ImgContainer>
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
          <TimerContainer>
            <Time>Time</Time>
            <Timer />
            <CaloriesBurn>
              Burned calories: <CaloriesNumber>{calories}</CaloriesNumber>
            </CaloriesBurn>
          </TimerContainer>
          <AddDairyButton type="submit">Add to diary</AddDairyButton>
        </ButtonContainerTimer>
      </div>
    </AddFormContainer>
  );
};

export default AddExerciseForm;
