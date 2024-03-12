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
import { selectSelectedItem } from '../../../../redux/exercises/selectors';
import {
  setFormModal,
  setSucssesModal,
} from '../../../../redux/exercises/exercisesSlise';

const AddExerciseForm = () => {
  const selectedItem = useSelector(selectSelectedItem);
  const dispatch = useDispatch();

  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  const isBigScreen = useMediaQuery('(min-width: 768px)');

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

          <AddDairyButton
            type="submit"
            onClick={() => {
              dispatch(setSucssesModal(true));
              dispatch(setFormModal(false));
            }}
          >
            Add to diary
          </AddDairyButton>
        </ButtonContainerTimer>
      </div>
    </AddFormContainer>
  );
};

export default AddExerciseForm;
