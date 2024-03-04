import styled from "styled-components";

export const Container = styled.div`
    padding: 127px 20px 0px 20px; //check right values
    margin: 0 auto;
    max-width: 375px;

    @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-top: 189px; //check right values
    padding-bottom: 349px; //check right values
  }

    @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    padding-top: 200px; //check right values
    padding-bottom: 114px; //check right values
}`
