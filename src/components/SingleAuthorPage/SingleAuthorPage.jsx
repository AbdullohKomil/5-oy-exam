import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../api/api';
import { Header } from '../Header/Header';
import { OverflowList } from './SingleAuthorPage.styles';

export const SingleAuthorPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [bookData, setBookData] = useState([]);

  const GetOneAuthor = async () => {
    const data = await api.SingleAuthor(id).catch((err) => toast.error(err));
    setData(data.data);
  };
  const GetAuthorBooks = async () => {
    const data = await api
      .SingleAuthorBooks(id)
      .catch((err) => toast.error(err));
    setBookData(data.data);
  };

  useState(() => {
    GetOneAuthor();
    GetAuthorBooks();
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className='flex flex-wrap'>
          <div className='w-2/5 left-img mr-16'>
            <img
              src={'http://localhost:5000/' + data.image}
              alt=''
              width='505px'
              style={{ height: '505px' }}
            />
          </div>
          <div className='right-info w-2/4'>
            <h2 className='text-4xl mt-9 text-amber-200'>
              {data.first_name + ' ' + data.last_name}
            </h2>
            <p className='mt-1 h-72  dark:text-white'>{data.bio}</p>
            <div className='date flex justify-between w-80'>
              <div className='alive-date '>
                <span className='text-gray-400 '>Tavallud sanasi</span>
                <p className='text-4xl text-orange-200'>
                  {data.date_of_birth + ' '}
                </p>
                <span className='text-gray-400'>{data.country}</span>
              </div>
              <span className='text-4xl text-orange-200 mt-2'>__</span>
              <div className='death-date ml-3 '>
                <span className='text-gray-400 '>Tavallud sanasi</span>
                <p className='text-4xl text-orange-200'>{data.date_of_death}</p>
                <span className='text-gray-400'>{data.country}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-24'>
          <div className='flex justify-between mb-8'>
            <h2 className='text-orange-300 text-3xl'>Asarlari</h2>
            <Link
              to='/kitoblar'
              className='dark:text-white'
            >
              Barchasini ko’rish
            </Link>
          </div>
          <div className='overflow-auto w-full'>
            <OverflowList className='gap-3'>
              {bookData.length
                ? bookData.map((el) => (
                    <li className='rounded-xl'>
                      <img
                        src={'http://localhost:5000/' + el.image}
                        className='h-72 object-cover rounded-xl object-center'
                        width='190px'
                        alt='...'
                      />
                      <p className='text-xl font-medium dark:text-orange-300 '>
                        {el.title}
                      </p>
                      <p className='dark:text-gray-300'>
                        {data.first_name + ' ' + data.last_name}
                      </p>
                    </li>
                  ))
                : ''}
            </OverflowList>
          </div>
        </div>
      </div>
    </>
  );
};
