import { Link } from 'react-router-dom';
export const LinkToSignUp = () => {
  return (
    <div>
      <p>Don’t have an account?</p>
      <Link to="/register"> Sign Up</Link>
    </div>
  );
};
