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

import { selectFilter } from '../../../redux/products/selectors';

const filterProduct = (productsList, filter) => {
  const { search, category, recommended } = filter;

  const isMatchSearchQuery = search
    ? productsList.filter((el) =>
        el.title.toLowerCase().includes(search.toLowerCase())
      )
    : productsList;

  const isMatchCategory = category
    ? isMatchSearchQuery.filter((el) => el.category === category)
    : isMatchSearchQuery;

  const isMatchRecommendation =
    recommended === 'Recommended'
      ? isMatchCategory.filter((i) => !i.recommended)
      : recommended === 'NotRecommended'
        ? isMatchCategory.filter((i) => i.recommended)
        : isMatchCategory;

  return isMatchRecommendation;
};

export const DietCardsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const bloodType = '3';

  const products = useSelector(selectAllProducts)
    // .slice(0, 1000) //можна залишити замість пагінації. Не таке сильне навантаження будуе. І лагів менше
    .map((item) => ({
      ...item,
      recommended: item.groupBloodNotAllowed[bloodType],
    }));

  const filteredCards = filterProduct(products, filter);

  // треба описати логіку закриття модалки по бекдропу і по Esc

  return (
    <>
      {/* Лоадер якогось хєра не застосовується 
      також треба обробити повідомлення про пустий список*/}
      <DietBlockContainer>
        {isLoading ? (
          <Loader />
        ) : (
          filteredCards.map((item) => (
            <ProductsItem key={item._id} value={item} blood={bloodType} />
          ))
        )}
      </DietBlockContainer>
    </>
  );
};
