import { NotFound } from "../../components/NotFound/NotFound";
import {BackGround} from "../../components/SignIn/Background.styled"
const ErrorPage = () => {
  return <div>
    <BackGround>
    <NotFound/>
    </BackGround>
  </div>;
};

export default ErrorPage;
