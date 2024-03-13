import { Heading } from './TitlePage.styled';

const TitlePage = ({ category }) => {
  return category ? (
    <Heading>{category} </Heading>
  ) : (
    <Heading>Exersises</Heading>
  );
};
export default TitlePage;
