import { useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/exercises/selectors';
import { Heading } from './TitlePage.styled';
// import { useEffect } from 'react';
// import { setTitle } from '../../../redux/exercises/exercisesSlise';

const TitlePage = () => {
  //   const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  //   const title = useSelector(selectTitle);

  //   useEffect(() => {
  //     dispatch(setTitle(filters));
  //   }, [dispatch, filters]);

  //   return <Heading>{filters}</Heading>;
  return filters ? <Heading>{filters} </Heading> : <Heading>Exersises</Heading>;
};
export default TitlePage;
