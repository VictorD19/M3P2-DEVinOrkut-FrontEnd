import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 1100px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const WrapperForm = styled.div`
  height: 1250px;
  background: #f9f9fb;
  padding: 5rem;
`;

export const WrapperLogo = styled.div`
display: 'flex',
flex-direction: 'column', 
height: 1250px;
background: linear-gradient(180deg, rgba(224, 25, 137, 0.6) 0%, #e01989 100%);
`;

export const Logo = styled.img`
  margin: 15rem 12rem;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem;
`;

export const ErrorForm = styled.span`
  color: red;
`;

export const ConfirmGroup = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0.5rem;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
`;
