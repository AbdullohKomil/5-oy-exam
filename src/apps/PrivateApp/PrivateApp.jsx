import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { JadidAdabiyatiBook } from '../../components/JadidAdabiyatiBook/JadidAdabiyatiBook';
import { JadidAdabiyotiAuthor } from '../../components/JadidAdabiyotiAuthor/JadidAdabiyotiAuthor';
import { MustaqillikDavriAuthor } from '../../components/MustaqillikDavriAuthor/MustaqillikDavriAuthor';
import { MustaqillikDavriBook } from '../../components/MustaqillikDavriBook/MustaqillikDavriBook';
import { SingleAuthorPage } from '../../components/SingleAuthorPage/SingleAuthorPage';
import { SovetDavriAuthor } from '../../components/SovetDavriAuthor/SovetDavriAuthor';
import { SovetDavriBook } from '../../components/SovetDavriBook/SovetDavriBook';
import { TemuriylarDavriAuthor } from '../../components/TemuriylarDavriAuthor/TemuriylarDavriAuthor';
import { TemuriylarDavriBook } from '../../components/TemuriylarDavriBook/TemuriylarDavriBook';
import { Books } from '../../pages/Books/Books';
import { Home } from '../../pages/Home/Home';
import { SingleBookPage } from '../../pages/SingleBookPage/SingleBookPage';
import { HeaderProfile } from '../../components/HeaderProfile/HeaderProfile';
import { Profile } from '../../pages/Profile/Profile';
import { ProfileActive } from '../../components/ProfileActive/ProfileActive';
import { Security } from '../../components/Security/Security';
import { Settings } from '../../components/Settings/Settings';
export const PrivateApp = () => {
  return (
    <>
      <div className='dark:bg-black'>
        <div className=' container h-full mx-auto '> 
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/home' />}
          />
          <Route
            path='home/*'
            element={<Home />}
          >
            <Route
              index
              element={<Navigate to='temuriylarDavriAuthor' />}
            />
            <Route
              path='temuriylarDavriAuthor'
              element={<TemuriylarDavriAuthor />}
            />
            <Route
              path='jadidAdabiyotiAuthor'
              element={<JadidAdabiyotiAuthor />}
            />
            <Route
              path='sovetDavriAuthor'
              element={<SovetDavriAuthor />}
            />
            <Route
              path='mustaqillikDavriAuthor'
              element={<MustaqillikDavriAuthor />}
            />
          </Route>
          <Route
            path='kitoblar/*'
            element={<Books />}
          >
            <Route
              index
              element={<Navigate to='temuriylarDavriBook' />}
            />
            <Route
              path='temuriylarDavriBook'
              element={<TemuriylarDavriBook />}
            />
            <Route
              path='jadidAdabiyotiBook'
              element={<JadidAdabiyatiBook />}
            />
            <Route
              path='sovetDavriBook'
              element={<SovetDavriBook />}
            />
            <Route
              path='mustaqillikDavriBook'
              element={<MustaqillikDavriBook />}
            />
          </Route>

          <Route
            path='/singleAuthorPage/:id'
            element={<SingleAuthorPage />}
          />

          <Route
            path='/singleBookPage/:id'
            element={<SingleBookPage />}
          />

          <Route
            path='profile/*'
            element={<Profile />}
          >
            <Route
              index
              element={<Navigate to='profileActive' />}
            />
            <Route
              path='profileActive'
              element={<ProfileActive />}
            />
            <Route
              path='security'
              element={<Security />}
            />
            <Route
              path='settings'
              element={<Settings />}
            />
          </Route>
        </Routes>
      </div>
      </div>
    </>
  );
};
