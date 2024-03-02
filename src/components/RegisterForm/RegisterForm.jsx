import {ErrorMessage, Formik, Form, Field} from "formik"
import * as Yup from 'yup';
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
        <label>
          Name
          <Field type="text" name="name" required />
          <br />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          Email
          <Field type="email" name="email" placeholder="example@example.com" required />
          <br />
          <ErrorMessage name="email" component="span" />
        </label>
        <label>
          Password
          <Field type="password" name="password" required />
          <br />
          <ErrorMessage name="password" component="span" />
        </label>

        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};