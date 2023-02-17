import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

import BgLabel from '../../assets/images/LabelProfileBg.svg';

export const ProfileBox = styled.div`
  display: flex;
  padding-top: 163px;
  height: 100vh;
`;

export const LeftImg = styled.img``;

export const LeftName = styled.span`
  width: 175px;
  height: 175px;
  background-color: orange;
  display: flex;
  font-size: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const LeftProfileBox = styled.div`
  margin-right: 110px;
`;

export const LeftInputFile = styled.input`
  display: none;
`;

export const LeftLabelFile = styled.label`
  width: 51px;
  height: 51px;
  display: inline-block;
  background-image: url(${BgLabel});
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 300px;
  background-repeat: no-repeat;
  left: 120px;
`;

export const RightProfileBox = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #212121;
`;

export const RightProfileBoxTitle = styled.h2``;

export const RightForm = styled(Form)``;

export const RightLabelInput = styled.label`
  display: block;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464e5f;
  margin-bottom: 7px;
  margin-top: 32px;
`;

export const RightInputForm = styled(Field)`
  background: #f3f6f9;
  border-radius: 4px;
  width: 687px;
  padding: 12px 0px 12px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;
export const TextBottomInput = styled(ErrorMessage)``;

export const SubmitBtn = styled.button`
  color: #ffffff;
  background-color: #152540;
  padding: 12px 23px;
  border-radius: 4px;
  margin-top: 110px;
  margin-left: 690px;
`;
