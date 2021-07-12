import React from "react";
import { ButtonContainer } from "./button-components";

type Props = {
  variant: "primary" | "success" | "danger";
  children: any;
  onClick: (e: any) => void;
};

export default function Button({ variant, onClick, children }: Props) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}
