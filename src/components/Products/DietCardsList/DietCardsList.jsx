import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DietBlockContainer } from './DietCardsList.styled';

import { getAllProducts } from '../../../redux/products/operations';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import {
  selectAllProducts,
  selectIsLoading,
} from '../../../redux/products/selectors';
import { Loader } from '../../Loader/Loader';

import { EmptyProductsListMessage } from '../EmptyProductsListMessage/EmptyProductsListMessage';
// import { selectFilter } from '../../../redux/products/selectors';
import { SelectUser } from '../../../redux/profile/selectors';

export const DietCardsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const userBloodType = useSelector(SelectUser).blood;
  // const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector(selectAllProducts);

  return (
    <>
      <DietBlockContainer>
        {isLoading ? (
          <Loader />
        ) : products.length === 0 ? (
          <EmptyProductsListMessage />
        ) : (
          products.map((item) => (
            <ProductsItem key={item._id} value={item} blood={userBloodType} />
          ))
        )}
      </DietBlockContainer>
    </>
  );
};
