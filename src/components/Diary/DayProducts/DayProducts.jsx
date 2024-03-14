import { NotFoundProducts } from '../NotFoundProducts/NotFoundProducts';
import { PositionCorrectorDiv } from '../NotFoundProducts/NotFoundProducts.styled';
import { ProductItem } from '../ProductItem/ProductItem';
import {
  DairyProductsField,
  ListOfProducts,
  ProdLink,
} from './DayProducts.styled';

import sprite from '../../../assets/sprite.svg';
import { ExersTitle } from '../DayExercises/DayExercises.styled';
import { HeadOfField } from '../HeadOfField.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDiaryProducts } from '../../../redux/diary/operations';
import { selectDiaryProducts } from '../../../redux/diary/selectors';
import { Token } from '../../../redux/profile/selectors';

export const ProductsTable = () => {
  const dispatch = useDispatch();
  const token = useSelector(Token);

  const date = '14/03/2024';

  const initialDate = useSelector((state) => state.diary.initialDate);

  // const formatingDate = (date) => {
  //   const dateObject = new Date(date);
  //   const day = String(dateObject.getDate()).padStart(2, '0');
  //   const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  //   const year = dateObject.getFullYear();
  //   return `${day}/${month}/${year}`;
  // };

  // const dateNow = formatingDate(initialDate);
  console.log('FFFFFFFF', initialDate);
  useEffect(() => {
    const request = {
      token,
      date: initialDate,
    };
    dispatch(fetchDiaryProducts(request));
  }, [dispatch, token, initialDate]);
  const products = useSelector(selectDiaryProducts);
  console.log('products: ', products);
  return (
    <DairyProductsField>
      <HeadOfField>
        <ExersTitle>Products</ExersTitle>
        <ProdLink to="/products">Add Product</ProdLink>
        <svg width="16px" height="16px">
          <use xlinkHref={sprite + '#icon-red-raw'} />
        </svg>
      </HeadOfField>
      {products.length > 0 ? (
        <ListOfProducts>
          {products.map((i) => (
            // console.log(i.productId._id)
            <div key={i.productId._id}>
              <ProductItem prop={i} />
            </div>
          ))}
        </ListOfProducts>
      ) : (
        <PositionCorrectorDiv>
          <NotFoundProducts />
        </PositionCorrectorDiv>
      )}
    </DairyProductsField>
  );
};

export default ProductsTable;
