import styled from 'styled-components';

export const SettingsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SettingsBoxInner = styled.div`
  width: 709px;
`;

export const SettingsTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000;
`;

export const LanguageSelectTopText = styled.p`
  margin-top: 32px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464e5f;
  margin-bottom: 7px;
`;

export const LanguageSelect = styled.select`
  width: 708px;
  background: #f3f6f9;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  color: #464e5f;
  margin-bottom: 42px;
  &:focus {
    outline: none;
  }
`;

export const LanguageOption = styled.option``;

export const CheckboxWrapper = styled.div`
  
`;

export const CheckboxInput = styled.input`
  visibility: hidden;
  display: none;
  &:checked + label > span:before {
    transform: scale(1);
    opacity: 0;
    transition: all 0.4s ease;
  
  &:checked + label:before {
    background: #947ada;
  }}

  &:checked + label > span {
    background: #4f2edc;
    transform: translateX(20px);
    transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25),
      background 0.15s ease;
    box-shadow: 0 3px 8px rgba(79, 46, 220, 0.2);
  }
`;

export const CheckboxLabel = styled.label`
  position: relative;
  display: block;
  width: 60px;
  height: 40px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);

  &::before {
    content: '';
    position: relative;
    top: 3px;
    left: 3px;
    width: 34px;
    height: 14px;
    display: block;
    background: #9a9999;
    border-radius: 8px;
    transition: background 0.2s ease;
  }
  & > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    display: block;
    background: white;
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(154, 153, 153, 0.5);
    transition: all 0.2s ease;
  }
  & > span:before {
    content: '';
    position: absolute;
    display: block;
    margin: -18px;
    width: 56px;
    height: 56px;
    background: rgba(79, 46, 220, 0.5);
    border-radius: 50%;
    transform: scale(0);
    opacity: 1;
    pointer-events: none;
  }
`;
