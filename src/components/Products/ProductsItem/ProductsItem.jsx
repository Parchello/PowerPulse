import { useDispatch } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import { ModalProducts } from '../ModalProducts/ModalProducts';
import {
  AddButton,
  ButtonBox,
  CaloriesBox,
  CaloriesText,
  CaloriesValue,
  CancelBox,
  DietInputBox,
  DietNameText,
  GramsInput,
} from '../ModalProducts/ModalProducts.styled';
import {
  BackBtn,
  CaloriesWellBox,
  CaloriesWellText,
  CaloriesWellValue,
  ImgBox,
  NextProductBtn,
  RawSvg,
  WellDoneTitle,
  WellDonebox,
} from '../ModalWellDone/ModaWellDone.styled';
import { ModalWellDone } from '../ModalWellDone/ModalWellDone';
import {
  DietBlock,
  DietTextBox,
  DietText,
  RecomendBox,
  RecommendStatusText,
  AddBtn,
  DietNameBox,
  DietName,
  DietInfoList,
  DietInfoItem,
  DietInfoHeading,
  DietInfoValue,
} from './ProductsItem.styled';
import avocadoImage from '../../../assets/img/avocado-img.png';
import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { addProductToDiary } from '../../../redux/products/operations';

export const ProductsItem = ({
  value: { calories, category, title, weight, groupBloodNotAllowed, _id },
  blood,
}) => {
  const dispatch = useDispatch();

  const [modalProductsIsOpen, setModalProductsIsOpen] = useState(false);
  const [modalWellDoneIsOpen, setModalWellDoneIsOpen] = useState(false);
  const [inputedWeight, setInputedWeight] = useState(0);

  const caloriesValue = (inputedWeight * calories) / 100;

  const handleBackClick = () => {
    setModalWellDoneIsOpen(false);
  };

  //   product(product ID) - string; required
  // date - string; format dd/mm/YYYY; required
  // amount - number; minimum 1(g); required
  // calories - number; minimum 1; required

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const productData = {
    productId: _id,
    date: formatDate(new Date()),
    amount: Number(inputedWeight),
    calories: Number(caloriesValue),
  };

  return (
    <>
      <DietBlock>
        <DietTextBox>
          <DietText>Diet</DietText>
        </DietTextBox>
        <RecomendBox>
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <RecommendStatusText isRecommended={groupBloodNotAllowed[blood]}>
              {groupBloodNotAllowed[blood] ? 'Not Recommended' : 'Recommended'}
            </RecommendStatusText>
          </StyleSheetManager>

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

      <ModalProducts
        isOpen={modalProductsIsOpen}
        onClose={() => setModalProductsIsOpen(false)}
      >
        <DietInputBox>
          <DietNameText type="text" placeholder={title} readOnly />
          <GramsInput
            type="number"
            placeholder="grams"
            onChange={(evt) => setInputedWeight(evt.target.value)}
          />
        </DietInputBox>

        <CaloriesBox>
          <CaloriesText>Calories:</CaloriesText>
          <CaloriesValue>{caloriesValue}</CaloriesValue>
        </CaloriesBox>

        <ButtonBox>
          <AddButton
            onClick={() => {
              dispatch(addProductToDiary(productData));
              // console.log(productData);
              setModalProductsIsOpen(false);
              setModalWellDoneIsOpen(true);
            }}
          >
            Add to diary
          </AddButton>
          <CancelBox onClick={() => setModalProductsIsOpen(false)}>
            Cancel
          </CancelBox>
        </ButtonBox>
      </ModalProducts>
      <ModalWellDone
        isOpen={modalWellDoneIsOpen}
        onClose={() => setModalWellDoneIsOpen(false)}
      >
        <ImgBox>
          <img src={avocadoImage} alt="avocado" />
        </ImgBox>
        <div>
          <WellDonebox>
            <WellDoneTitle>Well done</WellDoneTitle>
            <CaloriesWellBox>
              <CaloriesWellText>Calories:</CaloriesWellText>
              <CaloriesWellValue>{caloriesValue}</CaloriesWellValue>
            </CaloriesWellBox>
          </WellDonebox>

          <NextProductBtn onClick={() => setModalWellDoneIsOpen(false)}>
            Next product
          </NextProductBtn>
          <BackBtn to="/diary" onClick={handleBackClick}>
            To the diary
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-gray-arrow'} />
            </svg>
          </BackBtn>
        </div>
      </ModalWellDone>
    </>
  );
};
