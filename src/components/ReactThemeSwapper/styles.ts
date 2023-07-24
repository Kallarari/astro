import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};
  transition-duration: 1s;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 10px 20px;
  animation-duration: 3s;
`;
