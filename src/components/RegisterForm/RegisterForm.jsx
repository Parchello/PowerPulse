import {Formik, Form} from "formik"
import * as Yup from 'yup';
import { RegisterField, Label, RegisterErrorMessage, Button, FormContainer } from "./RegisterForm.styled";
// import { useDispatch } from "react-redux"

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

export const RegisterForm = () => {
    // const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={RegisterSchema}
    //   onSubmit={() => {}}
    >
      <Form>
        <FormContainer>
                <Label >
                Name
                <RegisterField type="text" name="name" required />
                <br />
                <RegisterErrorMessage name="name" component="span" />
                </Label>
                <Label>
                Email
                <RegisterField type="email" name="email"  required />
                <br />
                <RegisterErrorMessage name="email" component="span" />
                </Label>
                <Label>
                Password
                <RegisterField type="password" name="password" required />
                <br />
                <RegisterErrorMessage name="password" component="span" />
                </Label>
        </FormContainer>

        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  );
};