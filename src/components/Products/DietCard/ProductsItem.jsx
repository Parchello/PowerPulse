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

export const ProductsItem = () => {
  return (
    <>
      <DietBlock>
        <DietTextBox>
          <DietText>Diet</DietText>
        </DietTextBox>
        <RecomendBox>
          <RecomendStatusCircle></RecomendStatusCircle>
          <RecommendStatusText>Recommended</RecommendStatusText>
          <AddBtn onClick={() => setModalProductsIsOpen(true)}>
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
          <DietName>
            Here will be name of diet
            {title}
          </DietName>
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
