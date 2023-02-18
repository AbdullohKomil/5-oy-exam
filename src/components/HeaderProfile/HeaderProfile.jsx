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
        <LinksHeader
          className={({ isActive }) =>
            isActive
              ? 'dark:bg-profileHeader bg-profileHeader'
              : 'dark:bg-profileHeader'
          }
          to='/profile/profileActive'
        >
          <LinksHeaderNumber className='dark:bg-transparent dark:border dark:border-gray-500 dark:text-gray-500' >1</LinksHeaderNumber>
          {lang[language]?.ProfilePage?.ProfileHeader?.profileLink}
        </LinksHeader>
        <LinksHeader
          className={({ isActive }) =>
            isActive
              ? 'dark:bg-profileHeader bg-profileHeader'
              : 'dark:bg-profileHeader'
          }
          to='security'
        >
          <LinksHeaderNumber className='dark:bg-transparent dark:border dark:border-gray-500 dark:text-gray-500' >2</LinksHeaderNumber>
          {lang[language]?.ProfilePage?.ProfileHeader?.securityLink}
        </LinksHeader>
        <LinksHeader
          className={({ isActive }) =>
            isActive
              ? 'dark:bg-profileHeader bg-profileHeader'
              : 'dark:bg-profileHeader'
          }
          to='settings'
        >
          <LinksHeaderNumber className='dark:bg-transparent dark:border dark:border-gray-500 dark:text-gray-500' >3</LinksHeaderNumber>
          {lang[language]?.ProfilePage?.ProfileHeader?.settingsLink}
        </LinksHeader>
      </HeaderProfileBox>
    </div>
  );
};
