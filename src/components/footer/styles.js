import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin: 0 auto;
  border-top: 2px dashed black;
  margin-inline: 75px;
  text-align: center;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-grow: 0;
  div {
    display: flex;
    gap: 10px;
    a {
      border: 1px solid black;
      border-radius: 50%;
      padding: 10px;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
`;
