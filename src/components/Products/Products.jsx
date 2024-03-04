import { DietCardsList } from './DietCardsList/DietCardsList';
import { Container, MainText } from './Products.styled';
import { ProductsFilter } from './ProductsFilter/ProductsFilter';

export const Products = () => {
  return (
    <Container>
      <MainText>Products 111</MainText>
      <ProductsFilter />
      <DietCardsList />
    </Container>
  );
};
