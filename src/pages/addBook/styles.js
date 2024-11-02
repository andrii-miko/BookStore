import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  margin: 20px;
  img {
    width: 300px;
    height: 440px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    height: 200px;
    width: 500px;
  }
  button {
    width: 250px;
    align-self: flex-end;
  }
`;
