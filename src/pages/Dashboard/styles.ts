import styled from "styled-components";

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
  align-items: center;
  justify-content: center;
  grid-gap: 32px;
`;
