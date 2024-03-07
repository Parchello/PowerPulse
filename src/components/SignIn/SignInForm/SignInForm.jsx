
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, FormGroup, SuccessMessage, Message, Button, Title, Text } from './SignInForm.styled';
import { useDispatch } from 'react-redux';
import {logIn} from "../../../redux/auth/operations"



const signInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'Invalid email format. Example of valid email: example@com.ua'
    )
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});



 export const SignInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values)); 
    actions.resetForm();
  };
  return (
    <div>
      <Title>Sign In</Title>
      <Text>Welcome! Please enter your credentials to login to the platform:</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={signInSchema}
        // onSubmit = {(values, actions) => {
        //   handleSubmit(values);
        //   actions.resetForm();
        // }}

        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormGroup>
              <Field name="email" id="email" type="email" placeholder="Email" className={errors.email && touched.email ? 'invalid' : (touched.email && !errors.email) ? 'valid' : ''} />
              {touched.email && errors.email && <Message>{errors.email}</Message>}
              {touched.email && !errors.email && <SuccessMessage>Success email</SuccessMessage>}
            </FormGroup>
            <FormGroup>
              <Field name="password" id="password" type="password" placeholder="Password" className={errors.password && touched.password ? 'invalid' : (touched.password && !errors.password) ? 'valid' : ''} />
              {touched.password && errors.password && <Message>{errors.password}</Message>}
              {touched.password && !errors.password && <SuccessMessage>Success password</SuccessMessage>}
            </FormGroup>
            <Button type="submit">Sign In</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
