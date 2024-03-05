import { BgImgHolder } from './ProductsLayOut.styled';

export const ProductsLayout = ({ children }) => {
  return (
    <>
      <BgImgHolder>{children}</BgImgHolder>
    </>
  );
};
