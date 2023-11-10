import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';
import { SearchAuthorContext } from '../../context/SearchAuthorContext';

export const SovetDavriAuthor = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await api.sovetDavri().catch((err) => err);
      setData(data.data);
    };
    getData();
  }, [setData]);

  return (
    <div>
      <ul className='list-none flex flex-wrap gap-9 mt-9'>
        {data?.length
          ? data.map((el) => {
              return (
                <li
                  className=' rounded-3xl w-72 pb-16 	 border    bg-cardBgLight dark:bg-cardBg '
                >
                  <Link to={'/singleAuthorPage/' + el.id}>
                    <img
                      src={`http://localhost:5000/${el.image}`}
                      alt='...'
                      className='w-full	h-56 object-coverbg-white mx-auto rounded-3xl'
                    />
                    <div>
                      <h4 className='text-2xl mt-3 mb-7 ml-4 dark:text-orange-200'>
                        {el.first_name + ' ' + el.last_name}
                      </h4>
                      <p className='ml-4 dark:text-gray-400	'>
                        {el.date_of_birth + ' - ' + el.date_of_death}
                      </p>
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
