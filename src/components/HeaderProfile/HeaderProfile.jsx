import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { lang } from '../../lang/lang';
import {
  HeaderProfileBox,
  LinksHeader,
  LinksHeaderNumber,
} from './HeaderProfile.styles';

export const HeaderProfile = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <HeaderProfileBox>
        <LinksHeader to='/profile/profileActive'>
          <LinksHeaderNumber>1</LinksHeaderNumber>
          {lang[language]?.ProfilePage?.ProfileHeader?.profileLink}
        </LinksHeader>
        <LinksHeader to='security'>
          <LinksHeaderNumber>2</LinksHeaderNumber>
          {lang[language]?.ProfilePage?.ProfileHeader?.securityLink}
        </LinksHeader>
        <LinksHeader to='settings'>
          <LinksHeaderNumber>3</LinksHeaderNumber>
          {lang[language]?.ProfilePage?.ProfileHeader?.settingsLink}
        </LinksHeader>
      </HeaderProfileBox>
    </div>
  );
};
