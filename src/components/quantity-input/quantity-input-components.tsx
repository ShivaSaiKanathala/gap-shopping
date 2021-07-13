import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: 120px;
  height: 36px;
  background-color: rgb(250, 251, 252);
  border: 2px solid rgb(223, 225, 230);
  border-radius: 4px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 36px;
  height: 100%;
  font-size: 1.2rem;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 36px;
  height: 100%;
  font-size: 1.5rem;
  color: rgb(0, 82, 204);
  cursor: pointer;
  user-select: none;
  &:hover {
    color: rgb(0, 101, 255);
  }
  &:active {
    color: rgb(7, 71, 166);
  }
`;
