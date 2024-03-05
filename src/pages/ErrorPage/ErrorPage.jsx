import { NotFound } from "../../components/NotFound/NotFound";
import {BackGround} from "../../components/SignIn/Background.styled";
import { NotFoundWrapper } from "../../components/NotFound/ContainerNotFound.styled";
const ErrorPage = () => {
  return (<div>
    <NotFoundWrapper>
    <BackGround>
    <NotFound/>
    </BackGround>
    </NotFoundWrapper>
  </div>);
};

export default ErrorPage;
