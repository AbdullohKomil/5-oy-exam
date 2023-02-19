import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';

function DisplayBook({ el }) {
  const [author, setAuthor] = useState();
  useEffect(() => {
 
    api.SingleAuthor(el.author_id).then((author) => {
      setAuthor(author.data.first_name + ' ' + author.data.last_name);
    });
  }, []);

  return (
    <li className=' rounded-3xl w-30 pb-4 dark:bg-transparent'>
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
          <p className=' dark:text-gray-400	'>{author}</p>
        </div>
      </Link>
    </li>
  );
}

export default DisplayBook;
