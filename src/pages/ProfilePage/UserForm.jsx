// import styled from 'styled-components';
import { useFormik } from 'formik';

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      height: '',
      currentWeight: '',
      desiredWeight: '',
      dateOfBirth: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="height">height</label>
      <input
        id="height"
        name="height"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.height}
      />
      <label htmlFor="currentWeight">Current Weight</label>
      <input
        id="currentWeight"
        name="currentWeight"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.currentWeight}
      />
      <label htmlFor="desiredWeight">Desired Weight</label>
      <input
        id="desiredWeight"
        name="desiredWeight"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.desiredWeight}
      />
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input
        id="dateOfBirth"
        name="dateOfBirth"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.dateOfBirth}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
