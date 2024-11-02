import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => (props.$primary ? '#fdbf0f' : '#F9784B')};
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    filter: brightness(0.97);
  }
  &:active {
    transform: scale(0.95);
  }
`;
