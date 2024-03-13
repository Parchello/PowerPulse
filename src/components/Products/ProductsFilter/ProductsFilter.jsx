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
  Option,
  SvgIcon,
  SvgIconClearInput,
} from './ProductsFilter.styled';
import { getProductsCategories } from '../../../redux/products/operations';
import {
  selectCategory,
  selectProductsCategories,
  selectSearchFilter,
  selectRecomended,
} from '../../../redux/products/selectors';
import {
  setFilter,
  setCategory,
  setRecomended,
} from '../../../redux/products/productsSlice';

export const ProductsFilter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCategories());
  }, [dispatch]);

  const categoriesList = useSelector(selectProductsCategories); //список категорій
  const searchFilter = useSelector(selectSearchFilter);
  const categoryFilter = useSelector(selectCategory);
  const recomendedFilter = useSelector(selectRecomended);

  const isSearchNotEmpty = searchFilter.trim() !== '';

  return (
    <MainFiltersContainer>
      <MainText>Products</MainText>
      <Filters>
        <SearchInputBox>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchFilter}
            onChange={(evt) => dispatch(setFilter(evt.target.value))}
          />
          <SvgIcon width="18px" height="18px">
            <use xlinkHref={sprite + '#icon-search'} />
          </SvgIcon>
          {isSearchNotEmpty && (
            <SvgIconClearInput
              width="18px"
              height="18px"
              onClick={() => dispatch(setFilter(''))}
            >
              <use xlinkHref={sprite + '#icon-red-cross'} />
            </SvgIconClearInput>
          )}
        </SearchInputBox>

        <SelectorC
          value={categoryFilter}
          name="Categories"
          id="cat"
          placeholder="Categories"
          onChange={(evt) => dispatch(setCategory(evt.target.value))}
        >
          <Option value="Categories" defaultValue>
            Categories
          </Option>
          {categoriesList.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </SelectorC>
        <SelectorA
          value={recomendedFilter}
          name="all"
          id="all"
          onChange={(evt) => dispatch(setRecomended(evt.target.value))}
        >
          <Option value="All" defaultValue>
            All
          </Option>
          <Option value="Recommended">Recommended</Option>
          <Option value="NotRecommended">Not recommended</Option>
        </SelectorA>
      </Filters>
    </MainFiltersContainer>
  );
};
