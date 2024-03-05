import { AddProductBtn, DairyProductsField } from './DayProducts.styled';

const DayProducts = () => {
  return (
    <DairyProductsField>
      <p>Products</p>
      <AddProductBtn href="#">Add Product</AddProductBtn>
    </DairyProductsField>
  );
};

export default DayProducts;
