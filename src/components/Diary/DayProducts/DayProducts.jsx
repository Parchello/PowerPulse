import { NotFoundProducts } from '../NotFoundProducts/NotFoundProducts';
import { PositionCorrectorDiv } from '../NotFoundProducts/NotFoundProducts.styled';
import { ProductItem } from '../ProductItem/ProductItem';
import {
  AddProductBtn,
  DairyProductsField,
  HeaderOfProductField,
  ListOfProducts,
} from './DayProducts.styled';

export const ProductsTable = (prop) => {
  const { dataProp } = prop;
  return (
    <DairyProductsField>
      <HeaderOfProductField>
        <p>Products</p>
        <AddProductBtn href="#">Add Product</AddProductBtn>
      </HeaderOfProductField>

      {dataProp.length > 0 ? (
        <ListOfProducts>
          {dataProp.map((i) => (
            <ProductItem key={i.title} prop={i} />
          ))}
        </ListOfProducts>
      ) : (
        <PositionCorrectorDiv>
          <NotFoundProducts />
        </PositionCorrectorDiv>
      )}
    </DairyProductsField>
  );
};

export default ProductsTable;
