import { AddProductBtn, DairyProductsField } from './DiaryProducts.styled';

const DairyProducts = () => {
  return (
    <DairyProductsField>
      <p>Products</p>
      <AddProductBtn href="#">Add Product</AddProductBtn>
    </DairyProductsField>
  );
};

export default DairyProducts;
