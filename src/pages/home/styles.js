import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 36px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px;
  img {
    width: 526px;
    height: 538px;
  }
  width: 100%;
`;

export const SearchContainer = styled.div`
  width: 530px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    position: relative;
  }
  h1 {
    font-size: 70px;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #000;
    border-radius: 50px;
  }
  button {
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 70px;
  width: 100%;
  box-sizing: border-box;
  justify-items: center;
  column-gap: 10px;
  row-gap: 20px;
`;
