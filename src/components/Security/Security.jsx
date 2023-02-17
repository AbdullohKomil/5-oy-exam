import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react';
import {
  SecurityBox,
  SecurityForm,
  SecurityInput,
  SecurityLabel,
  SecurityTitle,
  SubmitButton,
} from './Security.styles';
import * as Yup from 'yup';
import { api } from '../../api/api';

export const Security = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('invalid email format!!')
      .oneOf(['abdulloh@gmail.com'], 'Siz bu emaildasiz abdulloh@gmail.com')
      .required('Required email !!!'),
    currentPassword: Yup.string().required('required Current Password !!!'),
    newPassword: Yup.string()
      .min(3, 'Password must be longer 3 characters')
      .max(10, 'Password must be last 10 characters')
      .required('Required password !!!'),
  });

  const InfoUser = JSON.parse(localStorage.getItem('user'));

  const initialValues = {
    email: InfoUser.email,
    currentPassword: '',
    newPassword: '',
  };

  const [dataSecurity,setDataSecurity] = useState([])

  const EditSecurity = async (values) => {
    const data = await api
      .userEditSecurity(values)
      .catch((err) => console.log(err));
    console.log(values)
  };


  const handleSubmit = (values) => {
    EditSecurity(values)
  };

  return (
    <SecurityBox>
      <SecurityTitle className='dark:text-white' >Change Or Recover Your Password:</SecurityTitle>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <SecurityForm>
          <SecurityLabel
            className='block dark:text-white'
            htmlFor='emailSecurity'
          >
            Email
          </SecurityLabel>
          <SecurityInput
            type='email'
            name='email'
            id='emailSecurity'
            placeholder='email'
          />
          <p className='text-red-700 my-3'>
            <ErrorMessage
              className=''
              name='email'
            />
          </p>
          <SecurityLabel
            className='block dark:text-white'
            htmlFor='currentPassword'
          >
            Current Password
          </SecurityLabel>
          <SecurityInput
            type='password'
            name='currentPassword'
            id='currentPassword'
            placeholder='Current Password'
          />
          <p className='text-red-700 my-3'>
            <ErrorMessage
              className=''
              name='currentPassword'
            />
          </p>
          <SecurityLabel
            className='block dark:text-white'
            htmlFor='newPassword'
          >
            New Password
          </SecurityLabel>
          <SecurityInput
            type='password'
            name='newPassword'
            id='newPassword'
            placeholder='New Password'
          />
          <p className='text-red-700 my-3'>
            <ErrorMessage
              className=''
              name='newPassword'
            />
          </p>
          <SubmitButton type='submit'>Save Changes</SubmitButton>
        </SecurityForm>
      </Formik>
    </SecurityBox>
  );
};
