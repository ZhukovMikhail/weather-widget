import styled from '@emotion/styled';
import { Button } from '@mui/material';
export const Container = styled.div`
  position: relative;
  display: flex;
  width: 97vw;
  height: 4.2vw;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 767px) {
    height: 30px;
    justify-content: flex-start;
    h2 {
      margin: 0 auto;
    }
  }
`;
export const BgContainer = styled.div`
  display: flex;
  height: 5.5vw;
  background-color: rgba(211, 211, 211, 0.5);
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  @media screen and (max-width: 767px) {
    height: 7vw;
    /* margin-top: 20vh; */
  }
`;

export const Selection = styled.div`
  /* width: 30vw; */
  display: flex;
  /* justify-content: center; */
  align-items: center;

  select {
    font-size: 1.5vw;
    margin-left: 4vw;
    height: 2.8vw;
    width: 15vw;
    border: 1px solid #0c1475;
    border-radius: 5px;
    @media screen and (max-width: 767px) {
      height: 3.8vw;
      font-size: 2.5vw;
      width: 25vw;
      border-radius: 2.5px;
    }
  }
`;

export const ButtonAdd = styled(Button)`
  position: absolute;

  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  min-width: 10vw;
  height: 2vw;
  font-size: 1.5vw;
  @media screen and (max-width: 767px) {
    height: 3.5vw;
  }
`;
