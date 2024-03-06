import {Formik, Form} from "formik"
import * as Yup from 'yup';
import { RegisterField, Message, ErrorsMargin, SuccessMessage, InputContainer, Label, Button, FormContainer } from "./RegisterForm.styled";
// import { useDispatch } from "react-redux"

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
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
      onSubmit={() => {
        // handleSubmit(values);
        // actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
      <Form>
      <FormContainer>
          <InputContainer>
          <RegisterField id='name' type="text" name="name" required className={errors.name && touched.name ? 'invalid' : (touched.name && !errors.name) ? 'valid' : ''} />
          <Label htmlFor="name" >Name</Label>
          {touched.name && (errors.name || !errors.name) && (
          <ErrorsMargin>
          {errors.name && <Message>{errors.name}</Message>}
          {!errors.name && <SuccessMessage>Success name</SuccessMessage>}
          </ErrorsMargin>
      )}
          </InputContainer>

          <InputContainer>
          <RegisterField id='email' type="email" name="email" required className={errors.email && touched.email ? 'invalid' : (touched.email && !errors.email) ? 'valid' : ''} />
          <Label htmlFor="email">Email</Label>
          {touched.email && (errors.email || !errors.email) && (
          <ErrorsMargin>
          {errors.email && <Message>{errors.email}</Message>}
          {!errors.email && <SuccessMessage>Success email</SuccessMessage>}
          </ErrorsMargin>
      )}
          </InputContainer>

          <InputContainer>
          <RegisterField id='password' type="password" name="password" required className={errors.password && touched.password ? 'invalid' : (touched.password && !errors.password) ? 'valid' : ''} />
          <Label htmlFor="password">Password</Label>
          {touched.password && (errors.password || !errors.password) && (
          <ErrorsMargin>
          {errors.password && <Message>{errors.password}</Message>}
          {!errors.password && <SuccessMessage>Success password</SuccessMessage>}
          </ErrorsMargin>
      )}
          </InputContainer>
        </FormContainer>

        <Button type="submit">Sign Up</Button>
      </Form>
      )}
    </Formik>
  );
};