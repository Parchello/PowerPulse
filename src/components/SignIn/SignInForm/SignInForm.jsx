
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, FormGroup, ErrorMessage, Button, Title, Text } from './SignInForm.styled';


const signInSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  

export const SignInForm = ({handleSubmit}) => {
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
      onSubmit={(values, actions) => {
        handleSubmit(values);
        console.log(values);
        actions.resetForm();
      }}
    >
      {({errors, touched}) => (
      <Form>
        <FormGroup>
          <Field name="email" id = "email" type = "email"  placeholder = "Email" className={errors.email && touched.email ? 'invalid'  : (touched.email && !errors.email) ? 'valid' : ''}/>
          <ErrorMessage name="email" component="span" />
        </FormGroup>
        <FormGroup>
          <Field name="password"  id = "password" type = "password" placeholder = "Password" className={errors.password && touched.password ? 'invalid' : (touched.password && !errors.password) ? 'valid' : ''}/>
          <ErrorMessage name="password" component="span" />
        </FormGroup>
        <Button type="submit">Sign In</Button>
      </Form>)}
    </Formik>
    </div>
  );
};





