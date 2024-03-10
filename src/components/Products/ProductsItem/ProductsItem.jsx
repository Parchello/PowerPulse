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
import avocadoImage from '../../../assets/img/avocado-img.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CurrentUser } from '../../../redux/profile/selectors';

export const ProductsItem = ({
  value: { calories, category, title, weight, groupBloodNotAllowed },
  
}) => {
  const [modalProductsIsOpen, setModalProductsIsOpen] = useState(false);
  const [modalWellDoneIsOpen, setModalWellDoneIsOpen] = useState(false);
  const [inputedCalories, setInputedCalories] = useState(0);
  // const user = useSelector(CurrentUser)
  // const bloddType = user.params;
  console.log(groupBloodNotAllowed);

  const bloodType = "3";

  // тут треба ще зробити так, щоб Recommended світився червоним або зеленим
  //в залежності від того яка у користувача група крові

  return (
    <>
      <DietBlock>
        <DietTextBox>
          <DietText>Diet</DietText>
        </DietTextBox>
        <RecomendBox>
          <RecomendStatusCircle
            isRecommended={groupBloodNotAllowed[bloodType]}
          ></RecomendStatusCircle>
          <RecommendStatusText>
            {groupBloodNotAllowed[bloodType] ? 'Not Recommended' : 'Recommended'}
          </RecommendStatusText>
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
            onChange={(evt) => setInputedCalories(evt.target.value)}
          />
        </DietInputBox>

        <CaloriesBox>
          <CaloriesText>Calories:</CaloriesText>
          <CaloriesValue>{inputedCalories / 100}</CaloriesValue>
        </CaloriesBox>

        <ButtonBox>
          <AddButton
            onClick={() => {
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
              <CaloriesWellValue>{inputedCalories / 100}</CaloriesWellValue>
            </CaloriesWellBox>
          </WellDonebox>

          <NextProductBtn>Next product</NextProductBtn>
          <BackBtn>
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
