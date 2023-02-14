import styled from 'styled-components';

import HeroBg from '../../assets/images/HeroBg.svg';

export const Hero = styled.div`
  background-image: url(${HeroBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 21px;
  width: 100%;
  height: 346px;
`;

export const NavigationSpan = styled.span`
  position: absolute;
  z-index: 3;
  border-radius: 10px;
  width: 55px;
  height: 3px;
  background: rgba(255, 255, 255, 0.6);
  &:nth-child(1) {
    top: 350px;
    background-color: #fff;
    left: 360px;
  }
  &:nth-child(2) {
    top: 350px;
    left: 420px;
  }
  &:nth-child(3) {
    top: 350px;
    left: 480px;
  }
  &:nth-child(4) {
    top: 350px;
    left: 540px;
  }
`;

export const HeroTitle = styled.h2`
  font-weight: 400;
  font-size: 61px;
  line-height: 67px;
  color: #d1b89d;
  width: 337px;
  position: absolute;
  z-index: 3;
  left: 350px;
  top: 110px;
`;

export const ShadowFormBox = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  top: 370px;
  left: 500px;
  border-radius: 15px;
`;

export const ShadowBoxTitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #d1b89d;
  display: flex;
  padding-top: 29px;
  justify-content: center;
  margin-bottom: 9px;
`;

export const SearchForm = styled.form`
padding: 0px 73px 29px  ;`;

export const SearchInput = styled.input`
  padding: 12px 383px 12px 27px;
  width: 710px;
  background: #f5f5f5;
  margin-right: 14px;
  border-radius: 15px;
  &:focus {
    outline: none;
  }
`;

export const SubmitSearchButton = styled.button`
  padding: 12px 72.5px;
  background: #c9ac8c;
  border-radius: 15px;
  color: white;

`;
