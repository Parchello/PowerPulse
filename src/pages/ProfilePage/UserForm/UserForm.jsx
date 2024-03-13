import { useFormik } from 'formik';

import sprite from '../../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { SelectUser } from '../../../redux/profile/selectors.jsx';
import {
  fetchCurrentUser,
  patchUserParams,
} from '../../../redux/profile/operations.jsx';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
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
// import StyledDatepicker from '../../../components/Diary/DaySwitch/StyledDatepicker.jsx';
// import { useFormikContext } from 'formik';

// import DatePicker from 'react-datepicker';

const validate = (values, props /* only available when using withFormik */) => {
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

  // console.log(errors);
  //...

  return errors;
};

// const DDatePicker = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };

const UserForm = () => {
  const currentUser = useSelector(SelectUser);
  const dispatch = useDispatch();
  // const [name, setName] = useState();
  console.log(currentUser);
  // useEffect(() => {
  //   setName(currentUser.name);
  // }, [currentUser.name]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: currentUser.name || '',
      email: currentUser.email ? currentUser.email : '',
      height: currentUser.height ? currentUser.height : '',
      currentWeight: currentUser.currentWeight ? currentUser.currentWeight : '',
      desiredWeight: currentUser.desiredWeight ? currentUser.desiredWeight : '',
      birthday: currentUser.birthday ? currentUser.birthday : '',
      blood: currentUser.blood ? currentUser.blood : null,
      sex: currentUser.sex ? currentUser.sex : '',
      levelActivity: currentUser.levelActivity
        ? currentUser.levelActivity
        : null,
    },

    validate,
    onSubmit: (values) => {
      delete values.email;

      // console.log('values', values);
      dispatch(patchUserParams({ values: values }));
    },
  });

  console.log(currentUser);

  useEffect(() => {
    if (currentUser.name !== '') {
      formik.setFormikState((prevState) => ({
        ...prevState,
        values: {
          name: currentUser.name,
          email: currentUser.email,
          height: currentUser.height,
          currentWeight: currentUser.currentWeight,
          desiredWeight: currentUser.desiredWeight,
          birthday: currentUser.birthday?.slice(0, 10) || '',
          blood: currentUser.blood,
          sex: currentUser.sex,
          levelActivity: currentUser.levelActivity,
        },
      }));
    }
  }, [currentUser]);

  // const DatePickerWrapper = () => {
  //   const formik = useFormikContext();

  //   const handleDateChange = (date) => {
  //     formik.setFieldValue('birthday', date);
  //   };

  //   return (
  //     <StyledDatepicker
  //       selected={formik.values.birthday}
  //       onChange={handleDateChange}
  //     />
  //   );
  // };

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

    if (!formik.errors[valueName] && formik.values[valueName] > 0) {
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
  const handleInputStringStylesChange = (valueName) => {
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

    if (!formik.errors[valueName] && formik.values[valueName].length !== 0) {
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
            value={formik.values.name}
            success={
              !formik?.errors?.name && formik?.values?.name?.length !== 0
            }
            error={formik?.errors?.name}
          />
          {handleInputStringStylesChange('name')}
        </NameEmailContainerItem>
        <NameEmailContainerItem>
          <Label htmlFor="email">Email</Label>
          <StyledInputLong
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={currentUser.email}
            success={!formik?.errors?.email && formik?.values?.email !== 0}
            error={formik?.errors?.email}
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
            success={
              !formik.errors.height &&
              formik.values.height !== undefined &&
              formik.values.height !== null &&
              formik.values.height > 0
                ? formik.values.height
                : undefined
            }
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
              formik.values.currentWeight > 0 &&
              formik.values.currentWeight !== undefined &&
              formik.values.currentWeight !== null
                ? formik.values.currentWeight
                : undefined
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
              !formik?.errors?.desiredWeight &&
              formik?.values?.desiredWeight > 0
                ? formik?.values?.desiredWeight
                : undefined
            }
            error={formik?.errors?.desiredWeight}
          />
          {handleInputStylesChange('desiredWeight')}
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <StyldInputShort
            placeholder="YYYY-MM-DD"
            id="birthday"
            name="birthday"
            type="string"
            onChange={formik.handleChange}
            value={formik.values.birthday}
          />
          {/* <StyledDatepicker
            selected={formik.values.birthday}
            onChange={(date) => formik.setFieldValue('birthday', date)}
          /> */}
          {/* <DDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          /> */}
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
              checked={currentUser.blood === 1 && true}
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
              checked={currentUser.blood === 2 && true}
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
              checked={currentUser.blood === 3 && true}
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
              checked={currentUser.blood === 4 && true}
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
              checked={currentUser.sex === 'female' && true}
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
              checked={currentUser.sex === 'male' && true}
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
            checked={currentUser.levelActivity === 1 && true}
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
            checked={currentUser.levelActivity === 2 && true}
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
            checked={currentUser.levelActivity === 3 && true}
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
            checked={currentUser.levelActivity === 4 && true}
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
            checked={currentUser.levelActivity === 5 && true}
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="ExtremelyActive">
            Extremely active (very strenuous exercises/sports and physical work)
          </LabelRadioBtn>
        </LiRadioBtn>
      </UlLifeStyle>
      <FormBtn type="submit" disabled={!formik.isValid}>
        Save
      </FormBtn>
      <div>
        <Toaster />
      </div>
    </Form>
  );
};

export default UserForm;
