import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 700px;
  margin: 20px;
  padding: 40px;
  box-shadow: 2px 2px 50px ${({ theme }) => theme.color.flax};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.ebb};
`;
