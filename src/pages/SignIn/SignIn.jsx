import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginIcon from '../../assets/images/LogIn.svg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { api } from '../../api/api';
import { ThemeContext } from '../../context/ThemeContext';

export const SignIn = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('invalid email format!!')
      .required('Required email !!!'),
    password: Yup.string()
      .min(3, 'Password must be longer 3 characters')
      .max(10, 'Password must be last 10 characters')
      .required('Required password !!!'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const userLogin = async (values) => {
    const data = await api.userLogin(values);

    const user = await api.getUser();

    if (data.status === 201) {
      localStorage.setItem('token', data.data.accessToken);
      localStorage.setItem('user');
    }
  };

  const handleSubmit = (values) => {
    userLogin(values);
  };

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className=' flex mx-auto font-sans'>
      <div className=' bg-LogIn flex justify-center items-center h-screen w-2/4'>
        <img
          src={LoginIcon}
          alt=''
        />
      </div>
      <div className='flex justify-center items-center h-screen dark:bg-black w-2/4'>
        <Formik
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          initialValues={initialValues}
          className='block w-2/4'
        >
          <Form>
            <h2 className='font-extrabold dark:text-white text-4xl'>Sign in</h2>
            <span className='mt-2 dark:text-white'>
              Do not you have an account?{' '}
            </span>
            <NavLink
              className='text-blue-600'
              to='/register'
            >
              Sign up
            </NavLink>
            <Field
              name='email'
              type='email'
              className='focus:outline-none dark:bg-black block border-2 border-solid pr-40 mt-10 pl-10 py-4 border-slate-200 rounded-lg'
              placeholder='Email'
            />
            <span className='text-red-600'>
              <ErrorMessage name='email' />
            </span>
            <Field
              name='password'
              type='password'
              className='focus:outline-none dark:bg-black block border-2 border-solid pr-40 mt-5 pl-10 py-4 border-slate-200 rounded-lg'
              placeholder='Password'
            />
            <span className='text-red-600'>
              <ErrorMessage name='password' />
            </span>
            <button
              type='submit'
              className='px-36 dark:bg-white dark:text-black block mx-auto bg-slate-900 text-white py-2 rounded-3xl mt-10'
            >
              Next step
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
