import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderProfileBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 4;
  display: flex;
`;

export const LinksHeader = styled(NavLink)`
  border-radius: 4px 4px 0px 0px;
  width: 33%;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 23px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #464e5f;

  &.active {
    & > span {
      color: white;
      background-color: #152540;
    }
    background: #dde6f5;
    color: #152540;
  }
`;

export const LinksHeaderNumber = styled.span`
  padding: 7px 15px;
  border-radius: 4px;
  color: #3699ff;
  background-color: #e5eaee;
  margin-right: 10px;
`;
