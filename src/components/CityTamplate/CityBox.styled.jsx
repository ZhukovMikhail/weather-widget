import styled from '@emotion/styled';
import { AiFillCloseCircle } from 'react-icons/ai';

export const CloseIcon = styled(AiFillCloseCircle)`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  transition: 300ms;
  :hover {
    fill: red;
  }
`;

export const CityBox = styled.div`
  position: relative;
  min-width: 25vw;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  /* height: auto; */

  margin: 1vw;
  padding: 2vw 3vw 2vw 3vw;

  /* color: #0c1475; */
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
`;

export const MainBox = styled.div`
  height: 12vw;
`;
export const StyledSpan = styled.span`
  color: #d02402;
`;
export const TextBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IMG = styled.img`
  display: inline-block;
  width: 6vw;
  height: 6vw;
`;
