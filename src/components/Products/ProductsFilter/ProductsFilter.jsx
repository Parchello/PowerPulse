import sprite from '../../../assets/sprite.svg';
import {
  Filters,
  FiltersContainer,
  SearchInput,
  SelectorA,
  SelectorBox,
  SelectorC,
  SvgIcon,
} from './ProductsFilter.styled';

export const ProductsFilter = () => {
  return (
    <FiltersContainer>
      <Filters>
        <div>
          <SearchInput type="text" placeholder="Search" />
          <SvgIcon width="18px" height="18px">
            <use xlinkHref={sprite + '#icon-search'} />
          </SvgIcon>
        </div>
        <SelectorBox>
          <SelectorC name="Categories" id="cat" placeholder="Categories">
            <option value disabled selected>
              Categories
            </option>
          </SelectorC>
          <SelectorA name="all" id="all">
            <option value selected>
              All
            </option>
            <option value="">Recommended</option>
            <option value="">Not recommended</option>
          </SelectorA>
        </SelectorBox>
      </Filters>
    </FiltersContainer>
  );
};
