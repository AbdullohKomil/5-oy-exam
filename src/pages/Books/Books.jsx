import React, { useRef, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Slider from 'react-slick';
import { api } from '../../api/api';
import { Header } from '../../components/Header/Header';
import {
  Hero,
  HeroTitle,
  NavigationSpan,
  SearchForm,
  SearchInput,
  ShadowBoxTitle,
  ShadowFormBox,
  SubmitSearchButton,
} from '../Home/Home.styles';
export const Books = () => {
  const SearchInputRef = useRef();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const [searchData, setSearchData] = useState([]);

  const SearchAuthor = async () => {
    if (SearchInputRef.current.value != '') {
      const data = await api
        .SearchBook(SearchInputRef.current.value)
        .catch((err) => console.log(err));

      console.log(data);

      setSearchData(data.data);
    }
    if (
      SearchInputRef.current.value == '' ||
      SearchInputRef.current.value == ' ' ||
      SearchInputRef.current.value == '  '
    ) {
      setSearchData([]);
    }
  };

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
    SearchAuthor();
  };

  return (
    <div>
      <Header />
      <Slider {...settings}>
        <Hero className=''>
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <HeroTitle className='font-mono'>
            Temuriylar davri adabiyoti
          </HeroTitle>
        </Hero>
        <Hero className=''>
          {' '}
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <HeroTitle className='font-mono'>Jadid davri adabiyoti</HeroTitle>
        </Hero>
        <Hero className=''>
          {' '}
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <HeroTitle className='font-mono'>Sovet davri adabiyoti</HeroTitle>
        </Hero>
        <Hero className=''>
          {' '}
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <NavigationSpan></NavigationSpan>
          <HeroTitle className='font-mono'>
            Mustaqillik davri adabiyoti
          </HeroTitle>
        </Hero>
      </Slider>
      <ShadowFormBox className='dark:bg-black'>
        <ShadowBoxTitle>Qidirish</ShadowBoxTitle>
        <SearchForm onSubmit={handleSearchSubmit}>
          <SearchInput
            className='dark:bg-gray-800 dark:text-white'
            placeholder='Adiblar'
            type='text'
            ref={SearchInputRef}
          />
          <SubmitSearchButton
            type='submit'
            className='font-sans dark:text-black'
          >
            Izlash
          </SubmitSearchButton>
        </SearchForm>
      </ShadowFormBox>

      {searchData.length ? (
        <ul className='flex mt-40 flex-wrap gap-5'>
          {searchData.map((el) => (
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
                  <p className=' dark:text-gray-400	'>Alisher Navoiy</p>
                </div>
              </Link>
            </li>
          ))}
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
            isActive ? 'text-orange-300' : 'text-gray-300 dark:text-gray-700'
          }
          to='temuriylarDavriBook'
        >
          Temuriylar davri
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-300' : 'text-gray-300 dark:text-gray-700'
          }
          to='jadidAdabiyotiBook'
        >
          Jadid adabiyoti
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-300' : 'text-gray-300 dark:text-gray-700'
          }
          to='sovetDavriBook'
        >
          Sovet davri
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-300' : 'text-gray-300 dark:text-gray-700'
          }
          to='mustaqillikDavriBook'
        >
          Mustaqillik davri
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
