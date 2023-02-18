import React, { useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LanguageContext } from '../../context/LanguageContext';
import { ThemeContext } from '../../context/ThemeContext';
import { lang } from '../../lang/lang';
import { setLangEn } from '../../redux/langEn/langEnAction';
import { setLangRu } from '../../redux/langRu/langRuAction';
import { setLangUz } from '../../redux/langUz/langUzAction';
import { setTheme } from '../../redux/theme/themeAction';
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxWrapper,
  LanguageOption,
  LanguageSelect,
  LanguageSelectTopText,
  SettingsBox,
  SettingsBoxInner,
  SettingsTitle,
} from './Settings.style';

export const Settings = () => {
  const CheckboxRef = useRef();

  const { language, setLanguage } = useContext(LanguageContext);

  let { theme, setThemee } = useContext(ThemeContext);

  localStorage.setItem('theme', theme);
  const dispatch = useDispatch();

  dispatch(setTheme(localStorage.getItem('theme') || ''));

  let isChecked = localStorage.getItem('theme') != '';

  const [defChecked, setDefChecked] = useState(isChecked);

  const handleChangeCheckbox = () => {
    if (CheckboxRef.current.checked == true) {
      setThemee('dark');
    } else {
      setThemee('');
    }
    setDefChecked(!defChecked);
  };

  const ChangeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    dispatch(setLangUz(lang));
    dispatch(setLangEn(lang));
    dispatch(setLangRu(lang));
  };

  return (
    <>
      <SettingsBox>
        <SettingsBoxInner>
          <SettingsTitle className='dark:text-white'>
            {
              lang[language]?.ProfilePage?.ProfileSettingPage
                ?.ProfileSettingTitle
            }
          </SettingsTitle>
          <LanguageSelectTopText className='dark:text-white'>
            {
              lang[language]?.ProfilePage?.ProfileSettingPage
                ?.ProfileSettingLang
            }
          </LanguageSelectTopText>
          <LanguageSelect
            defaultValue={localStorage.getItem('language')}
            onChange={(evt) => ChangeLanguage(evt.target.value)}
          >
            <LanguageOption
              value='dis'
              selected
              disabled
            >
              Language
            </LanguageOption>
            <LanguageOption value='uz'>Ozbekcha</LanguageOption>
            <LanguageOption value='en'>English</LanguageOption>
            <LanguageOption value='ru'>Росисийский</LanguageOption>
          </LanguageSelect>
          <p className='mb-2 dark:text-white'>
            {' '}
            {lang[language]?.ProfilePage?.ProfileSettingPage?.ProfileSetTheme}
          </p>
          <CheckboxWrapper className='checkbox-wrapper-3'>
            <CheckboxInput
              onChange={handleChangeCheckbox}
              type='checkbox'
              id='cbx-3'
              defaultChecked={defChecked}
              ref={CheckboxRef}
            />
            <CheckboxLabel
              htmlFor='cbx-3'
              className='toggle'
            >
              <span></span>
            </CheckboxLabel>
          </CheckboxWrapper>
        </SettingsBoxInner>
      </SettingsBox>
    </>
  );
};
