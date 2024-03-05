import { DietCardsList } from './DietCardsList/DietCardsList';
import { Container } from './Products.styled';
import { ProductsFilter } from './ProductsFilter/ProductsFilter';
import { ProductsLayout } from './ProductsLayOut/ProductsLayOut';

export const Products = () => {
  return (
    <ProductsLayout>
      <Container>
        <ProductsFilter />
        <DietCardsList />
      </Container>
    </ProductsLayout>
  );
};
