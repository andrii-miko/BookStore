import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 30px;
    font-weight: 600;
    color: #fdbf0f;
  }
  input {
    background: #fff7e1;
    font-size: 16px;
    padding: 20px;
    width: 360px;
  }

  a {
    text-align: center;
  }
  button {
    border-radius: 10px;
    width: 360px;
    font-size: 20px;
    font-family: 'Syne', sans-serif;
  }
`;
