import styled from 'styled-components';

export const ContantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  flex: start;
  gap: 10px;
  h1 {
    font-size: 36px;
  }
`;

export const BookContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 150px;
  img {
    width: 300px;
    height: 440px;
  }
`;

export const StyledInput = styled.input`
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  border: 2px dashed black;
  width: 500px;
  font-size: 16px;
`;

export const StyledTextArea = styled.textarea`
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  border: 2px dashed black;
  resize: none;
  overflow: hidden;
`;

export const PriceContainer = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 36px;
  }

  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  button {
    width: 100%;
  }
`;

export const MoreBooksContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 200px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 40px 70px;
  font-size: 30px;
  align-self: flex-start;
`;
