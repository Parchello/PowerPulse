import {
  BottomInf,
  TitleName,
  LiExcersiceItem,
  ProductInfoBodyPart,
  ProductInfoEquip,
  ProductInfoName,
  BottomInfFieldCalor,
  BottomInfFieldTarget,
  BottomInfFieldTime,
} from './ExerciseItem.styled';
import sprite from '../../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExerciseById } from '../../../redux/diary/operations';
import { DelBtn } from '../DelBtn/DelBtn.styled';
import { Token } from '../../../redux/profile/selectors';

export const ExerciseItem = ({ prop }) => {
  const dispatch = useDispatch();
  const initialDate = useSelector((state) => state.diary.initialDate);
  const token = useSelector(Token);
  const {
    time,
    calories,
    exerciseId: { _id, bodyPart, equipment, name, target },
  } = prop;

  return (
    <LiExcersiceItem>
      <div>
        <TitleName>Body Part</TitleName>
        <ProductInfoBodyPart>{bodyPart}</ProductInfoBodyPart>
      </div>
      <div>
        <TitleName>Equipment</TitleName>
        <ProductInfoEquip>{equipment}</ProductInfoEquip>
      </div>
      <div>
        <TitleName>Name</TitleName>
        <ProductInfoName>{name}</ProductInfoName>
      </div>
      <BottomInf>
        <div>
          <TitleName>Target</TitleName>
          <BottomInfFieldTarget>{target}</BottomInfFieldTarget>
        </div>
        <div>
          <TitleName>Burned Calories</TitleName>
          <BottomInfFieldCalor>{calories}</BottomInfFieldCalor>
        </div>
        <div>
          <TitleName>Time</TitleName>
          <BottomInfFieldTime>{time}</BottomInfFieldTime>
        </div>
        <DelBtn
          onClick={() =>
            dispatch(deleteExerciseById({ _id, token, date: initialDate }))
          }
        >
          <svg width={24} height={24}>
            <use xlinkHref={sprite + '#trash-03'}></use>
          </svg>
        </DelBtn>
      </BottomInf>
    </LiExcersiceItem>
  );
};

export default ExerciseItem;
