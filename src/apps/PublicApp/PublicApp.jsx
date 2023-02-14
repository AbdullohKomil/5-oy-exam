import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SignIn } from '../../pages/SignIn/SignIn';
import { SignUp } from '../../pages/SignUp/SignUp';

export const PublicApp = () => {
  return (
    <Routes>
      <Route
        path='/'
        index
        element={<Navigate to='/login' />}
      />
      <Route
        path='/login'
        element={<SignIn></SignIn>}
      />

      <Route
        path='/register'
        element={<SignUp></SignUp>}
      />
    </Routes>
  );
};
