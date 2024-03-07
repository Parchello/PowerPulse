
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { Form, Field, FormGroup, SuccessMessage, Message, Button, Title, Text, ErrorsMargin, BtnEye, EyeSvg, Wrapper, RedSvg, GreenSvg, GreenSvg } from './SignInForm.styled';
// import { useDispatch } from 'react-redux';
// import {logIn} from "../../../redux/auth/operations";
// import { useState } from "react";
// import sprite from "../../../assets/sprite.svg"



// const signInSchema = Yup.object().shape({
//   email: Yup.string()
//     .matches(
//       /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
//       'Invalid email format. Example of valid email: example@com.ua'
//     )
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });



//  export const SignInForm = () => {
//   const [isVisibleEyes, setIsVisibleEyes] = useState(false);

//   const GreenSvgEye = (
//     <GreenSvg>
//       <use xlinkHref={sprite + '#icon-checkbox-circle-fillGreen'}></use>
//     </GreenSvg>
//   );

//   const RedSvgEye = (
//     <RedSvg>
//       <use xlinkHref={sprite + '#icon-checkbox-circle-fill'}></use>
//     </RedSvg>
//   );



//   const dispatch = useDispatch();
//   const handleSubmit = (values, actions) => {
//     dispatch(logIn(values)); 
//     actions.resetForm();
//   };
//   return (
//     <div>
//       <Title>Sign In</Title>
//       <Text>Welcome! Please enter your credentials to login to the platform:</Text>
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//         }}
//         validationSchema={signInSchema}
//         // onSubmit = {(values, actions) => {
//         //   handleSubmit(values);
//         //   actions.resetForm();
//         // }}

//         onSubmit={handleSubmit}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <FormGroup>
//               <Field name="email" id="email" type="email" placeholder="Email" className={errors.email && touched.email ? 'invalid' : (touched.email && !errors.email) ? 'valid' : ''} />
//               {touched.email && errors.email && <Message>{errors.email}</Message>}
//               {touched.email && !errors.email && <SuccessMessage>Success email</SuccessMessage>}
//             </FormGroup>
//             <Wrapper>
//               <Field name="password" id="password" type={isVisibleEyes ? "text" : "password"} placeholder="Password" className={errors.password && touched.password ? 'invalid' : (touched.password && !errors.password) ? 'valid' : ''} />
//               {touched.password && errors.password && <Message>{errors.password}</Message>}
//               {touched.password && !errors.password && <SuccessMessage>Success password</SuccessMessage>}
//               <BtnEye type="button" onClick={()=>{setIsVisibleEyes(!isVisibleEyes);}}>
//                 {isVisibleEyes ? (
//                   <EyeSvg>
//                     <use xlinkHref={sprite + '#icon-eye'}></use>
                    
//                   </EyeSvg>
//                 ) : (
//                   <EyeSvg>
//                     <use xlinkHref={sprite + '#icon-eye-off'}></use>
//                   </EyeSvg>
//                 )}
//               </BtnEye>
//             </Wrapper>
//             <Button type="submit">Sign In</Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };




import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field,  SuccessMessage, Message, Button, Title, Text, ErrorsMargin, BtnEye, EyeSvg, Wrapper, RedSvg, GreenSvg } from './SignInForm.styled';
import { useDispatch } from 'react-redux';
import {logIn} from "../../../redux/auth/operations";
import { useState } from "react";
import sprite from "../../../assets/sprite.svg"



const signInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'Invalid email format. Example: ivanov@com.ua'
    )
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});



 export const SignInForm = () => {
  const [isVisibleEyes, setIsVisibleEyes] = useState(false);

  const GreenSvgEye = (
    <GreenSvg>
      <use xlinkHref={sprite + '#icon-checkbox-circle-fillGreen'}></use>
    </GreenSvg>
  );

  const RedSvgEye = (
    <RedSvg>
      <use xlinkHref={sprite + '#icon-checkbox-circle-fill'}></use>
    </RedSvg>
  );



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

        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Wrapper>
              <Field name="email" id="email" type="email" placeholder="Email" className={errors.email && touched.email ? 'invalid' : (touched.email && !errors.email) ? 'valid' : ''} />
              {touched.email && (errors.email || !errors.email) && (
                <ErrorsMargin>
                  {errors.email && (
                    <Message>
                      {RedSvgEye}
                      {errors.email}
                    </Message>
                  )}
                  {!errors.email && (
                    <SuccessMessage>
                      {GreenSvgEye}
                      Success email
                    </SuccessMessage>
                  )}
                </ErrorsMargin>
              )}
            </Wrapper>
            <Wrapper>
              <Field name="password" id="password" type={isVisibleEyes ? "text" : "password"} placeholder="Password" className={errors.password && touched.password ? 'invalid' : (touched.password && !errors.password) ? 'valid' : ''} />
            {touched.password && (errors.password || !errors.password) && (
                <ErrorsMargin>
                  {errors.password && (
                    <Message>
                      {RedSvgEye}
                      {errors.password}
                    </Message>
                  )}
                  {!errors.password && (
                    <SuccessMessage>
                      {GreenSvgEye}Success password
                    </SuccessMessage>
                  )}
                </ErrorsMargin>
              )}
              <BtnEye type="button" onClick={()=>{setIsVisibleEyes(!isVisibleEyes);}}>
                {isVisibleEyes ? (
                  <EyeSvg>
                    <use xlinkHref={sprite + '#icon-eye'}></use>
                    
                  </EyeSvg>
                ) : (
                  <EyeSvg>
                    <use xlinkHref={sprite + '#icon-eye-off'}></use>
                  </EyeSvg>
                )}
              </BtnEye>
            </Wrapper>
            <Button type="submit">Sign In</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
