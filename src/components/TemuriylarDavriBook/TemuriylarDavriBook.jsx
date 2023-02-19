import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { api } from '../../api/api';
import DisplayBook from '../JadidAdabiyatiBook/DisplayBook';
export const TemuriylarDavriBook = () => {
  const [dataBook, setDataBook] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await api.temuriylarDavriBook().catch((err) => err);
      setDataBook(data.data);
    };
    getData();
  }, [setDataBook]);
  return (
    <div>
      <ul className='list-none flex-wrap justify-center  flex gap-9 mt-9'>
        {dataBook.length
          ? dataBook.map((el) => {
              return (
                <DisplayBook
                  key={el.id}
                  el={el}
                />
              );
            })
          : ''}
      </ul>
    </div>
  );
};
