import styled from 'styled-components';

export const QuantityInputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  button {
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    &:active {
      transform: scale(0.95);
    }
  }
  input {
    padding: 7px;
    border: 2px solid black;
    border-radius: 10px;
    width: 50px;
    text-align: center;
  }
`;
