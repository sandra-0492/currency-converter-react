import styled from "styled-components";

export const LabelText = styled.span`
  width: 100%;
  max-width: 200px;
  display: inline-block;
  margin-right: 5px;
`;

export const Field = styled.input`
  border: 1px solid ${({ theme }) => theme.color.silver};
  padding: 10px;
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
`;

export const Button = styled.button`
  text-align: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  margin: 0 auto;
  display: block;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.flax};
  padding: 5px;
  background-color: ${({ theme }) => theme.color.white};
  transition: 0.3s;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.color.forestGreen};
  text-align: center;
  padding-top: 15px;
`;

export const Info = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.color.forestGreen};
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.color.crimson};
`;