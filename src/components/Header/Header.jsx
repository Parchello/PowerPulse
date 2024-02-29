import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/register">Sign up</Link>
        <Link to="/login">Sign in</Link>
      </nav>
    </div>
  );
};
