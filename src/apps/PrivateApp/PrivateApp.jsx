import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
export const PrivateApp = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/JadidAdabiyodi' />}
        />
        
      </Routes>
    </>
  );
};
