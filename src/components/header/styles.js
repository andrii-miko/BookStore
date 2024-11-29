import styled from 'styled-components';

export const HeaderContainer = styled.div`
  font-family: 'Unica One', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 75px;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  font-size: 20px;
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  a {
    font-size: 20px;
  }
`;
