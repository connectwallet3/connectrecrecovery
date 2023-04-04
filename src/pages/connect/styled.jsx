import styled from 'styled-components';

export const Connect = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Box = styled.div`
  margin-top: 50px;
  border: 3px solid #8863fc;
  border-radius: 10px;
  width: 100%;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    border-radius: 100%;
    margin-bottom: 20px;
  }

  &:hover {
    background: #8863fc;
  }
`;
