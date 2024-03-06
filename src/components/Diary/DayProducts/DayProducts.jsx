import { NotFoundProducts } from '../NotFoundProducts/NotFoundProducts';
import { PositionCorrectorDiv } from '../NotFoundProducts/NotFoundProducts.styled';
import { ProductItem } from '../ProductItem/ProductItem';
import {
  DairyProductsField,
  ListOfProducts,
  ProdLink,
} from './DayProducts.styled';

import sprite from '../../../assets/sprite.svg';
import { ExersTitle } from '../DayExercises/DayExercises.styled';

export const ProductsTable = (prop) => {
  const { dataProp } = prop;
  return (
    <DairyProductsField>
      <ExersTitle>Products</ExersTitle>
      <ProdLink to="/products">Add Product</ProdLink>
      <svg width="16px" height="16px">
        <use xlinkHref={sprite + '#icon-red-raw'} />
      </svg>
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
