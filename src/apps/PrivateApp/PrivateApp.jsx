import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { TemuriylarDavri } from '../../components/TemuriylarDavri/TemuriylarDavri';
import { Home } from '../../pages/Home/Home';
export const PrivateApp = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
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
              path='JadidAdabiyoti'
              element={<TemuriylarDavri />}
            />
            <Route
              path='TemuriylarDavri'
              element={<TemuriylarDavri />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};
