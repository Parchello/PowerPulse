import sprite from '../../../assets/sprite.svg';
import { ExersTitle } from '../DayExercises/DayExercises.styled';
import { DairyProductsField, ProdLink } from './DayProducts.styled';

const DayProducts = () => {
  return (
    <DairyProductsField>
      <ExersTitle>Products</ExersTitle>
      <ProdLink to="/products">Add Product</ProdLink>
      <svg width="16px" height="16px">
        <use xlinkHref={sprite + '#icon-red-raw'} />
      </svg>
    </DairyProductsField>
  );
};

export default DayProducts;
