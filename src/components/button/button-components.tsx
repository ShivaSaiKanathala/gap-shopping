import styled from "styled-components";

type ButtonProps = {
  variant: "primary" | "success" | "danger";
};

export const ButtonContainer = styled.button`
  height: 36px;
  padding: 8px 24px;
  white-space: nowrap;
  border: 0 none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.15s ease;
  ${({ variant }: ButtonProps) => {
    if (variant === "primary") {
      return `
            color: #fff;
            background-color: rgb(0, 82, 204);
            &:hover {
                background-color: rgb(0, 101, 255);
            }
            &:active {
                background-color: rgb(7, 71, 166);
            }
        `;
    } else if (variant === "success") {
      return `
            color: #fff;
            background-color: rgb(25, 135, 84);
            &:hover {
                background-color: rgb(21, 115, 71);
            }
            &:active {
                background-color: rgb(20, 108, 67);
            }
        `;
    } else if (variant === "danger") {
      return `
            color: #fff;
            background-color: rgb(222, 53, 11);
            &:hover {
                background-color: rgb(255, 86, 48);
            }
            &:active {
                background-color: rgb(191, 38, 0);
            }
        `;
    }
  }}
`;
