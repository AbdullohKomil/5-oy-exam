import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const user = useSelector((state) => state.user.user);

  return (
    <header>
      <nav>
        <div className='flex justify-between items-center py-5'>
          <NavLink
            to='/'
            className='text-orange-300 text-2xl	'
          >
            Badiiyat
          </NavLink>
          <ul className='list-none flex justify-between w-56 items-center'>
            <li className=''>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-black' : 'text-gray-300'
                }
                to='/home'
              >
                Bosh Sahifa
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-black' : 'text-gray-300'
                }
                to='/kitoblar'
              >
                Kitoblar
              </NavLink>
            </li>
            <li
              onClick={() => setDropdown(!dropdown)}
              className='cursor-pointer p-3 bg-orange-600 rounded-full text-white relative'
            >
              {user.first_name.at(0) + '.' + user.last_name.at(0)}
              <div className='absolute z-10 text-black rounded-lg right-1 top-14  bg-zinc-200	'>
                <ul className={dropdown ? 'w-36' : 'hidden'}>
                  <li className='py-2 pl-3 pr-20'>
                    <Link to='profile'>Profile</Link>
                  </li>
                  <li className='py-2 pl-3 pr-10'>
                    <Link to='addAuthor'>Add author</Link>
                  </li>
                  <li className='py-2 pl-3 pr-10'>
                    <Link to='addBook'>Add book</Link>
                  </li>
                  <li className='py-2 pl-3 pr-16'>
                    <>Log out</>
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
