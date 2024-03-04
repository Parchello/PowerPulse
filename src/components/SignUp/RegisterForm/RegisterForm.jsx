import {Formik, Form} from "formik"
import * as Yup from 'yup';
import { RegisterField, InputContainer, Label, Button, FormContainer } from "./RegisterForm.styled";
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
          <InputContainer>
          <Label htmlFor="name">Name</Label>
          <RegisterField id='name' type="text" name="name" required />
          {/* <RegisterErrorMessage name="name" component="span" /> */}
          </InputContainer>

          <InputContainer>
          <Label htmlFor="email">Email</Label>
          <RegisterField id='email' type="email" name="email" required />
          {/* <RegisterErrorMessage name="email" component="span" /> */}
          </InputContainer>

          <InputContainer>
          <Label htmlFor="password">Password</Label>
          <RegisterField id='password' type="password" name="password" required />
          {/* <RegisterErrorMessage name="password" component="span" /> */}
          </InputContainer>
        </FormContainer>

        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  );
};