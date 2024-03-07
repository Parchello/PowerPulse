import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import sprite from '../../../assets/sprite.svg';
import { useState } from 'react';
import {
  RegisterField,
  Message,
  ErrorsMargin,
  SuccessMessage,
  InputContainer,
  Button,
  FormContainer,
  ErrorSvg,
  SuccessSvg,
} from './RegisterForm.styled';
// import { useDispatch } from "react-redux"

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const RegisterForm = () => {
  const [isVisiblePsw, setIsVisiblePsw] = useState(false);

  const changeInputType = () => {
    setIsVisiblePsw(!isVisiblePsw);
  };
  // const dispatch = useDispatch();

  const successSvg = (
    <SuccessSvg>
      <use xlinkHref={sprite + '#icon-checkbox-circle-fillGreen'}></use>
    </SuccessSvg>
  );

  const errorSvg = (
    <ErrorSvg>
      <use xlinkHref={sprite + '#icon-checkbox-circle-fill'}></use>
    </ErrorSvg>
  );

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
              <RegisterField
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
                className={
                  errors.name && touched.name
                    ? 'invalid'
                    : touched.name && !errors.name
                      ? 'valid'
                      : ''
                }
              />
              {/* <Label htmlFor="name" >Name</Label> */}
              {touched.name && (errors.name || !errors.name) && (
                <ErrorsMargin>
                  {errors.name && (
                    <Message>
                      {errorSvg} {errors.name}
                    </Message>
                  )}
                  {!errors.name && (
                    <SuccessMessage>{successSvg}Success name</SuccessMessage>
                  )}
                </ErrorsMargin>
              )}
            </InputContainer>

            <InputContainer>
              <RegisterField
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className={
                  errors.email && touched.email
                    ? 'invalid'
                    : touched.email && !errors.email
                      ? 'valid'
                      : ''
                }
              />
              {/* <Label htmlFor="email">Email</Label> */}
              {touched.email && (errors.email || !errors.email) && (
                <ErrorsMargin>
                  {errors.email && (
                    <Message>
                      {errorSvg}
                      {errors.email}
                    </Message>
                  )}
                  {!errors.email && (
                    <SuccessMessage>
                      {successSvg}
                      Success email
                    </SuccessMessage>
                  )}
                </ErrorsMargin>
              )}
            </InputContainer>

            <InputContainer>
              <RegisterField
                id="password"
                type={isVisiblePsw ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                required
                className={
                  errors.password && touched.password
                    ? 'invalid'
                    : touched.password && !errors.password
                      ? 'valid'
                      : ''
                }
              />
              {/* <Label htmlFor="password">Password</Label> */}
              {touched.password && (errors.password || !errors.password) && (
                <ErrorsMargin>
                  {errors.password && (
                    <Message>
                      {errorSvg}
                      {errors.password}
                    </Message>
                  )}
                  {!errors.password && (
                    <SuccessMessage>
                      {successSvg}Success password
                    </SuccessMessage>
                  )}
                </ErrorsMargin>
              )}
              <button type="button" onClick={changeInputType}>
                <svg>
                  <use xlinkHref={sprite + '#icon-play'}></use>
                </svg>
              </button>
            </InputContainer>
          </FormContainer>

          <Button type="submit">Sign Up</Button>
        </Form>
      )}
    </Formik>
  );
};
