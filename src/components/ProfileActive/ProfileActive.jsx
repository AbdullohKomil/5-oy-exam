import React, { useContext, useRef, useState } from 'react';
import {
  LeftImg,
  LeftInputFile,
  LeftLabelFile,
  LeftName,
  LeftProfileBox,
  ProfileBox,
  RightForm,
  RightInputForm,
  RightLabelInput,
  RightProfileBox,
  RightProfileBoxTitle,
  SubmitBtn,
  TextBottomInput,
} from './ProfileActive.styles';

import ProfileBg from '../../assets/images/ProfileImg.png';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { api } from '../../api/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/user/userAction';
import { lang } from '../../lang/lang';
import { LanguageContext } from '../../context/LanguageContext';
import { toast } from 'react-toastify';

export const ProfileActive = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required first name'),
    last_name: Yup.string().required('Required last name'),
    phone: Yup.number()
      .typeError('Iltimos son kiriting')
      .required('required phone !!!'),
  });
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const [defValInput, setdefValInput] = useState({
    first_namee: userInfo.first_name,
    last_namee: userInfo.last_name,
    phonee: userInfo.phone,
  });

  let initialValues = {
    first_name: defValInput.first_namee,
    last_name: defValInput.last_namee,
    phone: defValInput.phonee,
  };

  const filesRef = useRef();

  const userEdit = async (values) => {
    const formData = new FormData();
 

    formData.set('first_name', values.first_name);
    formData.set('last_name', values.last_name);
    formData.set('phone', values.phone);
    formData.set('image', filesRef.current.files[0]);

    const data = await api
      .userEditProfile(formData)
      .catch((err) => toast.error(err));

    if (data) {
      const user = await api
        .getUser(data?.data?.token || localStorage.getItem('token'))
        .catch((err) => toast.error(err));

      localStorage.setItem('user', JSON.stringify(user.data));
      dispatch(setUser(user.data));
      navigate('/');
    }
  };

  const handleSubmit = (values) => {
    userEdit(values);
  };

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <ProfileBox className='relative'>
        <LeftProfileBox>
          {userInfo.image != null ? (
            <>
              <img
                src={'http://localhost:5000/' + userInfo.image}
                alt=''
                className='rounded-full'
                width='175px'
                style={{ height: '175px' }}
              />
              <p className='mt-3 text-red-500'>!!!Image is required!!!</p>
            </>
          ) : (
            <LeftName>
              {userInfo.first_name.at(0) + '.' + userInfo.last_name.at(0)}
            </LeftName>
          )}
          <LeftInputFile
            type='file'
            name='image'
            ref={filesRef}
            id='InputProfile'
          />
          <LeftLabelFile htmlFor='InputProfile'></LeftLabelFile>
        </LeftProfileBox>
        <RightProfileBox>
          <RightProfileBoxTitle className='dark:text-white'>
            {lang[language]?.ProfilePage?.ProfileEditPage?.ProfileEditTitle}
          </RightProfileBoxTitle>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <RightForm>
              <RightLabelInput
                className='dark:text-white'
                htmlFor='firstName'
              >
                {
                  lang[language]?.ProfilePage?.ProfileEditPage
                    ?.ProfileFirstNameInput
                }
              </RightLabelInput>
              <RightInputForm
                placeholder='First Name'
                id='firstName'
                name='first_name'
              />
              <p className='text-red-600 text-sm dark:text-white '>
                <TextBottomInput name='first_name' />
              </p>
              <RightLabelInput
                className='dark:text-white'
                htmlFor='Lastname'
              >
                {
                  lang[language]?.ProfilePage?.ProfileEditPage
                    ?.ProfileLastNameInput
                }
              </RightLabelInput>
              <RightInputForm
                placeholder='Last Name'
                id='Lastname'
                name='last_name'
              />
              <p className='text-red-600 text-sm dark:text-white '>
                <TextBottomInput name='last_name' />
              </p>
              <RightLabelInput
                className='dark:text-white'
                htmlFor='Phone'
              >
                {
                  lang[language]?.ProfilePage?.ProfileEditPage
                    ?.ProfilePhoneInput
                }
              </RightLabelInput>
              <RightInputForm
                placeholder='Phone'
                id='Phone'
                name='phone'
              />
              <p className='text-red-600 text-sm dark:text-white '>
                <TextBottomInput name='phone' />
              </p>
              <SubmitBtn
                type='submit'
                className='dark:bg-white dark:text-black'
              >
                {lang[language]?.ProfilePage?.ProfileEditPage?.ProfileSaveBtn}
              </SubmitBtn>
            </RightForm>
          </Formik>
        </RightProfileBox>
      </ProfileBox>
    </div>
  );
};
