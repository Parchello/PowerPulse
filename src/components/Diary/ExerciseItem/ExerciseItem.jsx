import {
  BottomInf,
  ProductInfo,
  TitleName,
  BottomInfField,
  LiExcersiceItem,
} from './ExerciseItem.styled';

export const ExerciseItem = ({ prop }) => {
  const { body_Part, equipment, name, target, burnedCalories, time } = prop;
  return (
    <LiExcersiceItem>
      <TitleName>Body Part</TitleName>
      <ProductInfo>{body_Part}</ProductInfo>
      <TitleName>Equipment</TitleName>
      <ProductInfo>{equipment}</ProductInfo>
      <TitleName>Name</TitleName>
      <ProductInfo>{name}</ProductInfo>

      <BottomInf>
        <div>
          <TitleName>Target</TitleName>
          <BottomInfField>{target}</BottomInfField>
        </div>
        <div>
          <TitleName>Burned Calories</TitleName>
          <BottomInfField>{burnedCalories}</BottomInfField>
        </div>
        <div>
          <TitleName>Time</TitleName>
          <BottomInfField>{time}</BottomInfField>
        </div>
      </BottomInf>
    </LiExcersiceItem>
  );
};

export default ExerciseItem;
