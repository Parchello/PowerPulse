import sprite from '../../../assets/sprite.svg';
import { RawSvg } from '../ModalWellDone/ModaWellDone.styled';
import {
  DietBlock,
  DietTextBox,
  DietText,
  RecomendBox,
  RecomendStatusCircle,
  RecommendStatusText,
  AddBtn,
  DietNameBox,
  DietName,
  DietInfoList,
  DietInfoItem,
  DietInfoHeading,
  DietInfoValue,
} from './ProductsItem.styled';

export const ProductsItem = ({
  value: { calories, category, title, weight },
  openModal,
}) => {
  // тут треба ще зробити так, щоб Recommended світився червоним або зеленим
  //в залежності від того яка у користувача група крові
  return (
    <>
      <DietBlock>
        <DietTextBox>
          <DietText>Diet</DietText>
        </DietTextBox>
        <RecomendBox>
          <RecomendStatusCircle></RecomendStatusCircle>
          <RecommendStatusText>Recommended</RecommendStatusText>
          <AddBtn onClick={() => openModal(true)}>
            Add
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-red-raw'} />
            </svg>
          </AddBtn>
        </RecomendBox>
        <DietNameBox>
          <RawSvg width="24px" height="24px">
            <use xlinkHref={sprite + '#icon-running-man'} />
          </RawSvg>
          <DietName>{title}</DietName>
        </DietNameBox>
        <DietInfoList>
          <DietInfoItem>
            <DietInfoHeading>Calories:</DietInfoHeading>
            <DietInfoValue> {calories}</DietInfoValue>
          </DietInfoItem>
          <DietInfoItem>
            <DietInfoHeading>Category: </DietInfoHeading>
            <DietInfoValue>{category}</DietInfoValue>
          </DietInfoItem>
          <DietInfoItem>
            <DietInfoHeading>Weight: </DietInfoHeading>
            <DietInfoValue>{weight}</DietInfoValue>
          </DietInfoItem>
        </DietInfoList>
      </DietBlock>
    </>
  );
};
