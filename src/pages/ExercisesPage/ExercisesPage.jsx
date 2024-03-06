import Exercises from '../../components/Exercises/Exercises.jsx';
import { Provider } from 'react-redux';
import { store } from '../../components/Exercises/store.js';

const ExercisesPage = () => {
  return (
    <div>
      <Provider store={store}>
        <Exercises></Exercises>
      </Provider>
    </div>
  );
};

export default ExercisesPage;
