import styled from 'styled-components';

import FileIcon from '../../assets/images/PlusAddFile.svg';

export const LabelFile = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  opacity: 0.3;
  display: inline-block;
  padding: 231px 73px 161px 73px;
  margin: 0;
  background-color: #f8f8f8;
  text-align: center;
`;

export const FileIconSpan = styled.span`
  z-index: 10;
  position: absolute;
  background-image: url(${FileIcon});
  width: 62px;
  height: 62px;
  background-position: center;
  left: calc(50% - 32px);
  top: 160px;
`;
