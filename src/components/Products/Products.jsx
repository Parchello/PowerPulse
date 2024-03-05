import { DietCardsList } from './DietCardsList/DietCardsList';
import { Container, MainText } from './Products.styled';
import { ProductsFilter } from './ProductsFilter/ProductsFilter';

export const Products = () => {
  return (
    <Container>
      <MainText>Products</MainText>
      <ProductsFilter />
      <DietCardsList />
    </Container>
  );
};
