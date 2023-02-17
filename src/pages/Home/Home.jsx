import React, { useContext, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { api } from '../../api/api';
import {
  Hero,
  HeroTitle,
  NavigationSpan,
  SearchForm,
  SearchInput,
  ShadowBoxTitle,
  ShadowFormBox,
  SubmitSearchButton,
} from './Home.styles';

import { Outlet } from 'react-router-dom';
import { SearchAuthorContext } from '../../context/SearchAuthorContext';
import { Header } from '../../components/Header/Header';
export const Home = () => {
  const { searchAuthor, setSearchAuthor } = useContext(SearchAuthorContext);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const inputValueSearch = useRef();

  const [searchData, setSearchData] = useState([]);

  const SearchAuthor = async () => {
    console.log(inputValueSearch.current.value);

    if (inputValueSearch.current.value != '') {
      const data = await api
        .searchAuthor(inputValueSearch.current.value)
        .catch((err) => console.log(err));
      console.log(data);
      setSearchData(data.data);
    }
    if (
      inputValueSearch.current.value == '' ||
      inputValueSearch.current.value == ' ' ||
      inputValueSearch.current.value == '  '
    ) {
      setSearchData([]);
    }
  };

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
    SearchAuthor();
    setSearchAuthor(inputValueSearch.current.value);
  };

  return (
    <>
      <div>
        <Header />
        <Slider {...settings}>
          <Hero className=''>
            <NavigationSpan className='bg-white'></NavigationSpan>
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <HeroTitle className='font-mono'>
              Temuriylar davri adabiyoti
            </HeroTitle>
          </Hero>
          <Hero className=''>
            {' '}
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <NavigationSpan className='bg-white'></NavigationSpan>
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <HeroTitle className='font-mono'>Jadid davri adabiyoti</HeroTitle>
          </Hero>
          <Hero className=''>
            {' '}
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <NavigationSpan className='bg-white'></NavigationSpan>
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <HeroTitle className='font-mono'>Sovet davri adabiyoti</HeroTitle>
          </Hero>
          <Hero className=''>
            {' '}
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
            <NavigationSpan className='bg-white'></NavigationSpan>
            <HeroTitle className='font-mono'>
              Mustaqillik davri adabiyoti
            </HeroTitle>
          </Hero>
        </Slider>
        <ShadowFormBox className='dark:bg-black'>
          <ShadowBoxTitle>Qidirish</ShadowBoxTitle>
          <SearchForm onSubmit={handleSearchSubmit}>
            <SearchInput
              className='dark:bg-gray-800'
              ref={inputValueSearch}
              placeholder='Adiblar'
              type='text'
            />
            <SubmitSearchButton
              type='submit'
              className='font-sans dark:text-black'
            >
              Izlash
            </SubmitSearchButton>
            {/* <p>{searchAuthor ? '' : '!!!This user not found'}</p> */}
          </SearchForm>
        </ShadowFormBox>

        {searchData.length ? (
          <ul className='flex mt-40 flex-wrap gap-5'>
            {searchData.map((el) => {
              return (
                <li
                  key={el.id}
                  className=' rounded-3xl  w-72 pb-16 bg-zinc-100	 border border-gray-200 shadow  dark:bg-neutral-900 dark:border-gray-700'
                >
                  <Link to={'/singleAuthorPage' + el.id}>
                    <img
                      src={`http://localhost:5000/${el.image}`}
                      alt='...'
                      className='w-full	h-56 object-contain bg-white mx-auto rounded-3xl'
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
            })}
          </ul>
        ) : (
          ''
        )}

        <h2 className='text-orange-300 text-3xl	text-center mt-44'>
          Asosiy kategoriyalar
        </h2>
        <div className='flex justify-between w-2/4 mx-auto mt-5'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-300' : 'text-gray-300'
            }
            to='temuriylarDavriAuthor'
          >
            Temuriylar davri
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-300' : 'text-gray-300'
            }
            to='jadidAdabiyotiAuthor'
          >
            Jadid adabiyoti
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-300' : 'text-gray-300'
            }
            to='sovetDavriAuthor'
          >
            Sovet davri
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-300' : 'text-gray-300'
            }
            to='mustaqillikDavriAuthor'
          >
            Mustaqillik davri
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};
