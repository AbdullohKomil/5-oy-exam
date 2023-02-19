import { ErrorMessage, Formik } from 'formik';
import React, { useContext, useState } from 'react';
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
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { lang } from '../../lang/lang';

export const Security = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('invalid email format!!')
      .notOneOf(
        [JSON.parse(localStorage.getItem('user')).email],
        'Siz boshqa email, kiritishingiz kerak'
      )
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

  const [dataSecurity, setDataSecurity] = useState([]);
  const [err, setErr] = useState('');

  const UserInfo = JSON.parse(localStorage.getItem('user'));

  const EditSecurity = async (values) => {
    const data = await api
      .userEditSecurity(values)
      .catch((err) => setErr(err.response?.data?.message));
    console.log(values);
    console.log(data);

    if (data?.data == 'updated') {
      toast('Updated! Ozgartirildi!');

      let newEmail = JSON.parse(localStorage.getItem('user'));
      newEmail.email = values.email;
      localStorage.setItem('user', JSON.stringify(newEmail));
      navigate('/');
    } 
    if (err) {
      toast.error(err)
    }
  };

  const handleSubmit = (values) => {
    EditSecurity(values);
  };

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <SecurityBox>
      <SecurityTitle className='dark:text-white'>
        {lang[language]?.ProfilePage?.ProfileSecurityPage?.ProfileSecurityTitle}
      </SecurityTitle>
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
            {
              lang[language]?.ProfilePage?.ProfileSecurityPage
                ?.ProfileSecurityEmailInput
            }
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
            {
              lang[language]?.ProfilePage?.ProfileSecurityPage
                ?.ProfileSecurityCurrentPassInput
            }
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
            {
              lang[language]?.ProfilePage?.ProfileSecurityPage
                ?.ProfileSecurityNewPassInput
            }
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
          <SubmitButton type='submit'>
            {' '}
            {lang[language]?.ProfilePage?.ProfileEditPage?.ProfileSaveBtn}
          </SubmitButton>
        </SecurityForm>
      </Formik>
    </SecurityBox>
  );
};
