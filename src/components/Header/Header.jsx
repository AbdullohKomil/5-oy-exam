import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { lang } from '../../lang/lang';

import logo from '../../assets/images/logo.svg';
import arrowDown from '../../assets/images/arrowdown.svg';

export const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const { language, setLanguage } = useContext(LanguageContext);

  const userInfo = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      <nav>
        <div className='flex justify-between items-center py-5'>
          <NavLink
            to='/'
            className='text-orange-300 text-2xl	'
          >
            <img
              src={logo}
              alt='logo'
            />
          </NavLink>
          <ul className='list-none flex justify-between w-64 items-center'>
            <li className=''>
              <NavLink
                className={({ isActive }) =>
                  isActive ? ' dark:text-white text-black' : 'text-gray-300'
                }
                to='/home'
              >
                {lang[language].HomePage?.header?.home}
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-black dark:text-white' : 'text-gray-300'
                }
                to='/kitoblar'
              >
                {lang[language].HomePage?.header?.books}
              </NavLink>
            </li>
            <li
              onClick={() => setDropdown(!dropdown)}
              className='cursor-pointer p-3 rounded-full text-white relative'
            >
              {userInfo.image != null ? (
                <>
                  <div
                    onClick={() => setDropdown(!dropdown)}
                    className='cursor-pointer  rounded-full  relative'
                  >
                    <img
                      src={'http://localhost:5000/' + userInfo.image}
                      alt=''
                      className='rounded-full'
                      width='49px'
                      style={{ height: '49px' }}
                    />
                  </div>
                </>
              ) : (
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className='cursor-pointer bg-orange-500 p-3 rounded-full text-white relative'
                >
                  <span>
                    {user.first_name.at(0) + '.' + user.last_name.at(0)}
                  </span>
                </div>
              )}
              <span
                className='absolute left-16 top-9   text-2xl text-black dark:text-gray-500
              '
              >
                <img
                  src={arrowDown}
                  alt=''
                />
              </span>
              <div className='absolute z-10 text-black rounded-lg right-1 top-16 '>
                <ul
                  className={
                    dropdown
                      ? 'w-36 dark:bg-black dark:text-orange-300 rounded-xl bg-zinc-300'
                      : 'hidden'
                  }
                >
                  <li className='py-2 pl-3 w-full  '>
                    <Link
                      className='w-full block'
                      to='/profile'
                    >
                      {lang[language].HomePage?.header?.profile}
                    </Link>
                  </li>
                  <li className='py-2 pl-3 w-full  '>
                    <Link
                      className='w-full block'
                      to='/addAuthor'
                    >
                      {lang[language].HomePage?.header?.addAuthor}
                    </Link>
                  </li>
                  <li className='py-2 pl-3 w-full  '>
                    <Link
                      className='w-full block'
                      to='/addBook'
                    >
                      {lang[language].HomePage?.header?.addBook}
                    </Link>
                  </li>
                  <li className='py-2 pl-3 w-full  '>
                    <button
                      className='w-full block text-left'
                      onClick={() => {
                        localStorage.clear();
                        location.replace('/login');
                      }}
                    >
                      {lang[language].HomePage?.header?.logOut}
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
