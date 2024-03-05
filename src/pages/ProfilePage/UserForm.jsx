import { useFormik } from 'formik';

import {
  InputLong,
  InputShort,
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
} from '../../pages/ProfilePage/StyledUserForm.jsx';

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
    <Form onSubmit={formik.handleSubmit}>
      <NameEmailContainer>
        <div>
          <Label htmlFor="name">Name</Label>
          <InputLong
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <InputLong
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
      </NameEmailContainer>
      <DataContainer>
        <DataContainerItem>
          <Label htmlFor="height">Height</Label>

          <InputShort
            id="height"
            name="height"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.height}
          />
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="currentWeight">Current Weight</Label>
          <InputShort
            id="currentWeight"
            name="currentWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.currentWeight}
          />
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="desiredWeight">Desired Weight</Label>
          <InputShort
            id="desiredWeight"
            name="desiredWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.desiredWeight}
          />
        </DataContainerItem>
        <DataContainerItem>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <InputShort
            id="dateOfBirth"
            name="dateOfBirth"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.dateOfBirth}
          />
        </DataContainerItem>
      </DataContainer>
      <Label htmlFor="blood"> Blood</Label>

      <RadioBtnContainer>
        <Ul id="blood">
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="1"
              id="1"
              type="radio"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="1">1</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="2"
              id="2"
              type="radio"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="2">2</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="3"
              id="3"
              type="radio"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="3">3</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              name="blood"
              value="4"
              id="4"
              type="radio"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="4">4</LabelRadioBtn>
          </LiRadioBtn>
        </Ul>

        <Ul>
          <LiRadioBtn>
            <InputRadioBtn
              id="female"
              name="gender"
              value="female"
              type="radio"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="female">Female</LabelRadioBtn>
          </LiRadioBtn>
          <LiRadioBtn>
            <InputRadioBtn
              type="radio"
              id="male"
              name="gender"
              value="male"
            ></InputRadioBtn>
            <LabelRadioBtn htmlFor="male">Male</LabelRadioBtn>
          </LiRadioBtn>
        </Ul>
      </RadioBtnContainer>
      <UlLifeStyle>
        <LiRadioBtn>
          <InputRadioBtn
            id="Sedentary"
            name="lifeStyle"
            value="Sedentary"
            type="radio"
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="Sedentary">
            Sedentary lifestyle (little or no physical activity)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="Light"
            name="lifeStyle"
            value="Light"
            type="radio"
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="Light">
            Light activity (light exercises/sports 1-3 days per week)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="Moderately"
            name="lifeStyle"
            value="Moderately"
            type="radio"
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="Moderately">
            Moderately active (moderate exercises/sports 3-5 days per week)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="VeryActive"
            name="lifeStyle"
            value="VeryActive"
            type="radio"
          ></InputRadioBtn>
          <LabelRadioBtn htmlFor="VeryActive">
            Very active (intense exercises/sports 6-7 days per week)
          </LabelRadioBtn>
        </LiRadioBtn>
        <LiRadioBtn>
          <InputRadioBtn
            id="ExtremelyActive"
            name="lifeStyle"
            value="ExtremelyActive"
            type="radio"
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
