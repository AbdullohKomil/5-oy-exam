import React, { useContext, useRef, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Slider from 'react-slick';
import { api } from '../../api/api';
import { Header } from '../../components/Header/Header';
import { LanguageContext } from '../../context/LanguageContext';
import { lang } from '../../lang/lang';
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
        .catch((err) => toast.error(err));

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
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <Header />
      <Slider {...settings}>
        <Hero className=''>
          <NavigationSpan className='bg-white'></NavigationSpan>
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <HeroTitle className='font-mono'>
            {lang[language]?.HomePage?.main?.slider?.SliderTitle1}
          </HeroTitle>
        </Hero>
        <Hero className=''>
          {' '}
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <NavigationSpan className='bg-white'></NavigationSpan>
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <HeroTitle className='font-mono'>
            {' '}
            {lang[language]?.HomePage?.main?.slider?.SliderTitle2}
          </HeroTitle>
        </Hero>
        <Hero className=''>
          {' '}
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <NavigationSpan className='bg-white'></NavigationSpan>
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <HeroTitle className='font-mono'>
            {' '}
            {lang[language]?.HomePage?.main?.slider?.SliderTitle3}
          </HeroTitle>
        </Hero>
        <Hero className=''>
          {' '}
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <NavigationSpan className='bg-bgSliderSpan'></NavigationSpan>
          <NavigationSpan className='bg-white'></NavigationSpan>
          <HeroTitle className='font-mono'>
            {lang[language]?.HomePage?.main?.slider?.SliderTitle4}
          </HeroTitle>
        </Hero>
      </Slider>
      <ShadowFormBox className='dark:bg-black'>
        <ShadowBoxTitle>            {lang[language]?.HomePage?.main?.search?.searchTitle}
</ShadowBoxTitle>
        <SearchForm onSubmit={handleSearchSubmit}>
          <SearchInput
            className='dark:bg-gray-800 dark:text-white'
            placeholder={
              lang[language]?.HomePage?.main?.search?.searchInputPlaceholder
            }
            type='text'
            ref={SearchInputRef}
          />
          <SubmitSearchButton
            type='submit'
            className='font-sans dark:text-black'
          >
            
            {lang[language]?.HomePage?.main?.search?.searchBtn}
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
        
      {lang[language]?.HomePage?.main?.mainCategory?.categoryTitle}
      </h2>
      <div className='flex justify-between w-2/4 mx-auto mt-5'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-300' : 'text-gray-300 dark:text-gray-700'
          }
          to='temuriylarDavriBook'
        >
          
        {lang[language]?.HomePage?.main?.mainCategory?.categoryTitle1}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-300' : 'text-gray-300 dark:text-gray-700'
          }
          to='jadidAdabiyotiBook'
        >
          
        {lang[language]?.HomePage?.main?.mainCategory?.categoryTitle2}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-300' : 'text-gray-300 dark:text-gray-700'
          }
          to='sovetDavriBook'
        >
          
        {lang[language]?.HomePage?.main?.mainCategory?.categoryTitle3}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-orange-300' : 'text-gray-300 dark:text-gray-700'
          }
          to='mustaqillikDavriBook'
        >
         
        {lang[language]?.HomePage?.main?.mainCategory?.categoryTitle4}
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
