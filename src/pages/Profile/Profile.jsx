import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderProfile } from '../../components/HeaderProfile/HeaderProfile';

export const Profile = () => {
  return (
    <>
      <HeaderProfile />
      <Outlet />
    </>
  );
};
