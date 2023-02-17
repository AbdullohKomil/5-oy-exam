import React, { useRef, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import { api } from '../../api/api';

import { FileIconSpan, LabelFile } from './AddBook.styles';

export const AddBook = () => {
  const filesRef = useRef();
  const selectRef = useRef();

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, 'min length title 2 words')
      .required('Required Title'),
    page: Yup.number().required('Required Pages'),
    year: Yup.number('please enter the number')
      .typeError('please enter the number')
      .max(2023, 'please enter right Year')
      .min(1000, 'please enter right Year')
      .required('required Year !!!'),
    price: Yup.number()
      .typeError('please enter the number')
      .min(5, 'Price must be than 5')
      .max(2020, 'the price must be less than 2020')
      .required('Required price !!!'),
    description: Yup.string().required('Required description!!!'),
  });

  const initialValues = {
    title: '',
    page: '',
    year: '',
    price: '',
    description: '',
  };

  const [error, setError] = useState('');
  const createBookRequest = async (formData) => {
    const data = await api.createBook(formData).catch((err) => setError(err));

    console.log(error);

    if (error) {
      console.log(1);

      if (
        error?.response?.data?.message ==
        '"author_id" is not allowed to be empty'
      ) {
        toast('Iltimos Janr va Avtorni tanlang');
      } else {
        toast(error?.response?.data?.message);
      }
    }
    if (data.data) {
      toast("Book qo'shildi!!");
      navigate('/');
    }
  };

  const GenreSelectRef = useRef();

  const CreateBookSubmit = (values) => {
    const formData = new FormData();

    const valueFormData = {
      ...values,
      genre_id: GenreSelectRef.current.value,
      author_id: selectRef.current.value,
      image: filesRef?.current?.files[0],
    };

    const keysObject = Object.keys(valueFormData);

    console.log(values);
    console.log(keysObject);

    formData.set(keysObject[0], values.title);
    formData.set(keysObject[1], values.page);
    formData.set(keysObject[2], values.year);
    formData.set(keysObject[3], values.price);
    formData.set(keysObject[4], values.description);
    formData.set(keysObject[5], GenreSelectRef.current.value);
    formData.set(keysObject[6], valueFormData.author_id);
    formData.set(keysObject[7], valueFormData.image);

    createBookRequest(formData);
  };

  const [authorGetOptionData, setAuthorGetOptionData] = useState([]);

  const changedGenre = async () => {
    console.log(GenreSelectRef.current.value);
    const data = await api
      .getAuthorByGenre(GenreSelectRef.current.value)
      .catch((err) => console.log(err));
    setAuthorGetOptionData(data.data);
  };

  console.log(authorGetOptionData);

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
      <div className='w-2/4 flex flex-col dark:bg-black justify-center items-center h-screen'>
        <h2 className='dark:text-white text-3xl	font-bold'>Add Book</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={CreateBookSubmit}
        >
          <Form className='justify-content-center flex flex-col'>
            <Field
              name='title'
              placeholder='Title'
              type='text'
              className='focus:outline-none dark:text-white border py-3 pr-60 mt-3 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='title' />
            </span>
            <Field
              name='page'
              placeholder='Page'
              type='text'
              className='focus:outline-none dark:text-white border py-3 pr-60 mt-3 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='page' />
            </span>
            <Field
              name='year'
              placeholder='Year'
              type='text'
              className='focus:outline-none dark:text-white border py-3 pr-60 mt-3 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='year' />
            </span>
            <Field
              name='price'
              placeholder='Price'
              type='text'
              className='focus:outline-none dark:text-white border py-3 pr-60 mt-3 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='price' />
            </span>
            <select
              ref={GenreSelectRef}
              className='focus:outline-none dark:text-white border py-3 pr-60 mt-3 pl-5 rounded-xl dark:bg-black dark:text-white'
              defaultValue='dis'
              onChange={changedGenre}
            >
              <option value='dis' selected disabled >Genre</option>
              <option value='1'>Temuriylar davri</option>
              <option value='2'>Jadid adabiyoti</option>
              <option value='3'>Sovet davri</option>
              <option value='4'>Mustaqillik davri</option>
            </select>
            <select
              ref={selectRef}
              className='focus:outline-none dark:text-white border py-3 pr-60 mt-3 pl-5 rounded-xl dark:bg-black dark:text-white'
            >
              {authorGetOptionData
                ? authorGetOptionData.map((el) => {
                    console.log(el);
                    return (
                      <option value={el.id}>
                        {el.first_name + ' ' + el.last_name}
                      </option>
                    );
                  })
                : ''}
            </select>{' '}
            <Field
              type='text'
              placeholder='description'
              name='description'
              className='focus:outline-none dark:text-white border py-3 pb-12 pr-60 mt-3 pl-5 rounded-xl dark:bg-black'
            />
            <span className='text-red-600'>
              <ErrorMessage name='description' />
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
