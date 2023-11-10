import styled from 'styled-components';

import FileIcon from '../../assets/images/PlusAddFile.svg';

export const LabelFile = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  opacity: 0.7;
  display: inline-block;
  max-height: 428px;
  height: 100%;
  max-width: 315px;
  width: 100%;
  padding: 231px 73px 161px 73px;
  margin: 0;
  text-align: center;
  border-radius: 17px;
  border: 2px dashed #a1a1a1;
  background: #f8f8f8;
`;

export const FileIconSpan = styled.span`
  z-index: 10;
  position: absolute;
  background-image: url(${FileIcon});
  width: 62px;
  height: 62px;
  left: calc(50% - 31px);
  background-position: center;
  top: 160px;
`;

export const AddAuthorRight = styled.div` 
  height: 100%;
`;
