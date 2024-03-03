import { AddProductBtn, DairyProductsField } from './DairyProducts.styled';

const DairyProducts = () => {
  return (
    <DairyProductsField>
      <p>Products</p>
      <AddProductBtn href="#">Add Product</AddProductBtn>
    </DairyProductsField>
  );
};

export default DairyProducts;
