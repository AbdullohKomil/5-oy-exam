import React from 'react';
import {
  HeaderProfileBox,
  LinksHeader,
  LinksHeaderNumber,
} from './HeaderProfile.styles';

export const HeaderProfile = () => {
  return (
    <div>
      <HeaderProfileBox>
        <LinksHeader to='/profile/profileActive'>
          <LinksHeaderNumber>1</LinksHeaderNumber>
          Profile
        </LinksHeader>
        <LinksHeader to='security'>
          <LinksHeaderNumber>2</LinksHeaderNumber>
          Security
        </LinksHeader>
        <LinksHeader to='settings'>
          <LinksHeaderNumber>3</LinksHeaderNumber>
          Settings
        </LinksHeader>
      </HeaderProfileBox>
    </div>
  );
};
