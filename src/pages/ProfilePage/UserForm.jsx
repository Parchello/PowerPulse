import { useFormik } from 'formik';

import sprite from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentUser } from '../../redux/profile/selectors.jsx';
import {
  fetchCurrentUser,
  patchUserParams,
} from '../../redux/profile/operations.jsx';
import { useEffect } from 'react';

import {
  StyldInputShort,
  StyledInputLong,
  Label,
  Ul,
  UlLifeStyle,
  LiRadioBtn,
  RadioBtnContainer,
  NameEmailContainer,
  DataContainer,
  DataContainerItem,
  FormBtn,
  Form,
  LabelRadioBtn,
  InputRadioBtn,
  NameEmailContainerItem,
  BloodLabel,
  ErrorDiv,
  SuccessDiv,
} from './UserForm.Styled.jsx';

const validate = (values, props /* only available when using withFormik */) => {
  console.log('Validation function is called');
  const errors = {};

  // if (!values.email) {
  //   errors.email = 'Email is required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

  if (!values.name) {
    errors.name = 'Name is required!';
  }
  if (!values.height) {
    errors.height = 'Height is required';
  } else if (values.height < 150) {
    errors.height = 'Height should be min.150cm';
  }
  if (!values.currentWeight) {
    errors.currentWeight = 'Current weight is required';
  } else if (values.currentWeight < 35) {
    errors.currentWeight = 'Min 35kg Weight required';
  }
  if (!values.desiredWeight) {
    errors.desiredWeight = 'Desired weight is required';
  } else if (values.desiredWeight < 35) {
    errors.currentWeight = 'Min 35kg Weight required';
  }

  console.log(errors);
  //...

  return errors;
};

const UserForm = () => {
  const currentUser = useSelector(CurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: currentUser.currentUser.name ? currentUser.currentUser.name : '',
      email: currentUser.currentUser.email ? currentUser.currentUser.email : '',
      height: '',
      currentWeight: '',
      desiredWeight: '',
      birthday: '',
      blood: null,
      sex: '',
      levelActivity: null,
    },

    validate,
    onSubmit: (values) => {
      // const patchUserParams = {
      //   name: values.name,
      //   height: values.height,
      //   currentWeight: values.currentWeight,
      //   desiredWeight: values.desiredWeight,
      //   birthday: values.dateOfBirth,
      //   blood: values.blood,
      //   sex: values.sex,
      //   levelActivity: values.levelActivity,
      // };
      //   console.log('Form submitted:');
      // alert(JSON.stringify(patchUserParams, null, 2));

      delete values.email;

      console.log('values', values);
      dispatch(patchUserParams({ values: values }));
    },
  });

  const handleInputStylesChange = (valueName) => {
    if (formik.errors[valueName]) {
      return (
        <ErrorDiv>
          <svg width="16px" height="16px">
            <use href={sprite + '#icon-checkbox-circle-fill'} />
          </svg>
          {formik.errors[valueName]}
        </ErrorDiv>
      );
    }
    if (!formik.errors[valueName] && formik.values[valueName] !== 0) {
      return (
        <SuccessDiv>
          <svg width="18px" height="18px">
            <use href={sprite + '#icon-checkbox-circle-fillGreen'} />
          </svg>
          Success
        </SuccessDiv>
      );
    }
  };

  // const handleInputChange = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <NameEmailContainer>
        <NameEmailContainerItem>
          <Label htmlFor="name">Name</Label>
          <StyledInputLong
            placeholder="User name"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={currentUser.currentUser.name}
            success={!formik.errors.name && formik.values.name.length !== 0}
            error={formik.errors.name}
          />
          {handleInputStylesChange('name')}
        </NameEmailContainerItem>
        <NameEmailContainerItem>
          <Label htmlFor="email">Email</Label>
          <StyledInputLong
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={currentUser.currentUser.email}
            success={!formik.errors.email && formik.values.email !== 0}
            error={formik.errors.email}
          />
          {handleInputStylesChange('email')}
        </NameEmailContainerItem>
      </NameEmailContainer>
      <DataContainer>
        <DataContainerItem>
          <Label htmlFor="height">Height</Label>

          <StyldInputShort
            id="height"
            name="height"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.height}
            success={!formik.errors.height && formik.values.height.length !== 0}
            error={formik.errors.height}
          />
          {handleInputStylesChange('height')}
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="currentWeight">Current Weight</Label>
          <StyldInputShort
            id="currentWeight"
            name="currentWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.currentWeight}
            success={
              !formik.errors.currentWeight &&
              formik.values.currentWeight.length !== 0
            }
            error={formik.errors.currentWeight}
          />
          {handleInputStylesChange('currentWeight')}
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="desiredWeight">Desired Weight</Label>
          <StyldInputShort
            id="desiredWeight"
            name="desiredWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.desiredWeight}
            success={
              !formik.errors.desiredWeight &&
              formik.values.desiredWeight.length !== 0
            }
            error={formik.errors.desiredWeight}
          />
          {handleInputStylesChange('desiredWeight')}
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <StyldInputShort
            id="birthday"
            name="birthday"
            type="string"
            onChange={formik.handleChange}
            value={formik.values.birthday}
          />
        </DataContainerItem>
      </DataContainer>
      <BloodLabel htmlFor="blood"> Blood</BloodLabel>
      <RadioBtnContainer>
        <Ul id="blood">
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="1"
              id="1"
              type="radio"
              onChange={(e) =>
                formik.setFieldValue('blood', parseInt(e.target.value))
              }
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="1">1</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="2"
              id="2"
              type="radio"
              onChange={(e) =>
                formik.setFieldValue('blood', parseInt(e.target.value))
              }
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="2">2</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="3"
              id="3"
              type="radio"
              onChange={(e) =>
                formik.setFieldValue('blood', parseInt(e.target.value))
              }
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="3">3</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="4"
              id="4"
              type="radio"
              onChange={(e) =>
                formik.setFieldValue('blood', parseInt(e.target.value))
              }
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="4">4</LabelRadioBtn>
          </LiRadioBtn>
        </Ul>

        <Ul id="sex">
          <LiRadioBtn>
            <InputRadioBtn
              id="female"
              name="sex"
              value="female"
              type="radio"
              onChange={formik.handleChange}
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="female">Female</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              type="radio"
              id="male"
              name="sex"
              value="male"
              onChange={formik.handleChange}
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="male">Male</LabelRadioBtn>
          </LiRadioBtn>
        </Ul>
      </RadioBtnContainer>
      <UlLifeStyle id="levelActivity">
        <LiRadioBtn>
          <InputRadioBtn
            id="Sedentary"
            name="levelActivity"
            value="1"
            type="radio"
            onChange={(e) =>
              formik.setFieldValue('levelActivity', parseInt(e.target.value))
            }
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="Sedentary">
            Sedentary lifestyle (little or no physical activity)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="Light"
            name="levelActivity"
            value="2"
            type="radio"
            onChange={(e) =>
              formik.setFieldValue('levelActivity', parseInt(e.target.value))
            }
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="Light">
            Light activity (light exercises/sports 1-3 days per week)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="Moderately"
            name="levelActivity"
            value="3"
            type="radio"
            onChange={(e) =>
              formik.setFieldValue('levelActivity', parseInt(e.target.value))
            }
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="Moderately">
            Moderately active (moderate exercises/sports 3-5 days per week)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="VeryActive"
            name="levelActivity"
            value="4"
            type="radio"
            onChange={(e) =>
              formik.setFieldValue('levelActivity', parseInt(e.target.value))
            }
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="VeryActive">
            Very active (intense exercises/sports 6-7 days per week)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="ExtremelyActive"
            name="levelActivity"
            value="5"
            type="radio"
            onChange={(e) =>
              formik.setFieldValue('levelActivity', parseInt(e.target.value))
            }
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="ExtremelyActive">
            Extremely active (very strenuous exercises/sports and physical work)
          </LabelRadioBtn>
        </LiRadioBtn>
      </UlLifeStyle>
      <FormBtn type="submit">Save</FormBtn>
    </Form>
  );
};

export default UserForm;

// "currentWeight": 55,
// "birthday": "20.02.1992",
// "desiredWeight": 55,
// "height": 160,
// "levelActivity": 4,
// "name": "examplea",
// "sex": "male"
