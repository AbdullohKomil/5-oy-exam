import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { api } from '../../api/api';
import { useDispatch } from 'react-redux';
import RegisterIcon from '../../assets/images/Register.svg';
import axios from 'axios';
import { setToken } from '../../redux/token/tokenAction';
import { setUser } from '../../redux/user/userAction';

export const SignUp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required first name'),
    last_name: Yup.string().required('Required last name'),
    phone: Yup.string().required('required phone !!!'),
    email: Yup.string()
      .email('invalid email format!!')
      .required('Required email !!!'),
    password: Yup.string()
      .min(3, 'Password must be longer 3 characters')
      .max(10, 'Password must be last 10 characters')
      .required('Required password !!!'),
  });

  const initialValues = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
  };

  const userRegister = async (values) => {
    const data = await api
      .userRegister(values)
      .catch((err) => console.log(err));

    console.log(data);

    const user = await api
      .getUser(data?.data?.token || localStorage.getItem('token'))
      .catch((err) => console.log(err));

    console.log(user);

    if (data.status === 201) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(user.data));
      dispatch(setToken(data.data.token));
      dispatch(setUser(user.data));
      navigate('/');
    }
  };

  const handleSubmit = (values) => {
    userRegister(values);
  };

  return (
    <div>
      <div className='flex mx-auto font-sans'>
        <div className=' bg-LogIn flex justify-center items-center h-screen w-2/4'>
          <img
            src={RegisterIcon}
            alt=''
          />
        </div>
        <div className='flex dark:bg-black justify-center items-center h-screen w-2/4'>
          <Formik
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            initialValues={initialValues}
            className='block w-2/4'
          >
            <Form>
              <h2 className='font-extrabold text-4xl dark:text-white'>
                Sign up
              </h2>
              <span className='mt-2 dark:text-white'>
                Already have an account?{' '}
              </span>
              <NavLink
                className='text-blue-600'
                to='/login'
              >
                Sign in
              </NavLink>
              <Field
                name='first_name'
                type='text'
                className='focus:outline-none block dark:text-white dark:bg-black border-2 border-solid pr-40 mt-5 pl-10 py-4 border-slate-200 rounded-lg'
                placeholder='First name'
              />
              <span className='text-red-600'>
                <ErrorMessage name='first_name' />
              </span>
              <Field
                name='last_name'
                type='text'
                className='focus:outline-none dark:text-white dark:bg-black block border-2 border-solid pr-40 mt-5 pl-10 py-4 border-slate-200 rounded-lg'
                placeholder='Last name'
              />
              <span className='text-red-600'>
                <ErrorMessage name='last_name' />
              </span>
              <Field
                name='phone'
                type='text'
                className='focus:outline-none dark:text-white dark:bg-black block border-2 border-solid pr-40 mt-5 pl-10 py-4 border-slate-200 rounded-lg'
                placeholder='Phone'
              />
              <span className='text-red-600'>
                <ErrorMessage name='phone' />
              </span>

              <Field
                name='email'
                type='email'
                className='focus:outline-none dark:text-white dark:bg-black block border-2 border-solid pr-40 mt-5 pl-10 py-4 border-slate-200 rounded-lg'
                placeholder='Email'
              />
              <span className='text-red-600'>
                <ErrorMessage name='email' />
              </span>
              <Field
                name='password'
                type='password'
                className='focus:outline-none dark:text-white dark:bg-black block border-2 border-solid pr-40 mt-5 pl-10 py-4 border-slate-200 rounded-lg'
                placeholder='Password'
              />
              <span className='text-red-600'>
                <ErrorMessage name='password' />
              </span>
              <button
                type='submit'
                className=' dark:bg-white
                dark:text-black
                px-36 block mx-auto bg-slate-900 text-white py-2 rounded-3xl mt-10'
              >
                Next step
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
