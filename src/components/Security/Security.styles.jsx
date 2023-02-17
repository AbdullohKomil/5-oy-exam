import { Field, Form } from 'formik';
import styled from 'styled-components';

export const SecurityBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 712px;
  margin: 0 auto;
  height: 100vh;
`;

export const SecurityTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 32px;
`;

export const SecurityForm = styled(Form)`
  margin: 0 auto;
`;

export const SecurityInput = styled(Field)`
  background: #f3f6f9;
  border-radius: 4px;
  width: 708px;
  padding: 11px 0;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

export const SecurityLabel = styled.label`
  margin-bottom: 7px;
`;

export const SubmitButton = styled.button`
  color: #ffffff;
  background-color: #152540;
  padding: 12px 23px;
  border-radius: 4px;
  margin-top: 70px;
  margin-left: 560px;
`;
