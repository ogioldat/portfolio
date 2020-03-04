import styled from "styled-components";

const Button = styled.button`
  padding: 8px 20px;
  border: none;
  background-color: ${({theme}) => theme.accent};
  border-radius: .3rem;
  font-weight: ${({theme}) => theme.bold};
  color: white;
`;

export default Button;
