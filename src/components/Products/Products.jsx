// import { HeroLayout } from '../HeroLeyout/HeroLayout';
import sprite from '../../assets/sprite.svg';
import {
  Container,
  DietBlock,
  DietBlockContainer,
  Filters,
  FiltersContainer,
  MainText,
  SearchInput,
  SelectorA,
  SelectorBox,
  SelectorC,
  SvgIcon,
} from './Products.styled';

export const Products = () => {
  return (
    <Container>
      <MainText>Products</MainText>
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
              <option value disabled selected>
                All
              </option>
            </SelectorA>
          </SelectorBox>
        </Filters>
      </FiltersContainer>

      <DietBlockContainer>
        <DietBlock></DietBlock>
        <DietBlock></DietBlock>
        <DietBlock></DietBlock>
        <DietBlock></DietBlock>
        <DietBlock></DietBlock>
        <DietBlock></DietBlock>
        <DietBlock></DietBlock>
        <DietBlock></DietBlock>
      </DietBlockContainer>
    </Container>
  );
};
