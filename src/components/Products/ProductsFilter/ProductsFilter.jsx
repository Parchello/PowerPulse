import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import {
  Filters,
  MainFiltersContainer,
  MainText,
  SearchInput,
  SearchInputBox,
  SelectorA,
  SelectorC,
  SvgIcon,
} from './ProductsFilter.styled';
import { getProductsCategories } from '../../../redux/products/operations';
import { selectProductsCategories } from '../../../redux/products/selectors';

export const ProductsFilter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCategories());
  }, [dispatch]);

  const categoriesList = useSelector(selectProductsCategories);

  return (
    <MainFiltersContainer>
      <MainText>Products</MainText>
      <Filters>
        <SearchInputBox>
          <SearchInput type="text" placeholder="Search" />
          <SvgIcon width="18px" height="18px">
            <use xlinkHref={sprite + '#icon-search'} />
          </SvgIcon>
        </SearchInputBox>

        <SelectorC name="Categories" id="cat" placeholder="Categories">
          <option value disabled selected>
            Categories
          </option>
          {categoriesList.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </SelectorC>
        <SelectorA name="all" id="all">
          <option value selected>
            All
          </option>
          <option value="">Recommended</option>
          <option value="">Not recommended</option>
        </SelectorA>
      </Filters>
    </MainFiltersContainer>
  );
};
