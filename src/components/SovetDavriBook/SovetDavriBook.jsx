import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { api } from '../../api/api';
export const SovetDavriBook = () => {
  const [dataBook, setDataBook] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await api.sovetDavriBook().catch((err) => err);
      setDataBook(data.data);
    };
    getData();
  }, [setDataBook]);
  return (
    <div>
      <ul className='list-none flex-wrap flex gap-9 mt-9'>
        {dataBook.length
          ? dataBook.map((el) => {
              return (
                <li
                  key={el.id}
                  className=' rounded-3xl w-30 pb-4 dark:bg-transparent'
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
                      <p className=' dark:text-gray-400	'>Gʻafur Gʻulom</p>
                    </div>
                  </Link>
                </li>
              );
            })
          : ''}
      </ul>
    </div>
  );
};
