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
import { getAllProducts, getProductsCategories } from '../../../redux/products/operations';
import {
  // selectCategory,
  selectProductsCategories,
  // selectSearchFilter,
  // selectRecomended,
} from '../../../redux/products/selectors';
import {
  setFilter,
  setCategory,
  setRecomended,
} from '../../../redux/products/productsSlice';
import { useSearchParams } from 'react-router-dom';

export const ProductsFilter = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('title') ?? '';
  const searchCategory = searchParams.get('category') ?? '';
  const searchRecommend = searchParams.get('recommended') ?? '';

  const updateFilterParams = (key, value) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    dispatch(getProductsCategories());
  }, []);

  useEffect(() => {
    dispatch(setFilter(searchQuery));
    dispatch(setCategory(searchCategory));
    dispatch(setRecomended(searchRecommend));
    dispatch(
      getAllProducts({
        title: searchQuery,
        category: searchCategory,
        recommended: searchRecommend,
      })
    );
  }, [dispatch, searchQuery, searchCategory, searchRecommend]);

  const categoriesList = useSelector(selectProductsCategories); //список категорій
  // const searchFilter = useSelector(selectSearchFilter);
  // const categoryFilter = useSelector(selectCategory);
  // const recomendedFilter = useSelector(selectRecomended);

  const isSearchNotEmpty = searchQuery.trim() !== '';

  return (
    <MainFiltersContainer>
      <MainText>Products</MainText>
      <Filters>
        <SearchInputBox>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(evt) => updateFilterParams('title', evt.target.value)}
          />
          <SvgIcon width="18px" height="18px">
            <use xlinkHref={sprite + '#icon-search'} />
          </SvgIcon>
          {isSearchNotEmpty && (
            <SvgIconClearInput
              width="18px"
              height="18px"
              onClick={() => {
                setSearchParams({}), dispatch(setFilter(''));
              }}
            >
              <use xlinkHref={sprite + '#icon-red-cross'} />
            </SvgIconClearInput>
          )}
        </SearchInputBox>

        <SelectorC
          value={searchCategory}
          name="Categories"
          id="cat"
          placeholder="Categories"
          onChange={(evt) => updateFilterParams('category', evt.target.value)}
        >
          <Option value="" defaultValue>
            Categories
          </Option>
          {categoriesList.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </SelectorC>
        <SelectorA
          value={searchRecommend}
          name="all"
          id="all"
          onChange={(evt) =>
            updateFilterParams('recommended', evt.target.value)
          }
        >
          <Option value="" defaultValue>
            All
          </Option>
          <Option value={"true"}>Recommended</Option>
          <Option value="false">Not recommended</Option>
        </SelectorA>
      </Filters>
    </MainFiltersContainer>
  );
};
