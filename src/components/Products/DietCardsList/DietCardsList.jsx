import avocadoImage from '../../../assets/img/avocado-img.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import { ModalProducts } from '../ModalProducts/ModalProducts';
import {
  // AddBtn,
  // DietBlock,
  DietBlockContainer,
  // DietInfoHeading,
  // DietInfoItem,
  // DietInfoList,
  // DietInfoValue,
  // DietName,
  // DietNameBox,
  // DietText,
  // DietTextBox,
  // RecomendBox,
  // RecomendStatusCircle,
  // RecommendStatusText,
} from './DietCardsList.styled';
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
import { ModalWellDone } from '../ModalWellDone/ModalWellDone';
import {
  BackBtn,
  CaloriesWellBox,
  CaloriesWellText,
  CaloriesWellValue,
  ImgBox,
  NextProductBtn,
  // RawSvg,
  WellDoneTitle,
  WellDonebox,
} from '../ModalWellDone/ModaWellDone.styled';
import { getAllProducts } from '../../../redux/products/operations';
// import { ProductsItem } from '../DietCard/ProductsItem';
import {
  selectAllProducts,
  // selectIsLoading,
  // selectVisibleProducts,
} from '../../../redux/products/selectors';

export const DietCardsList = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const [modalProductsIsOpen, setModalProductsIsOpen] = useState(false);
  const [modalWellDoneIsOpen, setModalWellDoneIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const cards = useSelector(selectAllProducts);
  // const filteredCards = useSelector(selectVisibleProducts)
  console.log(cards);

  // <AddBtn onClick={() => setModalProductsIsOpen(true)}>

  return (
    <>
      {
        <DietBlockContainer>
          {/* {cards.allowedProducts.map(item => <ProductsItem key={item.id} values={item} />)} */}
        </DietBlockContainer>
      }
      <ModalProducts
        isOpen={modalProductsIsOpen}
        onClose={() => setModalProductsIsOpen(false)}
      >
        <DietInputBox>
          <DietNameText type="text" placeholder="Name of diet" readOnly />
          <GramsInput type="text" placeholder="grams" />
        </DietInputBox>

        <CaloriesBox>
          <CaloriesText>Calories:</CaloriesText>
          <CaloriesValue>00</CaloriesValue>
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
              <CaloriesWellValue>00</CaloriesWellValue>
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
