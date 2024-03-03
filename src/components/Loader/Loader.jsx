import { LoaderWrapper } from './Loader.styled';
import PropagateLoader from 'react-spinners/PropagateLoader';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <PropagateLoader color="#e6533c" size={35} speedMultiplier={0.75} />
    </LoaderWrapper>
  );
};
