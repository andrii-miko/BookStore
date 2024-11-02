import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  img {
    cursor: pointer;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s;
    &:hover {
      transform: translate(0, -5px);
    }
    &:active {
      transform: scale(0.97);
    }
  }
  button {
    width: 100%;
  }
  div {
    display: flex;
    gap: 5px;
    width: 100%;
  }
`;

export const BookMarkContainer = styled.span`
  border: 2px solid #333;
  border-radius: 20px;
  height: 45px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.97);
  }
`;
