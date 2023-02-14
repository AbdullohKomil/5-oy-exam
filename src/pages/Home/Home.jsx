import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
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

export const Home = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const inputValueSearch = useRef();

  const SearchAuthor = async () => {
    const data = await api
      .searchAuthor(inputValueSearch.current.value)
      .catch((err) => console.log(err));
  };

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
    SearchAuthor();
  };

  return (
    <>
      <div>
        <NavigationSpan></NavigationSpan>
        <NavigationSpan></NavigationSpan>
        <NavigationSpan></NavigationSpan>
        <NavigationSpan></NavigationSpan>
        <HeroTitle className='font-mono'>Temuriylar davri adabiyoti</HeroTitle>
        <Slider {...settings}>
          <Hero className=''></Hero>
          <Hero className=''></Hero>
          <Hero className=''></Hero>
          <Hero className=''></Hero>
        </Slider>
        <ShadowFormBox>
          <ShadowBoxTitle>Qidirish</ShadowBoxTitle>
          <SearchForm onSubmit={handleSearchSubmit}>
            <SearchInput
              ref={inputValueSearch}
              placeholder='Adiblar, kitoblar, audiolar, maqolalar...'
              type='text'
            />
            <SubmitSearchButton
              type='submit'
              className='font-sans'
            >
              Izlash
            </SubmitSearchButton>
          </SearchForm>
        </ShadowFormBox>

        <h2 className='text-orange-300 text-3xl	text-center mt-44'>
          Asosiy kategoriyalar
        </h2>
        <div className='flex justify-between w-2/4 mx-auto mt-5'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-300' : 'text-gray-300'
            }
            to='temuriylarDavri'
          >
            Temuriylar davri
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-300' : 'text-gray-300'
            }
            to='jadidAdabiyoti'
          >
            Jadid adabiyoti
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-300' : 'text-gray-300'
            }
            to='sovetDavri'
          >
            Sovet davri
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-orange-300' : 'text-gray-300'
            }
            to='mustaqillikDavri'
          >
            Mustaqillik davri
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};
