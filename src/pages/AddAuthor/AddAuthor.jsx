import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import { api } from '../../api/api';
import { LanguageContext } from '../../context/LanguageContext';
import { lang } from '../../lang/lang';

import { FileIconSpan, LabelFile } from './AddAuthor.styles';

export const AddAuthor = () => {
  const filesRef = useRef();
  const selectRef = useRef();

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required FIRST NAME'),
    last_name: Yup.string().required('Required LAST NAME'),
    date_of_birth: Yup.number('please enter the number')
      .typeError('please enter the number')
      .max(2023, 'please enter right date')
      .min(1000, 'please enter right date')
      .required('required DATE !!!'),
    date_of_death: Yup.number()
      .typeError('please enter the number')
      .max(2023, 'please enter right date')
      .min(1000, 'please enter right date')
      .required('Required DATE !!!'),
    country: Yup.string().required('Required COUNTRY !!!'),
    bio: Yup.string().required('Required BIO!!!'),
  });

  const initialValues = {
    first_name: '',
    last_name: '',
    date_of_birth: '',
    date_of_death: '',
    country: '',
    bio: '',
  };

  const [error, setError] = useState('');

  const createAuthorRequest = async (formData) => {
    const data = await api.createAuthor(formData).catch((err) => setError(err));

    console.log(data);

    if (error) {
      toast(error?.response?.data?.message);
    } else {
      navigate('/');
    }
  };

  const CreateAuthorSubmit = (values) => {
    const formData = new FormData();
    const valueFormData = {
      ...values,
      genre_id: selectRef.current.value,
      image: filesRef?.current?.files[0],
    };

    const keysObject = Object.keys(valueFormData);

    formData.set(keysObject[0], values.first_name);
    formData.set(keysObject[1], values.last_name);
    formData.set(keysObject[2], values.date_of_birth);
    formData.set(keysObject[3], values.date_of_death);
    formData.set(keysObject[4], values.country);
    formData.set(keysObject[5], values.bio);
    formData.set(keysObject[6], valueFormData.genre_id);
    formData.set(keysObject[7], valueFormData.image);

    createAuthorRequest(formData);
  };

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className='flex'>
      <div className='w-2/4 text-center h-screen bg-gray-200 dark:bg-black p-32'>
        <input
          type='file'
          className='hidden'
          id='file_upload'
          ref={filesRef}
        />
        <div className='relative'>
          <FileIconSpan></FileIconSpan>
          <LabelFile
            htmlFor='file_upload'
            className='dark:text-neutral-600'
          >
            Click or drag file to this area <br /> to upload
          </LabelFile>
        </div>
      </div>
      <div className='w-2/4 flex flex-col justify-center dark:bg-black items-center h-screen'>
        <h2 className='dark:text-white text-3xl	font-bold'>
          {' '}
          {lang[language]?.AddAuthorPage?.AddAuthorTitle}
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={CreateAuthorSubmit}
        >
          <Form className='justify-content-center flex flex-col'>
            <Field
              type='text'
              placeholder='First name'
              name='first_name'
              className='focus:outline-none border dark:text-white py-3 pr-60 mt-3 mb-4 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='first_name' />
            </span>

            <Field
              type='text'
              placeholder='Last name'
              name='last_name'
              className='focus:outline-none border dark:text-white py-3 pr-60 mt-3 mb-4 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='last_name' />
            </span>
            <Field
              type='text'
              placeholder='Date of birth'
              name='date_of_birth'
              className='focus:outline-none border dark:text-white py-3 pr-60 mt-3 mb-4 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='date_of_birth' />
            </span>
            <Field
              type='text'
              name='date_of_death'
              placeholder='Date of death'
              className='focus:outline-none border dark:text-white py-3 pr-60 mt-3 mb-4 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='date_of_death' />
            </span>
            <Field
              type='text'
              placeholder='Country'
              name='country'
              className='focus:outline-none border dark:text-white py-3 pr-60 mt-3 mb-4 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='country' />
            </span>
            <select
              ref={selectRef}
              className='focus:outline-none border dark:text-white py-3 pr-60 mt-3 mb-4 pl-5 rounded-xl dark:bg-black dark:text-white'
              defaultValue='1'
            >
              <option value='1'>Temuriylar davri</option>
              <option value='2'>Jadid adabiyoti</option>
              <option value='3'>Sovet davri</option>
              <option value='4'>Mustaqillik davri</option>
            </select>

            <Field
              type='text'
              placeholder='Bio'
              name='bio'
              className='focus:outline-none border dark:text-white py-3 pb-12 pr-60 mt-3 mb-4 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='bio' />
            </span>
            <button
              type='submit'
              className='px-48 dark:bg-white dark:text-black block mx-auto bg-slate-900 text-white py-3 rounded-3xl mt-10'
            >
              Create
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
