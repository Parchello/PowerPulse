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

export const ExerciseItem = ({ prop }) => {
  const {
    time,
    exerciseId: {
      // _id,
      bodyPart,
      burnedCalories,
      equipment,
      name,
      target,
    },
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
          <BottomInfFieldCalor>{burnedCalories}</BottomInfFieldCalor>
        </div>
        <div>
          <TitleName>Time</TitleName>
          <BottomInfFieldTime>{time}</BottomInfFieldTime>
        </div>
        <button
          // onClick={() => handleDelete()}
          style={{
            background: 'none',
            border: 'none',
            width: '24px',
            height: '24px',
            marginTop: 'auto',
          }}
        >
          <svg width={24} height={24}>
            <use xlinkHref={sprite + '#icon-red-raw'}></use>
          </svg>
        </button>
      </BottomInf>
    </LiExcersiceItem>
  );
};

export default ExerciseItem;
