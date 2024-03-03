import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const  Question = styled.p`
font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.white};
  opacity: 30%;
`

export const LinkToSign = styled(Link)`
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: ${(p) => p.theme.colors.white};
opacity: 80%;
text-decoration: underline;
`
export const Container = styled.div`
display:flex;
margin-top: 12px`
