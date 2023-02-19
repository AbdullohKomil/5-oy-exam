import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../api/api';
import { Header } from '../../components/Header/Header';

export const SingleBookPage = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [bookData, setBookData] = useState([]);
  const GetOneBook = async () => {
    const { data } = await api.SingleBook(id).catch((err) => console.log(err));
    setData(data);
  };

  const getAuthorBooks = async () => {
    const dataBook = await api
      .SingleBookGetAuthorBooks(data.author_id)
      .catch((err) => console.log(err));
    setBookData(dataBook?.data);
    console.log(dataBook);
  };

  useEffect(() => {
    GetOneBook();
  }, []);

  useEffect(() => {
    getAuthorBooks();
  }, [data]);
  return (
    <>
      <Header />
      <div className='flex justify-between'>
        <div className='w-2/6'>
          <img
            src={'http://localhost:5000/' + data.image}
            alt=''
            className='max-h-none h-full rounded-2xl w-full'
          />
        </div>
        <div className='w-3/6'>
          {' '}
          <h2 className='text-4xl text-orange-200 mb-2'>{data.title}</h2>
          <p className='flex justify-between'>
            <span className='text-gray-400'>Sahifalar soni:</span>{' '}
            <span className='dark:text-white'>{data.page} page</span>
          </p>
          <p className='flex justify-between mt-3'>
            <span className='text-gray-400'>Chop etilgan:</span>{' '}
            <span className='dark:text-white'>{data.year} years</span>
          </p>
          <p className='flex justify-between mt-3'>
            <span className='text-gray-400'>Kitob narxi:</span>{' '}
            <span className='dark:text-white'>${data.price}</span>
          </p>
          <div className='mt-10 flex items-center '>
            <span className='text-orange-200'>To’liq ma’lumot </span>{' '}
            <span className='inline-block ml-3'>↓</span>
            <span className='border h-px w-96 block ml-5 border-orange-200'></span>
          </div>
          <p className='mt-5 dark:text-gray-300 '>{data.description}</p>
        </div>
      </div>
      <div>
        {' '}
        <div className='flex justify-between mb-8 mt-9'>
          <h2 className='text-orange-300 text-3xl'>Asarlari</h2>
          <Link
            to='/kitoblar'
            className='dark:text-white'
          >
            Barchasini ko’rish
          </Link>
        </div>
        <ul
          style={{ overflow: 'auto', width: '100%', 'max-width': '100000px' }}
          className='flex gap-9'
        >
          {bookData
            ? bookData.map((el) => (
                <>
                  <li
                    key={el.id}
                    className=' rounded-3xl w-40 pb-4 dark:bg-transparent'
                  >
                    <Link to={'/singleBookPage/' + el.id}>
                      <img
                        src={`http://localhost:5000/${el.image}`}
                        alt='...'
                        width='190px'
                        className='h-72 object-cover bg-white mx-auto rounded-3xl'
                      />
                      <div>
                        <h4 className='text-2xl mt-3 mb-2 dark:text-orange-200'>
                          {el.title}
                        </h4>
                        <p className=' dark:text-gray-400	'>Alisher Navoiy</p>
                      </div>
                    </Link>
                  </li>
                </>
              ))
            : ''}
        </ul>
      </div>
    </>
  );
};
