import Timer from '../timer/Timer';
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
  selectSelectedItem,
  selectTimer,
  selectCalories,
} from '../../../../redux/exercises/selectors';
import {
  setFormModal,
  setSucssesModal,
} from '../../../../redux/exercises/exercisesSlise';
import { addExerciseToDiary } from '../../../../redux/exercises/operation';
const AddExerciseForm = () => {
  const selectedItem = useSelector(selectSelectedItem);
  const time = useSelector(selectTimer);
  const calories = useSelector(selectCalories);
  const dispatch = useDispatch();
  const dataAdd = useSelector(selectSelectedItem);
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isBigScreen = useMediaQuery('(min-width: 768px)');

  const timeData = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const exerciseData = {
    exerciseId: dataAdd._id,
    date: timeData(new Date()),
    time: time,
    calories: calories,
  };

  function onClick() {
    {
      dispatch(addExerciseToDiary(exerciseData))
        .unwrap()
        .then(() => {
          dispatch(setSucssesModal(true));
          dispatch(setFormModal(false));
        })
        .catch((error) => {
          console.error('Failed to add exercise:', error);
        });
    }
  }

  return (
    <AddFormContainer>
      <div>
        <div>
          <CloseBtn onClick={() => dispatch(setFormModal(false))}>
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
          {isBigScreen && <Timer />}
          <AddDairyButton type="submit" onClick={() => onClick()}>
            Add to diary
          </AddDairyButton>
        </ButtonContainerTimer>
      </div>
    </AddFormContainer>
  );
};
export default AddExerciseForm;
